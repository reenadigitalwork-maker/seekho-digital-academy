/* Seekho Digital · Reusable learning engine for Modules 02–10. Progress and drafts stay in this browser. */
(() => {
  'use strict';
  const root = document.querySelector('[data-course-id]');
  if (!root || !window.SEEKHO_COURSES) return;
  const id = Number(root.dataset.courseId);
  const course = window.SEEKHO_COURSES[id];
  if (!course) return;
  const $ = (s, e = root) => e.querySelector(s);
  const $$ = (s, e = root) => [...e.querySelectorAll(s)];
  const key = `seekho-course-${id}-v1`;
  const flow = {
    2:['Visitor need','Page structure','Useful content','Clear action','Test & improve'],
    3:['Search question','Intent research','Helpful page','Discovery','Measure'],
    4:['Audience insight','Brand promise','Useful content','Conversation','Learn'],
    5:['Business goal','Campaign setup','Relevant creative','Landing page','Measure'],
    6:['Audience question','Research','Create','Edit','Distribute'],
    7:['Permission','Relevance','Helpful email','Automation','Respect choice'],
    8:['Audience need','Evidence','Honest guide','Disclosure','Review'],
    9:['Business question','Event definition','Clean data','Interpret','Decide'],
    10:['Discovery','Scope','Create','Review','Handover']
  };
  const esc = v => String(v ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (_) { saved = {}; }
  let current = Math.max(0, Math.min(course.lessons.length - 1, Number(saved.current) || 0));
  let completed = Array.isArray(saved.completed) ? [...new Set(saved.completed.filter(n => Number.isInteger(n) && n >= 0 && n < course.lessons.length))] : [];
  let quizIndex = 0, quizScore = 0, quizAnswered = false, quizFinished = false;
  const quiz = [...course.lessons.map(x => x.check), course.final];
  const projectFields = [
    ['objective','Business goal / objective','What should improve, and by when?'],
    ['audience','Audience and need','Who is this for? What do they need?'],
    ['approach','My plan / deliverable','What will I create or recommend, and why?'],
    ['measure','Measurement / evidence','What will I measure? State the numerator, denominator and time window where relevant.'],
    ['risks','Assumptions, risks and next step','What is still uncertain? What would I check next?']
  ];
  const readDraft = () => { try { return JSON.parse(localStorage.getItem(`${key}-project`) || '{}') || {}; } catch (_) { return {}; } };
  let draft = readDraft();

  root.innerHTML = `
    <section class="course-hero"><div class="course-wrap course-hero-grid"><div><a class="course-back" href="../learning.html">← All learning modules</a><span class="course-kicker">SEEKHO DIGITAL · MODULE ${String(id).padStart(2,'0')}</span><h1>${esc(course.title)}</h1><p class="course-lead">${esc(course.outcome)}</p><div class="course-pills"><span>${esc(course.level)}</span><span>${esc(course.duration)}</span><span>${course.lessons.length} guided lessons</span></div></div><div class="course-hero-art" role="img" aria-label="A five-stage learning path from audience understanding to measurable improvement"><span>THE LEARNING LOOP</span><div class="course-flow-hero">${flow[id].map((x,i)=>`<i><b>0${i+1}</b>${esc(x)}</i>`).join('')}</div></div></div></section>
    <section class="course-section" id="classroom"><div class="course-wrap"><div class="course-head"><div><span class="course-eyebrow">YOUR LEARNING SPACE</span><h2>Understand the idea. <em>Then use it.</em></h2><p>Work through the lessons in order, try each checkpoint and mark a lesson complete when you can explain it in your own words.</p></div><div class="course-progress-card" aria-live="polite"><div><span>MODULE PROGRESS</span><b id="course-progress-pct">0%</b></div><div class="course-progress-track"><span id="course-progress-bar"></span></div><small id="course-progress-copy">0 of ${course.lessons.length} lessons complete · saved on this device</small></div></div>
      <div class="course-classroom"><aside class="course-sidebar"><div class="course-sidebar-top"><span>MODULE ${String(id).padStart(2,'0')}</span><b>Lesson path</b></div><nav id="course-lesson-nav" aria-label="Lessons in this module"></nav><div class="course-sidebar-note"><b>Learning tip</b><p>After each lesson, close the page for a moment and explain the main idea without looking. Then return and check what you missed.</p></div><button type="button" class="course-reset" id="course-reset-progress">Reset lesson progress</button></aside>
      <article class="course-lesson-card"><div class="course-lesson-meta"><span id="course-lesson-number">LESSON 01</span><span id="course-lesson-time">15 MIN</span></div><div id="course-lesson-content" tabindex="-1" aria-live="polite"></div><div class="course-lesson-actions"><button type="button" class="course-complete" id="course-complete">Mark lesson complete ✓</button><div><button type="button" id="course-prev" disabled>← Previous</button><button type="button" id="course-next">Next lesson →</button></div></div></article></div>
    </div></section>
    <section class="course-visual-section"><div class="course-wrap"><div class="course-visual-heading"><span class="course-eyebrow">SEE THE WHOLE PROCESS</span><h2>One connected <em>workflow.</em></h2><p>Digital marketing is a sequence of decisions. Each step should make the next step easier and more useful.</p></div><div class="course-flow-strip">${flow[id].map((x,i)=>`<div><b>0${i+1}</b><span>${esc(x)}</span></div>`).join('<i aria-hidden="true">→</i>')}</div></div></section>
    <section class="course-section course-quiz-section" id="knowledge-check"><div class="course-wrap course-two-col"><div><span class="course-eyebrow">CHECK YOUR UNDERSTANDING</span><h2>Small quiz. <em>Clear feedback.</em></h2><p>Answer the questions and read the explanation. The score is a learning signal—not a judgement of your ability.</p><ul class="course-check-list"><li>Questions are based on the lessons.</li><li>Each answer includes a reason.</li><li>You can retry and improve.</li></ul></div><div class="course-quiz-card"><div class="course-quiz-top"><span id="course-quiz-count">QUESTION 1 / ${quiz.length}</span><b id="course-quiz-score">0 correct</b></div><div class="course-quiz-track"><span id="course-quiz-bar"></span></div><h3 id="course-quiz-question"></h3><div id="course-quiz-options" class="course-quiz-options"></div><p id="course-quiz-feedback" class="course-quiz-feedback" role="status" aria-live="polite">Choose the answer you think is best.</p><button type="button" class="course-quiz-next" id="course-quiz-next" disabled>Next question →</button></div></div></section>
    <section class="course-project-section" id="project"><div class="course-wrap"><div class="course-project-head"><div><span class="course-eyebrow">YOUR MODULE PROJECT</span><h2>${esc(course.project.title)}</h2></div><p>${esc(course.project.brief)}</p></div><div class="course-project-grid"><div class="course-project-guide"><span class="course-project-label">PROJECT BRIEF</span><h3>What you will create</h3><ul>${course.project.deliverables.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h3>Suggested workflow</h3><ol>${course.project.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><p class="course-project-note">This is a fictional learning exercise. Label the work as practice in any portfolio. Do not present invented figures as real client results.</p></div><form id="course-project-form" class="course-project-form"><div class="course-project-form-head"><b>MY PROJECT WORKSHEET</b><span id="course-project-status">Saved on this device</span></div>${projectFields.map(([name,label,placeholder],i)=>`<label><span>0${i+1} · ${esc(label)}</span><textarea name="${name}" rows="3" placeholder="${esc(placeholder)}">${esc(draft[name] || '')}</textarea></label>`).join('')}<div class="course-project-buttons"><button type="button" id="course-project-download">Download my project notes</button><button type="button" class="secondary" id="course-project-clear">Clear worksheet</button></div><p class="course-project-privacy">Your draft is stored in this browser only. It is not sent to a server and may not follow you to another device.</p></form></div></div></section>
    <section class="course-section course-glossary-section" id="glossary"><div class="course-wrap"><div class="course-glossary-head"><div><span class="course-eyebrow">WORDS MADE SIMPLE</span><h2>Module <em>glossary.</em></h2><p>Search these terms whenever a new word feels unfamiliar.</p></div><label class="course-glossary-search"><span aria-hidden="true">⌕</span><span class="sr">Search glossary</span><input id="course-glossary-search" type="search" placeholder="Search a word or meaning"></label></div><div class="course-glossary-grid" id="course-glossary-grid"></div><p class="course-glossary-empty" id="course-glossary-empty" hidden>No matching terms. Try another word.</p></div></section>
    <section class="course-next-section"><div class="course-wrap"><div><span class="course-eyebrow">KEEP THE MOMENTUM</span><h2>Learning grows <em>one step at a time.</em></h2><p>Revisit a lesson, practise the project or continue to the next module when you are ready.</p></div><div><a class="course-next-link" href="../learning.html">View all modules →</a><a class="course-next-link primary" href="${id===10?'module-01.html':`module-${String(id+1).padStart(2,'0')}.html`}">${id===10?'Back to Module 01':'Continue to Module '+String(id+1).padStart(2,'0')} →</a></div></div></section>`;

  function store() { try { localStorage.setItem(key, JSON.stringify({current,completed})); } catch (_) {} }
  function updateProgress() {
    const pct = Math.round(completed.length / course.lessons.length * 100);
    $('#course-progress-pct').textContent = `${pct}%`;
    $('#course-progress-bar').style.width = `${pct}%`;
    $('#course-progress-copy').textContent = `${completed.length} of ${course.lessons.length} lessons complete · saved on this device`;
    $$('#course-lesson-nav button').forEach((b,i)=>{b.classList.toggle('is-complete',completed.includes(i));b.classList.toggle('is-current',i===current);b.setAttribute('aria-current',i===current?'step':'false');});
    $('#course-complete').textContent = completed.includes(current) ? 'Lesson completed ✓' : 'Mark lesson complete ✓';
    $('#course-complete').classList.toggle('done',completed.includes(current));
  }
  function renderNav() {
    $('#course-lesson-nav').innerHTML = course.lessons.map((l,i)=>`<button type="button" data-lesson="${i}"><span>${String(i+1).padStart(2,'0')}</span><b>${esc(l.short)}</b><i aria-hidden="true">✓</i></button>`).join('');
    $$('#course-lesson-nav button').forEach(b=>b.addEventListener('click',()=>showLesson(Number(b.dataset.lesson),true)));
  }
  function renderLesson() {
    const l=course.lessons[current];
    $('#course-lesson-number').textContent=`LESSON ${String(current+1).padStart(2,'0')} / ${String(course.lessons.length).padStart(2,'0')}`;
    $('#course-lesson-time').textContent=`ABOUT ${l.minutes} MINUTES`;
    $('#course-lesson-content').innerHTML=`<span class="course-lesson-tag">${esc(l.short)}</span><h2>${esc(l.title)}</h2><p class="course-lesson-intro">${esc(l.intro)}</p>${l.sections.map((s,i)=>`<section class="course-explain"><h3>${esc(s.heading)}</h3><p>${esc(s.body)}</p>${s.bullets?`<ul>${s.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}</section>`).join('')}<div class="course-example"><span>REAL-LIFE THINKING</span><h3>${esc(l.example.title)}</h3><p>${esc(l.example.body)}</p></div><div class="course-activity"><span>YOUR TURN · 5–10 MIN</span><h3>${esc(l.task.title)}</h3><p>${esc(l.task.body)}</p><ol>${l.task.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div><section class="course-checkpoint" aria-labelledby="course-check-title"><span>PAUSE & CHECK</span><h3 id="course-check-title">${esc(l.check.q)}</h3><div class="course-check-options">${l.check.options.map((o,i)=>`<button type="button" data-check-option="${i}">${String.fromCharCode(65+i)} · ${esc(o)}</button>`).join('')}</div><p class="course-check-feedback" id="course-check-feedback" role="status" aria-live="polite">Choose an answer to reveal the explanation.</p></section>`;
    const options=$$('[data-check-option]');
    options.forEach(b=>b.addEventListener('click',()=>{const chosen=Number(b.dataset.checkOption);options.forEach((x,i)=>{x.disabled=true;if(i===l.check.correct)x.classList.add('correct');if(i===chosen&&chosen!==l.check.correct)x.classList.add('incorrect');});$('#course-check-feedback').textContent=(chosen===l.check.correct?'Correct. ':'Not quite. ')+l.check.why;}));
    $('#course-prev').disabled=current===0;
    $('#course-next').textContent=current===course.lessons.length-1?'Go to module quiz ↓':'Next lesson →';
    updateProgress();
  }
  function showLesson(n,focus=false){current=Math.max(0,Math.min(course.lessons.length-1,n));store();renderLesson();if(focus)$('#course-lesson-content').focus({preventScroll:true});}
  $('#course-prev').addEventListener('click',()=>showLesson(current-1,true));
  $('#course-next').addEventListener('click',()=>{if(current<course.lessons.length-1)showLesson(current+1,true);else $('#knowledge-check').scrollIntoView({behavior:'smooth'});});
  $('#course-complete').addEventListener('click',()=>{if(!completed.includes(current))completed.push(current);store();updateProgress();});
  $('#course-reset-progress').addEventListener('click',()=>{if(confirm('Reset completed lessons for this module on this device? Your project worksheet will stay saved.')){completed=[];current=0;store();showLesson(0);}});

  function renderQuiz(){const q=quiz[quizIndex];quizAnswered=false;quizFinished=false;$('#course-quiz-count').textContent=`QUESTION ${quizIndex+1} / ${quiz.length}`;$('#course-quiz-score').textContent=`${quizScore} correct`;$('#course-quiz-bar').style.width=`${quizIndex/quiz.length*100}%`;$('#course-quiz-question').textContent=q.q;$('#course-quiz-options').innerHTML=q.options.map((x,i)=>`<button type="button" data-q-option="${i}">${String.fromCharCode(65+i)} · ${esc(x)}</button>`).join('');$('#course-quiz-feedback').textContent='Choose the answer you think is best.';$('#course-quiz-next').disabled=true;$('#course-quiz-next').textContent=quizIndex===quiz.length-1?'See my result':'Next question →';$$('[data-q-option]').forEach(b=>b.addEventListener('click',()=>{if(quizAnswered)return;quizAnswered=true;const chosen=Number(b.dataset.qOption);if(chosen===q.correct)quizScore++;$$('[data-q-option]').forEach((x,i)=>{x.disabled=true;if(i===q.correct)x.classList.add('correct');if(i===chosen&&chosen!==q.correct)x.classList.add('incorrect');});$('#course-quiz-score').textContent=`${quizScore} correct`;$('#course-quiz-feedback').textContent=(chosen===q.correct?'Correct. ':'Review this one. ')+q.why;$('#course-quiz-next').disabled=false;}));}
  function quizResult(){quizFinished=true;const pct=Math.round(quizScore/quiz.length*100);$('#course-quiz-count').textContent='YOUR RESULT';$('#course-quiz-bar').style.width='100%';$('#course-quiz-question').textContent=`${quizScore} out of ${quiz.length} · ${pct}%`;$('#course-quiz-options').innerHTML=`<p class="course-quiz-result-copy">${pct>=80?'Strong understanding. Explain the reasoning in your own words and try applying it to a new example.':pct>=60?'Good progress. Revisit the explanations and strengthen the ideas that felt uncertain.':'This is a learning checkpoint, not a judgement. Revisit a lesson, then try again when ready.'}</p>`;$('#course-quiz-feedback').textContent='You can retry the quiz at any time.';$('#course-quiz-next').disabled=false;$('#course-quiz-next').textContent='Try again ↻';}
  $('#course-quiz-next').addEventListener('click',()=>{if(quizFinished){quizIndex=0;quizScore=0;renderQuiz();return;}if(quizIndex<quiz.length-1&&quizAnswered){quizIndex++;renderQuiz();}else if(quizIndex===quiz.length-1&&quizAnswered){quizResult();}});

  function saveDraft(){const form=$('#course-project-form');draft=Object.fromEntries(projectFields.map(([name])=>[name,form.elements[name].value]));try{localStorage.setItem(`${key}-project`,JSON.stringify(draft));$('#course-project-status').textContent='Saved just now on this device';}catch(_){$('#course-project-status').textContent='Could not save in this browser';}}
  $('#course-project-form').addEventListener('input',saveDraft);
  $('#course-project-download').addEventListener('click',()=>{saveDraft();const text=`SEEKHO DIGITAL · MODULE ${String(id).padStart(2,'0')}\n${course.title}\n${course.project.title}\n\n${course.project.brief}\n\n${projectFields.map(([name,label])=>`${label}\n${draft[name]||'(Not filled yet)'}`).join('\n\n')}\n\nPractice exercise. This is not evidence of paid client work.\n`;const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`seekho-module-${String(id).padStart(2,'0')}-project-notes.txt`;document.body.appendChild(a);a.click();a.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);$('#course-project-status').textContent='Project notes downloaded';});
  $('#course-project-clear').addEventListener('click',()=>{if(confirm('Clear this module project worksheet?')){$('#course-project-form').reset();$('#course-project-form').querySelectorAll('textarea').forEach(field=>{field.value='';});draft={};try{localStorage.removeItem(`${key}-project`);}catch(_){}$('#course-project-status').textContent='Worksheet cleared';}});
  function renderGlossary(filter=''){const query=filter.trim().toLowerCase();const matches=course.glossary.filter(([term,meaning])=>`${term} ${meaning}`.toLowerCase().includes(query));$('#course-glossary-grid').innerHTML=matches.map(([term,meaning])=>`<article><b>${esc(term)}</b><p>${esc(meaning)}</p></article>`).join('');$('#course-glossary-empty').hidden=matches.length!==0;}
  $('#course-glossary-search').addEventListener('input',e=>renderGlossary(e.target.value));
  renderNav();renderGlossary();renderQuiz();showLesson(current);
})();
