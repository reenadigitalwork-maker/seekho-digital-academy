/* Seekho Digital · local-only practice filters, campaign calculator and UTM builder. */
(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  // Search and category filters for the learning notes.
  const grid = $('#note-grid');
  if (grid) {
    const cards = $$('.editorial-note', grid);
    const search = $('#note-search');
    const buttons = $$('.editorial-filters [data-filter]');
    let category = 'all';
    const apply = () => {
      const term = (search?.value || '').trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const haystack = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
        const matchesTerm = !term || haystack.includes(term);
        const show = matchesCategory && matchesTerm;
        card.hidden = !show;
        if (show) visible += 1;
      });
      const empty = $('#note-empty');
      if (empty) empty.hidden = visible > 0;
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      category = button.dataset.filter || 'all';
      buttons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      apply();
    }));
    search?.addEventListener('input', apply);
  }

  // Campaign metrics calculator. Blank / zero denominators display an em dash.
  const metricIds = ['spend','impressions','clicks','conversions','revenue'];
  const metricInputs = Object.fromEntries(metricIds.map(id => [id, $(`#metric-${id}`)]));
  const results = $('#metric-results');
  if (results && metricIds.every(id => metricInputs[id])) {
    const number = id => {
      const raw = metricInputs[id].value.trim();
      if (raw === '') return null;
      const value = Number(raw);
      return Number.isFinite(value) && value >= 0 ? value : null;
    };
    const fmt = (value, suffix = '') => value === null || !Number.isFinite(value)
      ? '—'
      : `${value.toLocaleString('en-IN',{maximumFractionDigits:2,minimumFractionDigits:2})}${suffix}`;
    const calculate = () => {
      const spend = number('spend'), impressions = number('impressions'), clicks = number('clicks');
      const conversions = number('conversions'), revenue = number('revenue');
      const values = [
        ['CTR', impressions > 0 && clicks !== null ? clicks / impressions * 100 : null, '%', 'Clicks ÷ impressions'],
        ['CPC', clicks > 0 && spend !== null ? spend / clicks : null, '₹', 'Spend ÷ clicks'],
        ['Conversion rate', clicks > 0 && conversions !== null ? conversions / clicks * 100 : null, '%', 'Conversions ÷ clicks'],
        ['Cost per conversion', conversions > 0 && spend !== null ? spend / conversions : null, '₹', 'Spend ÷ conversions'],
        ['ROAS', spend > 0 && revenue !== null ? revenue / spend : null, '×', 'Attributed revenue ÷ spend']
      ];
      results.innerHTML = values.map(([label,value,suffix,description]) => {
        const formatted = value === null ? '—' : suffix === '%' ? fmt(value,'%') : suffix === '×' ? fmt(value,'×') : fmt(value);
        return `<article><span>${label}</span><b>${formatted}</b><small>${description}</small></article>`;
      }).join('');
      const notes = [];
      if (spend === null || impressions === null || clicks === null || conversions === null || revenue === null) {
        notes.push('Use valid non-negative numbers in every field.');
      }
      if (impressions !== null && clicks !== null && clicks > impressions) notes.push('Clicks exceed impressions. Check that both values use the same scope and reporting period.');
      if (clicks !== null && conversions !== null && conversions > clicks) notes.push('Conversions exceed clicks. This may be valid in some measurement setups, but check the event definition and attribution scope.');
      if (spend === 0) notes.push('ROAS cannot be calculated when ad spend is zero.');
      if (clicks === 0) notes.push('CPC and click-based conversion rate need at least one click.');
      if (conversions === 0) notes.push('Cost per conversion needs at least one conversion.');
      if (!notes.length) notes.push('These are practice calculations. Real platform reports may use different attribution and conversion definitions.');
      $('#metric-explain').textContent = notes.join(' ');
    };
    metricIds.forEach(id => metricInputs[id].addEventListener('input', calculate));
    $('#metric-reset')?.addEventListener('click', () => {
      const sample = {spend:1800,impressions:10000,clicks:600,conversions:18,revenue:9000};
      Object.entries(sample).forEach(([id,value]) => { metricInputs[id].value = String(value); });
      calculate();
    });
    calculate();
  }

  // UTM builder. Existing query parameters and fragments are preserved.
  const utmOutput = $('#utm-output');
  if (utmOutput) {
    let latestUrl = '';
    const clean = value => value.trim().toLowerCase().replace(/\s+/g,'_');
    const build = () => {
      const rawUrl = $('#utm-url').value.trim();
      const source = clean($('#utm-source').value);
      const medium = clean($('#utm-medium').value);
      const campaign = clean($('#utm-campaign').value);
      const content = clean($('#utm-content').value);
      const feedback = $('#utm-feedback');
      try {
        const url = new URL(rawUrl);
        if (!['http:','https:'].includes(url.protocol)) throw new Error('Use a complete http or https destination URL.');
        if (!source || !medium || !campaign) throw new Error('Source, medium and campaign are required.');
        if ([source,medium,campaign,content].some(value => /[?#&=]/.test(value))) throw new Error('Remove URL symbols such as ?, #, & and = from the campaign fields.');
        url.searchParams.set('utm_source',source);
        url.searchParams.set('utm_medium',medium);
        url.searchParams.set('utm_campaign',campaign);
        if (content) url.searchParams.set('utm_content',content); else url.searchParams.delete('utm_content');
        latestUrl = url.toString();
        utmOutput.textContent = latestUrl;
        feedback.textContent = 'Link built. Open it once to confirm the destination works before sharing.';
        return true;
      } catch (error) {
        latestUrl = '';
        utmOutput.textContent = 'Your tagged link will appear here.';
        feedback.textContent = error instanceof TypeError ? 'Enter a valid full URL, such as https://yourwebsite.com/page.' : error.message;
        return false;
      }
    };
    $('#utm-build')?.addEventListener('click',build);
    $('#utm-copy')?.addEventListener('click',async () => {
      if (!latestUrl && !build()) return;
      const feedback = $('#utm-feedback');
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(latestUrl);
        } else {
          const area = document.createElement('textarea');
          area.value = latestUrl; area.setAttribute('readonly','');
          area.style.position = 'absolute'; area.style.left = '-9999px';
          document.body.appendChild(area); area.select();
          const copied = document.execCommand('copy'); area.remove();
          if (!copied) throw new Error('Copy is not available in this browser. Select the link and copy it manually.');
        }
        feedback.textContent = 'Tagged link copied. Keep your campaign naming consistent.';
      } catch (error) {
        feedback.textContent = error.message || 'Could not copy automatically. Select the link and copy it manually.';
      }
    });
    ['utm-url','utm-source','utm-medium','utm-campaign','utm-content'].forEach(id => $(`#${id}`)?.addEventListener('input',() => { latestUrl = ''; }));
    build();
  }
})();
