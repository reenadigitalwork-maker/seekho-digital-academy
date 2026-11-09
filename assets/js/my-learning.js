/* Seekho Digital · learning dashboard. Reads the same local progress keys as the course pages. */
(() => {
  'use strict';
  const root = document.querySelector('[data-learning-dashboard]');
  if (!root || !window.SITE) return;
  const $ = (selector, scope = root) => scope.querySelector(selector);
  const safeRead = key => {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; }
  };
  const cleanCount = (value, max) => Array.isArray(value)
    ? [...new Set(value.filter(n => Number.isInteger(n) && n >= 0 && n < max))].length
    : 0;
  const modules = SITE.modules.map((item, index) => {
    const id = index + 1;
    const total = id === 1 ? 10 : (window.SEEKHO_COURSES?.[id]?.lessons?.length || 4);
    const key = id === 1 ? 'seekho-module-01-deep-v1' : `seekho-course-${id}-v1`;
    const saved = safeRead(key) || {};
    const completed = cleanCount(saved.completed, total);
    const project = id === 1 ? saved.brief : safeRead(`${key}-project`);
    const hasProject = project && typeof project === 'object' && Object.values(project).some(v => typeof v === 'string' && v.trim().length > 0);
    const started = completed > 0 || Number(saved.current) > 0 || Number(saved.currentLesson) > 0 || hasProject;
    const percent = Math.round(completed / total * 100);
    return {id,title:item.t,description:item.o,total,completed,percent,started,href:`modules/module-${String(id).padStart(2,'0')}.html`};
  });
  const totalLessons = modules.reduce((sum,m)=>sum+m.total,0);
  const doneLessons = modules.reduce((sum,m)=>sum+m.completed,0);
  const startedModules = modules.filter(m=>m.started).length;
  const overall = totalLessons ? Math.round(doneLessons/totalLessons*100) : 0;
  const practice = safeRead('seekho-practice-history') || {};
  const attempts = Number.isFinite(Number(practice.attempts)) ? Number(practice.attempts) : 0;
  const next = modules.find(m=>m.completed<m.total) || modules[modules.length-1];
  const nextLabel = next.started ? 'Continue learning' : 'Start learning';
  $('#ml-resume-link').href = next.href;
  $('#ml-resume-link').innerHTML = `${nextLabel} <span aria-hidden="true">→</span>`;
  $('#ml-next-link').href = next.href;
  $('#ml-next-link').innerHTML = `Open Module ${String(next.id).padStart(2,'0')} <span aria-hidden="true">→</span>`;
  $('#ml-next-title').textContent = next.completed === next.total ? 'You have completed the learning path.' : `Next up: Module ${String(next.id).padStart(2,'0')}.`;
  $('#ml-next-copy').textContent = next.completed === next.total
    ? 'Revisit any lesson, strengthen a project or repeat a practice set to keep your skills fresh.'
    : `${next.title} · ${next.completed} of ${next.total} lessons complete. Keep going at a pace that works for you.`;
  $('#ml-overall-pct').textContent = `${overall}%`;
  $('#ml-overall-count').textContent = `${doneLessons} of ${totalLessons} lessons`;
  $('#ml-ring').style.setProperty('--progress', `${overall*3.6}deg`);
  $('#ml-ring').setAttribute('aria-label', `Overall course progress: ${overall} percent, ${doneLessons} of ${totalLessons} lessons completed`);
  $('#ml-stats').innerHTML = [
    ['LESSONS COMPLETED',doneLessons,`Out of ${totalLessons} guided lessons`],
    ['MODULES STARTED',startedModules,'Your learning journey'],
    ['PRACTICE ATTEMPTS',attempts,'Across your practice sessions']
  ].map(([label,value,detail])=>`<article class="ml-stat"><span>${label}</span><b>${value}</b><small>${detail}</small></article>`).join('');
  $('#ml-module-grid').innerHTML = modules.map(m => {
    const status = m.completed === m.total ? 'Completed' : m.started ? 'In progress' : 'Not started';
    const action = m.completed === m.total ? 'Review module →' : m.started ? 'Continue module →' : 'Start module →';
    return `<article class="ml-module-card">
      <div class="ml-module-top"><span class="ml-module-num">${String(m.id).padStart(2,'0')}</span><span class="ml-module-status">${status}</span></div>
      <h3>${m.title}</h3><p>${m.description}</p>
      <div class="ml-progress-line" role="progressbar" aria-label="Module ${m.id} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${m.percent}"><span style="width:${m.percent}%"></span></div>
      <div class="ml-module-meta"><span>${m.completed} / ${m.total} lessons</span><b>${m.percent}%</b></div>
      <a class="ml-module-action" href="${m.href}">${action}</a>
    </article>`;
  }).join('');

  const storageKeys = [
    'seekho-module-01-deep-v1','seekho-practice-history','seekho-workbook-v1',
    ...Array.from({length:9},(_,i)=>`seekho-course-${i+2}-v1`),
    ...Array.from({length:9},(_,i)=>`seekho-course-${i+2}-v1-project`)
  ];
  const collectBackup = () => {
    const data = {};
    storageKeys.forEach(key => {
      try { const value = localStorage.getItem(key); if (value !== null) data[key] = value; } catch (_) {}
    });
    return {format:'seekho-digital-progress',version:1,createdAt:new Date().toISOString(),storage:data};
  };
  $('#ml-export').addEventListener('click', () => {
    const backup = collectBackup();
    const blob = new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'seekho-digital-progress-backup.json';
    document.body.appendChild(a); a.click(); a.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),1000);
    $('#ml-backup-status').textContent = 'Backup downloaded. Keep the JSON file somewhere safe.';
  });
  $('#ml-import-trigger').addEventListener('click', () => $('#ml-import-file').click());
  $('#ml-import-file').addEventListener('change', async event => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      $('#ml-backup-status').textContent = 'That file is larger than 5 MB. Choose a valid Seekho backup.';
      event.target.value = ''; return;
    }
    try {
      const backup = JSON.parse(await file.text());
      if (backup.format !== 'seekho-digital-progress' || backup.version !== 1 || !backup.storage || typeof backup.storage !== 'object') {
        throw new Error('This is not a recognised Seekho progress backup.');
      }
      const allowed = new Set(storageKeys);
      const entries = Object.entries(backup.storage).filter(([key,value]) => allowed.has(key) && typeof value === 'string');
      if (!entries.length) throw new Error('No recognised learning data was found in this backup.');
      entries.forEach(([,value]) => JSON.parse(value));
      if (!window.confirm(`Restore ${entries.length} saved items? Matching progress and notes in this browser will be replaced.`)) {
        $('#ml-backup-status').textContent = 'Restore cancelled. Your current progress is unchanged.';
        event.target.value = ''; return;
      }
      entries.forEach(([key,value])=>localStorage.setItem(key,value));
      $('#ml-backup-status').textContent = 'Backup restored. Refreshing your dashboard…';
      window.setTimeout(()=>location.reload(),450);
    } catch (error) {
      $('#ml-backup-status').textContent = error && error.message ? error.message : 'Could not read that backup. Your saved progress is unchanged.';
    }
    event.target.value = '';
  });
})();
