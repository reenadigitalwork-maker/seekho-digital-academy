/* Seekho Digital Projects Hub: guided briefs, honest portfolio evidence and local checklist progress. */
(()=>{'use strict';
const root=document.querySelector('[data-project-hub]');
if(!root||!window.SEEKHO_COURSES)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storageKey='seekho-project-checks-v1';
let saved={};
try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};}catch(_){}
const projects=[{
 id:1,title:'Digital Marketing Foundations',project:{title:'Maple Lane campaign brief',brief:'Connect audience insight, value proposition, channel choice, objective and measurement in one coherent plan.',deliverables:['Audience snapshot','Value proposition','Channel choice','SMART objective','Metric and next test'],steps:['Describe one audience using a need or behaviour, not a stereotype.','Write the value the bakery offers and why it may matter.','Choose one suitable channel and explain the trade-off.','Write one measurable objective with a number and time period.','Choose a metric, define it and suggest one next test.']}
},...Object.entries(SEEKHO_COURSES).map(([id,c])=>({id:Number(id),title:c.title,project:c.project}))];
const countDone=id=>(saved[id]||[]).filter(Boolean).length;
const total=projects.reduce((n,p)=>n+(p.project.deliverables||[]).length,0);
const done=projects.reduce((n,p)=>n+countDone(p.id),0);
root.innerHTML=`<div class="project-progress" role="status" aria-live="polite"><div><strong id="project-progress-count">${done} of ${total} deliverable checks completed</strong><span>Saved only in this browser. Tick a box when you have actually created that item.</span></div><div class="project-progress-track"><span id="project-progress-fill" style="width:${total?done/total*100:0}%"></span></div></div>`+projects.map(p=>{
 const project=p.project||{},deliverables=project.deliverables||[],steps=project.steps||[];
 const checks=saved[p.id]||[];
 return `<article class="project-card" data-project-card="${p.id}">
 <div class="project-card-top"><span>MODULE ${String(p.id).padStart(2,'0')}</span><b>${p.id===1?'10 guided lessons':(SEEKHO_COURSES[p.id]?.lessons?.length||0)+' guided lessons'}</b></div>
 <h3>${esc(project.title||'Module project')}</h3><p>${esc(project.brief||'Apply the ideas from this module to a clearly labelled practice scenario.')}</p>
 <div class="project-card-section"><h4>What you will create</h4><ul>${deliverables.map((d,i)=>`<li><label class="project-check"><input type="checkbox" data-project-check="${i}" ${checks[i]?'checked':''}><span>${esc(d)}</span></label></li>`).join('')}</ul></div>
 <details class="project-steps"><summary>Open the step-by-step plan (${steps.length} steps)</summary><ol>${steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></details>
 <div class="project-card-actions"><a href="modules/module-${String(p.id).padStart(2,'0')}.html#project">Open full project worksheet →</a><button type="button" class="project-template" data-template="${p.id}">Download portfolio template ↓</button></div>
 <p class="project-card-note">Practice project only. Label it as fictional/self-initiated work. Do not invent client results, testimonials or campaign performance.</p>
 </article>`;
}).join('');
function updateProgress(){const n=projects.reduce((a,p)=>a+countDone(p.id),0);const label=root.querySelector('#project-progress-count'),fill=root.querySelector('#project-progress-fill');if(label)label.textContent=n+' of '+total+' deliverable checks completed';if(fill)fill.style.width=(total?n/total*100:0)+'%';}
root.querySelectorAll('[data-project-card]').forEach(card=>{
 const id=Number(card.dataset.projectCard);
 card.querySelectorAll('[data-project-check]').forEach(input=>input.addEventListener('change',()=>{
  const index=Number(input.dataset.projectCheck),list=saved[id]||[];
  list[index]=input.checked;saved[id]=list;
  try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch(_){}
  updateProgress();
 }));
});
root.querySelectorAll('[data-template]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects.find(x=>x.id===Number(button.dataset.template));if(!p)return;
 const project=p.project||{};
 const content=['# '+(project.title||'Digital marketing practice project'),'','**Module:** '+String(p.id).padStart(2,'0')+' — '+p.title,'','## Practice brief',project.brief||'','',
 '## My work / deliverables',...(project.deliverables||[]).flatMap(d=>['- '+d,'  - My notes / evidence: ']),'',
 '## My decisions and reasoning','- Audience and need:','- Why I chose this approach:','- Assumptions and limitations:','',
 '## Evidence','- Links, screenshots or sample assets I created:','- What is illustrative rather than measured:','',
 '## Reflection','- What I learned:','- What I would improve next:','- Next small test:','',
 '**Disclosure:** This is a fictional/self-initiated practice project, not paid client work. No real campaign results are claimed.'].join('\n');
 const blob=new Blob([content],{type:'text/markdown;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='seekho-module-'+String(p.id).padStart(2,'0')+'-portfolio-template.md';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}));
updateProgress();
})();