/* Seekho Digital Practice Zone · question feedback, filters and local score history. */
(() => {
  'use strict';
  const root=document.querySelector('[data-practice-zone]');
  if(!root||!window.SEEKHO_COURSES)return;
  const $=s=>root.querySelector(s),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const names={1:'Digital Marketing Foundations',...Object.fromEntries(Object.entries(SEEKHO_COURSES).map(([id,c])=>[id,c.title]))};
  const bank=[
    {m:1,t:'Foundations',q:'Which statement best describes marketing?',o:['Posting daily on social media','Creating, communicating, delivering and exchanging value','Paying for advertisements only'],a:1,w:'Marketing is the wider value-creation process. Advertising is one possible promotional activity.'},
    {m:1,t:'Audience research',q:'Which customer research question is least leading?',o:['You love our product, right?','Tell me about the last time you bought this kind of product.','Would you agree our prices are fair?'],a:1,w:'A question about a real past event invites detail without pushing someone towards the answer you prefer.'},
    {m:1,t:'Channels',q:'In “an Instagram Reel”, what is Instagram?',o:['The platform','The content format','The customer need'],a:0,w:'Instagram is a platform. Social media is the channel. A Reel is a content format.'},
    {m:1,t:'Metrics',q:'A site receives 1,000 visits and 20 orders. What is the visit-to-order rate?',o:['0.2%','2%','20%'],a:1,w:'20 ÷ 1,000 × 100 = 2%. Always state the event and denominator.'},
    {m:1,t:'Metrics',q:'A campaign has ₹2,000 ad spend and ₹8,000 attributed revenue. What is ROAS?',o:['0.25×','2×','4×'],a:2,w:'ROAS = attributed revenue ÷ ad spend = ₹8,000 ÷ ₹2,000 = 4×. It is not profit.'},
    {m:1,t:'Strategy',q:'A bakery has many likes but few orders. What should be examined first?',o:['Buy more followers','Review audience fit, offer, price, trust and ordering experience','Post at exactly the same time daily'],a:1,w:'Likes are attention, not proof that the offer and customer journey work.'},
    {m:1,t:'Planning',q:'Which is the strongest SMART-style objective?',o:['Become famous soon','Get more likes','Generate 20 qualified local enquiries in 30 days'],a:2,w:'The objective names the action, quality/context, quantity and time period. Feasibility still needs evidence.'},
    {m:1,t:'Customer journey',q:'A visitor compares prices, ingredients and reviews before buying. Which stage is most likely?',o:['Awareness','Consideration','Advocacy'],a:1,w:'The visitor is evaluating options and reducing uncertainty. That is a consideration-stage behaviour.'}
  ];
  Object.entries(SEEKHO_COURSES).forEach(([m,c])=>c.lessons.forEach(l=>bank.push({m:Number(m),t:l.short,q:l.check.q,o:l.check.options,a:l.check.correct,w:l.check.why})));
  Object.entries(SEEKHO_COURSES).forEach(([m,c])=>bank.push({m:Number(m),t:'Module review',q:c.final.q,o:c.final.options,a:c.final.correct,w:c.final.why}));
  let questions=[],index=0,score=0,wrong=[],answered=false,attempts=0,finished=false;
  try{const st=JSON.parse(localStorage.getItem('seekho-practice-history')||'{}');attempts=Number(st.attempts)||0;}catch(_){ }
  $('#practice-total').textContent=`${bank.length} questions available`;
  $('#practice-attempts').textContent=`${attempts} completed attempts on this device`;
  function filtered(){const m=$('#practice-module').value;return bank.filter(q=>m==='all'||String(q.m)===m);}
  function start(list=filtered()){
    const count=$('#practice-count').value;questions=list.slice();if(count!=='all')questions=questions.slice(0,Number(count));
    index=0;score=0;wrong=[];answered=false;finished=false;
    if(!questions.length){$('#practice-stage').innerHTML='<p>No questions found for this selection.</p>';return;}
    $('#practice-setup').hidden=true;$('#practice-stage').hidden=false;render();
  }
  function render(){const q=questions[index];answered=false;$('#practice-kicker').textContent=`MODULE ${String(q.m).padStart(2,'0')} · ${names[q.m]}`;$('#practice-topic').textContent=q.t;$('#practice-count-label').textContent=`QUESTION ${index+1} / ${questions.length}`;$('#practice-progress').style.width=`${index/questions.length*100}%`;$('#practice-score-live').textContent=`${score} correct`;$('#practice-question').textContent=q.q;$('#practice-options').innerHTML=q.o.map((o,i)=>`<button type="button" data-choice="${i}">${String.fromCharCode(65+i)} · ${esc(o)}</button>`).join('');$('#practice-feedback').textContent='Choose the best answer to reveal an explanation.';$('#practice-next').disabled=true;$('#practice-next').textContent=index===questions.length-1?'Finish practice':'Next question →';$('#practice-options').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{if(answered)return;answered=true;const a=Number(b.dataset.choice),ok=a===q.a;if(ok)score++;else wrong.push(q);$('#practice-options').querySelectorAll('button').forEach((x,i)=>{x.disabled=true;if(i===q.a)x.classList.add('correct');if(i===a&&!ok)x.classList.add('incorrect');});$('#practice-score-live').textContent=`${score} correct`;$('#practice-feedback').textContent=(ok?'Correct. ':'Review this. ')+q.w;$('#practice-next').disabled=false;}));}
  function finish(){finished=true;const pct=Math.round(score/questions.length*100);$('#practice-progress').style.width='100%';$('#practice-count-label').textContent='PRACTICE COMPLETE';$('#practice-topic').textContent=`${score} / ${questions.length} correct · ${pct}%`;$(`#practice-question`).textContent=pct>=80?'Strong work. Can you explain the reasoning without looking?':pct>=60?'Good progress. Revisit the topics you found difficult.':'This is a starting point. Review the explanations and try again.';$('#practice-options').innerHTML=`<div class="practice-review"><h3>Review to strengthen</h3>${wrong.length?wrong.map((q,i)=>`<article><b>${i+1}. ${esc(q.q)}</b><p>${esc(q.w)}</p></article>`).join(''):'<p>You answered every question correctly in this attempt. Try another module to keep learning.'}</div>`;$('#practice-feedback').textContent='Your score is saved locally in this browser.';$('#practice-next').disabled=false;$('#practice-next').textContent=wrong.length?'Retry missed questions ↻':'Start another set ↻';attempts++;try{localStorage.setItem('seekho-practice-history',JSON.stringify({attempts,lastScore:score,lastTotal:questions.length,lastPct:pct}));}catch(_){}$('#practice-attempts').textContent=`${attempts} completed attempts on this device`;}
  $('#practice-start').addEventListener('click',()=>start());
  $('#practice-next').addEventListener('click',()=>{if(finished){if(wrong.length){start(wrong);}else{start(filtered());}return;}if(index<questions.length-1&&answered){index++;render();}else if(index===questions.length-1&&answered){finish();}});
  $('#practice-change').addEventListener('click',()=>{$('#practice-stage').hidden=true;$('#practice-setup').hidden=false;});
  $('#practice-module').addEventListener('change',()=>{$('#practice-total').textContent=`${filtered().length} questions in this selection`;});
})();
