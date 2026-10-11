'use strict';
/* MBGCA Portal — Student Records & Grade Portal (demo). Built by Payeconnect. All data is fictional and stored in this browser only. */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SCHOOL={name:'Martha B Gibor Christian Academy',short:'MBGCA',motto:'Faith · Knowledge · Excellence',verse:'“Train up a child in the way he should go: and when he is old, he will not depart from it.” — Proverbs 22:6',address:'Paynesville, Montserrado County, Republic of Liberia',email:'info@mbgca.edu.lr',year:'2025/2026'};
const PC={name:'Payeconnect',wa:'+231 888 916 127',link:'https://wa.me/231888916127?text='+encodeURIComponent('Hello Payeconnect, I saw the MBGCA school portal demo.')};
const PERIODS=[{k:'p1',l:'1st Period',s:'1st'},{k:'p2',l:'2nd Period',s:'2nd'},{k:'p3',l:'3rd Period',s:'3rd'},{k:'e1',l:'Semester I Exam',s:'Exam'},{k:'p4',l:'4th Period',s:'4th'},{k:'p5',l:'5th Period',s:'5th'},{k:'p6',l:'6th Period',s:'6th'},{k:'e2',l:'Semester II Exam',s:'Exam'}];
const VIEWS=[...PERIODS.map(p=>({k:p.k,l:p.l})),{k:'s1',l:'Semester I Average'},{k:'s2',l:'Semester II Average'},{k:'y',l:'Yearly Average'}];
const ORD=n=>{const s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0])};
const CLASSES=[{id:'ABC',name:'ABC',level:'K'},{id:'K1',name:'K-I',level:'K'},{id:'K2',name:'K-II',level:'K'}];
for(let g=1;g<=12;g++)CLASSES.push({id:'G'+g,name:ORD(g)+' Grade',level:g<=6?'E':g<=9?'J':'S',g});
const LEVELS={K:'Kindergarten',E:'Elementary',J:'Junior High',S:'Senior High'};
const SUBJECTS={K:['Reading','Writing','Number Work','Bible','Rhymes & Songs','Art & Coloring'],
E:['English','Mathematics','Science','Social Studies','Bible','French','Spelling','Physical Education'],
J:['English','Mathematics','General Science','Social Studies','Bible','French','Literature','Civics','Computer'],
S:['English','Mathematics','Biology','Chemistry','Physics','Economics','Geography','History','Literature','Bible']};
const cls=id=>CLASSES.find(c=>c.id===id)||CLASSES[0];
const subjectsOf=cid=>SUBJECTS[cls(cid).level];
const nextClass=cid=>{const i=CLASSES.findIndex(c=>c.id===cid);return i===CLASSES.length-1?'Graduation':CLASSES[i+1].name};
const SCALE=[{min:90,l:'A',d:'Excellent'},{min:80,l:'B',d:'Very Good'},{min:75,l:'C',d:'Good'},{min:70,l:'D',d:'Pass'},{min:0,l:'F',d:'Fail'}];
const PASS=70;
const letter=v=>v==null?'—':SCALE.find(x=>v>=x.min).l;
const fmt=(v,d=0)=>v==null?'—':(d?(Math.round(v*10)/10).toFixed(1):Math.round(v));
const STATUSES=['Active','Inactive','Transferred','Graduated'];
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const TEACHERS=[
{id:'T01',name:'Mr. Emmanuel K. Flomo',subj:'Mathematics',sponsor:'G9',phone:'0777 412 903'},
{id:'T02',name:'Mrs. Musu B. Sirleaf',subj:'Early Childhood',sponsor:'ABC',phone:'0886 220 417'},
{id:'T03',name:'Ms. Yassah T. Kamara',subj:'Early Childhood',sponsor:'K1',phone:'0770 581 336'},
{id:'T04',name:'Mrs. Josephine W. Dolo',subj:'Early Childhood',sponsor:'K2',phone:'0881 903 225'},
{id:'T05',name:'Ms. Patience N. Wesseh',subj:'English & Phonics',sponsor:'G1',phone:'0776 114 852'},
{id:'T06',name:'Mrs. Hawa S. Massaquoi',subj:'Elementary (General)',sponsor:'G2',phone:'0887 365 019'},
{id:'T07',name:'Mr. Samuel P. Togba',subj:'Elementary (General)',sponsor:'G3',phone:'0779 830 641'},
{id:'T08',name:'Mrs. Ophelia D. Johnson',subj:'English',sponsor:'G4',phone:'0880 447 129'},
{id:'T09',name:'Mr. Abraham G. Kpoto',subj:'Social Studies',sponsor:'G5',phone:'0775 902 318'},
{id:'T10',name:'Ms. Garmai F. Zubah',subj:'Science',sponsor:'G6',phone:'0886 713 540'},
{id:'T11',name:'Mr. Prince J. Mulbah',subj:'General Science',sponsor:'G7',phone:'0777 268 095'},
{id:'T12',name:'Mrs. Kebeh A. Nimely',subj:'English & Literature',sponsor:'G8',phone:'0881 590 772'},
{id:'T13',name:'Mr. Varney S. Kerkula',subj:'Biology & Chemistry',sponsor:'G10',phone:'0770 345 861'},
{id:'T14',name:'Mr. Moses T. Gaye',subj:'Economics & Geography',sponsor:'G11',phone:'0778 619 203'},
{id:'T15',name:'Rev. Joseph B. Barclay',subj:'Bible & History',sponsor:'G12',phone:'0886 042 977'},
{id:'T16',name:'Mr. Sekou M. Sumo',subj:'Physics',sponsor:null,phone:'0779 556 184'},
{id:'T17',name:'Mrs. Mamie K. Pewee',subj:'French',sponsor:null,phone:'0880 271 653'}];
function seed(){
 const R=rng(20260611),pick=a=>a[Math.floor(R()*a.length)],ri=(a,b)=>a+Math.floor(R()*(b-a+1));
 const M=['Emmanuel','Prince','Moses','Abraham','Josiah','Samuel','Varney','Sekou','Momo','Siafa','Joseph','Daniel','Gabriel','Augustine','Mulbah','Benedict','Alfred','Christopher','Fallah','Kollie','Jefferson','Elijah','Isaac','Boimah','Amos','Jallah','Timothy','Peter','Nathaniel','Edwin'];
 const F=['Princess','Comfort','Blessing','Mercy','Patience','Ophelia','Musu','Kebeh','Korpo','Fatu','Jartu','Garmai','Hawa','Mamie','Josephine','Tenneh','Yassah','Nyema','Martha','Esther','Deborah','Grace','Hannah','Precious','Victoria','Rebecca','Miatta','Satta','Gbessay','Ruth'];
 const L=['Flomo','Johnson','Doe','Toe','Wesseh','Kpoto','Weah','Togba','Kamara','Sumo','Gbatu','Kerkula','Massaquoi','Dennis','Cooper','Brown','Pewee','Nyenpan','Saah','Zubah','Gaye','Barclay','Tarr','Jallah','Dolo','Karnley','Nimely','Quaye','Mulbah','Kpadeh','Gono','Sando','Tamba','Gibson','Harris','Freeman','Davies','Kiazolu','Mensah','Wleh'];
 const A=['Duport Road, Paynesville','ELWA Junction, Paynesville','Red Light, Paynesville','Rehab Community, Paynesville','Jacob Town, Paynesville','Soul Clinic, Paynesville','GSA Road, Paynesville','Battery Factory, Paynesville','Pipeline, Paynesville','SKD Boulevard, Paynesville','Kpelle Town, Paynesville','Congo Town, Monrovia','Old Road, Sinkor','14th Street, Sinkor','Fiamah, Sinkor','Barnersville, Monrovia','Gardnersville, Monrovia','Logan Town, Bushrod Island','Chocolate City, Gardnersville','Joe Bar, Paynesville'];
 const REL=['Mother','Father','Mother','Father','Aunt','Uncle','Grandmother','Guardian'];
 const phone=()=>pick(['077','088','077','088'])+ri(0,9)+' '+ri(100,999)+' '+ri(100,999);
 const students=[],grades={};let n=1;
 CLASSES.forEach((c,ci)=>{
  const count=ri(7,10);
  for(let i=0;i<count;i++){
   const gender=R()<.52?'F':'M',first=pick(gender==='F'?F:M),last=pick(L),mid=String.fromCharCode(65+ri(0,25));
   const by=2021-ci+(R()<.25?-1:0),dob=`${by}-${String(ri(1,12)).padStart(2,'0')}-${String(ri(1,28)).padStart(2,'0')}`;
   const gl=pick(L.concat([last,last,last])),gf=pick(R()<.5?F:M);
   students.push({id:'MBGCA-'+String(n++).padStart(4,'0'),first,middle:mid+'.',last,gender,dob,cls:c.id,status:R()<.05?'Inactive':'Active',
    guardian:gf+' '+gl,relation:pick(REL),phone:phone(),address:pick(A),enrolled:`${2025-ri(0,Math.min(ci,6))}-09-0${ri(1,8)}`,photo:null,
    present:ri(158,180),conduct:pick(['A','A','B','A','B','C'])});
  }
 });
 const kids=[students.find(s=>s.cls==='G9'),students.find(s=>s.cls==='G4')];
 Object.assign(kids[0],{first:'Princess',middle:'M.',last:'Kollie',gender:'F',status:'Active',guardian:'Comfort T. Kollie',relation:'Mother',phone:'0777 245 118',address:'ELWA Junction, Paynesville',conduct:'A'});
 Object.assign(kids[1],{first:'Josiah',middle:'D.',last:'Kollie',gender:'M',status:'Active',guardian:'Comfort T. Kollie',relation:'Mother',phone:'0777 245 118',address:'ELWA Junction, Paynesville',conduct:'A'});
 students.forEach(s=>{
  let ab=Math.max(58,Math.min(96,78+(R()+R()+R()-1.5)*18));if(s===kids[0])ab=91;if(s===kids[1])ab=83;
  const trend=(R()-.4)*1.2;grades[s.id]={};
  subjectsOf(s.cls).forEach(sb=>{const off=(R()-.5)*12,r={};PERIODS.forEach((p,pi)=>{let v=ab+off+trend*pi+(R()-.5)*10+(p.k[0]==='e'?-2:0);r[p.k]=Math.max(48,Math.min(100,Math.round(v)))});grades[s.id][sb]=r});
 });
 const now=Date.now(),ago=m=>new Date(now-m*60000).toISOString();
 const activity=[{t:ago(12),who:'Mr. Emmanuel K. Flomo',what:'entered 6th Period Mathematics grades for 9th Grade'},{t:ago(55),who:'Mrs. Kebeh A. Nimely',what:'updated Literature grades for 8th Grade'},{t:ago(140),who:'Administrator',what:'enrolled a new student in 3rd Grade'},{t:ago(300),who:'Rev. Joseph B. Barclay',what:'published Semester II Exam results for 12th Grade'},{t:ago(1440),who:'Administrator',what:'printed 9th Grade report cards'}];
 return{v:1,students,grades,activity,parentKids:kids.map(k=>k.id),seq:n};
}
const KEY='mbgca_demo_v1';
let DB=(()=>{try{const d=JSON.parse(localStorage.getItem(KEY));if(d&&d.v===1)return d}catch(e){}const d=seed();try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}return d})();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){toast('Browser storage is full — try a smaller photo','err')}};
const log=what=>{DB.activity.unshift({t:new Date().toISOString(),who:ME().name,what});DB.activity=DB.activity.slice(0,30);save()};
const stu=id=>DB.students.find(s=>s.id===id);
const fullName=s=>`${s.first} ${s.middle?s.middle+' ':''}${s.last}`;
const avg=a=>{a=a.filter(v=>v!=null&&v!==''&&!isNaN(v)).map(Number);return a.length?a.reduce((x,y)=>x+y,0)/a.length:null};
function subj(sid,sb){const r=(DB.grades[sid]||{})[sb]||{};const s1=avg([r.p1,r.p2,r.p3,r.e1]),s2=avg([r.p4,r.p5,r.p6,r.e2]);return{...r,s1,s2,y:avg([s1,s2])}}
const val=(sid,sb,v)=>{const x=subj(sid,sb)[v];return x==null||x===''?null:Number(x)};
const overall=(sid,v='y')=>{const s=stu(sid);return avg(subjectsOf(s.cls).map(sb=>val(sid,sb,v)))};
const inClass=cid=>DB.students.filter(s=>s.cls===cid&&s.status==='Active').sort((a,b)=>(a.last+a.first).localeCompare(b.last+b.first));
function ranks(cid,v='y'){const l=inClass(cid).map(s=>({s,a:overall(s.id,v)})).filter(x=>x.a!=null).sort((a,b)=>b.a-a.a),m={};l.forEach((x,i)=>m[x.s.id]=i+1);return{m,n:l.length,list:l}}
const age=d=>{const b=new Date(d),n=new Date();let a=n.getFullYear()-b.getFullYear();if(n<new Date(n.getFullYear(),b.getMonth(),b.getDate()))a--;return a};
const fdate=d=>new Date(d+(d.length===10?'T00:00':'')).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const ago=t=>{const m=Math.round((Date.now()-new Date(t))/60000);return m<1?'just now':m<60?m+' min ago':m<1440?Math.round(m/60)+' hr ago':Math.round(m/1440)+' days ago'};
const remark=a=>a==null?'':a>=90?'Outstanding performance. Keep shining for Christ!':a>=80?'Very good work. Aim even higher next year.':a>=75?'Good effort. More consistency will bring excellence.':a>=70?'Fair. Needs more focus and regular study.':'Needs serious improvement. Parent conference advised.';
const USERS={admin:{email:'admin@mbgca.edu.lr',pass:'demo1234',role:'admin',name:'Adolphus R. Hill',title:'School Administrator'},
teacher:{email:'teacher@mbgca.edu.lr',pass:'demo1234',role:'teacher',name:'Emmanuel K. Flomo',title:'Mathematics · 9th Grade Sponsor',tid:'T01'},
parent:{email:'parent@mbgca.edu.lr',pass:'demo1234',role:'parent',name:'Comfort T. Kollie',title:'Parent / Guardian'}};
const ME=()=>USERS[localStorage.getItem('mbgca_role')]||null;
const T_CLASSES=['G7','G8','G9'];
const canEdit=(cid,sb)=>{const u=ME();if(!u)return false;if(u.role==='admin')return true;if(u.role==='teacher')return cid==='G9'||(T_CLASSES.includes(cid)&&sb==='Mathematics');return false};
const visibleClasses=()=>ME()?.role==='teacher'?CLASSES.filter(c=>T_CLASSES.includes(c.id)):CLASSES;
const canSee=sid=>{const u=ME(),s=stu(sid);if(!u||!s)return false;if(u.role==='parent')return DB.parentKids.includes(sid);if(u.role==='teacher')return T_CLASSES.includes(s.cls);return true};
let cid=0;
function crest(w=64){const i='c'+(cid++);return `<svg class="crest" width="${w}" height="${Math.round(w*1.15)}" viewBox="0 0 200 230" role="img" aria-label="MBGCA crest"><defs><linearGradient id="${i}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbe7a6"/><stop offset=".45" stop-color="#d4a53c"/><stop offset="1" stop-color="#94680f"/></linearGradient><linearGradient id="${i}n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#244c9e"/><stop offset="1" stop-color="#081738"/></linearGradient><linearGradient id="${i}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
<path d="M100 4 L188 32 V110 C188 166 150 204 100 226 C50 204 12 166 12 110 V32 Z" fill="url(#${i}g)"/>
<path d="M100 16 L176 40 V110 C176 158 143 191 100 211 C57 191 24 158 24 110 V40 Z" fill="url(#${i}n)"/>
<path d="M100 16 L24 40 V110 C24 158 57 191 100 211 Z" fill="url(#${i}s)"/>
<g fill="url(#${i}g)"><rect x="93" y="30" width="14" height="72" rx="2"/><rect x="72" y="50" width="56" height="13" rx="2"/></g>
<g fill="#f3d27a" opacity=".9"><circle cx="48" cy="62" r="3"/><circle cx="152" cy="62" r="3"/><circle cx="56" cy="84" r="2"/><circle cx="144" cy="84" r="2"/></g>
<path d="M48 116 Q74 104 98 117 V158 Q74 146 48 156 Z" fill="#fff"/><path d="M152 116 Q126 104 102 117 V158 Q126 146 152 156 Z" fill="#eef2fb"/>
<g stroke="#9fb0d6" stroke-width="2" fill="none"><path d="M58 124 Q76 118 90 125M58 134 Q76 128 90 135M58 144 Q76 138 90 145M110 125 Q124 118 142 124M110 135 Q124 128 142 134M110 145 Q124 138 142 144"/></g>
<path d="M22 168 H178 L168 185 L178 202 H22 L32 185 Z" fill="url(#${i}g)" stroke="#7a560c" stroke-width="1.5"/>
<text x="100" y="192" text-anchor="middle" font-family="Plus Jakarta Sans,Inter,sans-serif" font-weight="800" font-size="22" letter-spacing="4" fill="#0b1f4b">MBGCA</text></svg>`}
const IC={dash:'<path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',sheet:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',id:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h3"/>',school:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',print:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',out:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',check:'<path d="M20 6 9 17l-5-5"/>',back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/>',dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};
const ic=(n,s='')=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${s}>${IC[n]}</svg>`;
const PAL=[['#3b7bf0','#1d4290'],['#f0a93b','#b86e0c'],['#34c58a','#0f8a52'],['#9a7bf5','#5a3bc4'],['#f06b8b','#b8284c'],['#2bb7c9','#0e7b8a'],['#e47b4a','#a8431a'],['#5b6b8c','#2d3a56']];
const hash=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
function avatar(s,size=40){if(s.photo)return `<img class="av" src="${s.photo}" alt="" style="width:${size}px;height:${size}px">`;const p=PAL[hash(s.id)%PAL.length];return `<div class="av" style="width:${size}px;height:${size}px;font-size:${Math.round(size*.38)}px;background:linear-gradient(135deg,${p[0]},${p[1]})">${esc(s.first[0]+s.last[0])}</div>`}
const statusTag=s=>`<span class="tag ${s==='Active'?'green':s==='Inactive'?'gray':s==='Graduated'?'blue':'amber'}">${s}</span>`;
const gradeTag=a=>a==null?'<span class="tag gray">—</span>':`<span class="tag ${a>=80?'green':a>=PASS?'blue':'red'}">${letter(a)} · ${fmt(a,1)}</span>`;
const pf=a=>a==null?'':a>=PASS?'<span class="tag green">PASS</span>':'<span class="tag red">FAIL</span>';
const pcFoot=()=>`<div class="pc-foot"><span class="pc-badge"><i></i>Demo by <b>Payeconnect</b></span><span>Questions? WhatsApp <a href="${PC.link}" target="_blank" rel="noopener">${PC.wa}</a></span></div>`;
function toast(m,t){const d=document.createElement('div');d.className='toast '+(t||'');d.textContent=m;$('#toasts').appendChild(d);setTimeout(()=>d.remove(),2800)}
const opts=(arr,sel)=>arr.map(o=>{const [v,l]=Array.isArray(o)?o:[o,o];return `<option value="${esc(v)}" ${v===sel?'selected':''}>${esc(l)}</option>`}).join('');
let charts=[];
function chart(id,cfg){const el=document.getElementById(id);if(!el)return;if(!window.Chart){setTimeout(()=>chart(id,cfg),300);return}Chart.defaults.font.family='Inter';Chart.defaults.color='#68748c';charts.push(new Chart(el,cfg))}
const killCharts=()=>{charts.forEach(c=>c.destroy());charts=[]};
const gridOpts={plugins:{legend:{display:false}},responsive:true,maintainAspectRatio:false,scales:{x:{grid:{display:false}},y:{grid:{color:'#eef1f6'},border:{display:false}}}};
function loginView(){
 $('#app').innerHTML=`<div class="login">
 <section class="login-art"><div class="la-top">${crest(34)}<div>${SCHOOL.short} Portal<small>Student Records & Grade Portal</small></div></div>
 <div><div class="crest3d"><div class="float">${crest(170)}</div></div>
 <div class="la-title">Martha B Gibor<br>Christian Academy</div><div class="la-motto">${SCHOOL.motto}</div>
 <div class="la-feats"><div class="la-feat">${ic('users','width="20" style="color:#f3d27a"')}<b>Student Records</b><span>Every learner, one secure place</span></div><div class="la-feat">${ic('edit','width="20" style="color:#f3d27a"')}<b>Grade Portal</b><span>6 periods + 2 semester exams</span></div><div class="la-feat">${ic('doc','width="20" style="color:#f3d27a"')}<b>Report Cards</b><span>Ranked, averaged, printable</span></div></div></div>
 <div class="la-verse">${SCHOOL.verse}</div></section>
 <section class="login-form"><div class="lf-card"><h2>Welcome back</h2><p class="sub">Sign in to the ${SCHOOL.short} school portal. Choose a demo role below.</p>
 <div class="roles">${[['admin','shield','Admin','Full access'],['teacher','edit','Teacher','Enter grades'],['parent','heart','Parent','View my child']].map(([k,i,t,d],n)=>`<button class="role ${n===0?'on':''}" data-role="${k}" type="button"><div class="ri">${ic(i,'width="19"')}</div><b>${t}</b><small>${d}</small></button>`).join('')}</div>
 <form id="lf"><div class="field"><label>Email</label><input class="input" id="le" value="${USERS.admin.email}" autocomplete="username"></div>
 <div class="field"><label>Password</label><input class="input" id="lp" type="password" value="${USERS.admin.pass}" autocomplete="current-password"></div>
 <button class="btn btn-primary btn-block" type="submit">Sign in ${ic('back','style="transform:rotate(180deg)"')}</button></form>
 <div class="demo-creds"><b>Demo credentials</b> (password <code>demo1234</code>)<br>Admin: <code>admin@mbgca.edu.lr</code><br>Teacher: <code>teacher@mbgca.edu.lr</code><br>Parent: <code>parent@mbgca.edu.lr</code></div>
 ${pcFoot()}</div></section></div>`;
 $$('.role').forEach(b=>b.onclick=()=>{$$('.role').forEach(x=>x.classList.remove('on'));b.classList.add('on');const u=USERS[b.dataset.role];$('#le').value=u.email;$('#lp').value=u.pass});
 $('#lf').onsubmit=e=>{e.preventDefault();const em=$('#le').value.trim().toLowerCase(),pw=$('#lp').value;const k=Object.keys(USERS).find(k=>USERS[k].email===em&&USERS[k].pass===pw);if(!k)return toast('Invalid demo credentials','err');localStorage.setItem('mbgca_role',k);location.hash=k==='parent'?'#/my':'#/dashboard';render();toast('Welcome, '+USERS[k].name)};
}
function navItems(){const r=ME().role;if(r==='parent')return[['my','heart','My Children'],['reports','doc','Report Cards'],['idcards','id','ID Cards']];
 const a=[['dashboard','dash','Dashboard'],['students','users',r==='teacher'?'My Students':'Student Records'],['grades','edit','Grade Portal'],['gradesheet','sheet','Class Grade Sheet'],['reports','doc','Report Cards']];
 if(r==='admin')a.push(['idcards','id','Student ID Cards'],['classes','school','Classes & Teachers']);return a}
function shell(){const u=ME();const items=navItems();
 $('#app').innerHTML=`<div class="shell" data-role="${u.role}"><aside class="side" id="side"><div class="side-brand">${crest(40)}<div><b>${SCHOOL.short}</b><small>Martha B Gibor<br>Christian Academy</small></div></div>
 <div class="nav-sec">${u.role==='parent'?'Parent Portal':'Menu'}</div><nav class="nav">${items.map(([k,i,l])=>`<a href="#/${k}" data-k="${k}">${ic(i)}${l}</a>`).join('')}</nav>
 <div class="side-foot">Academic Year ${SCHOOL.year}<br>Demo by <b style="color:#fff">Payeconnect</b><br>WhatsApp <a href="${PC.link}" target="_blank" rel="noopener">${PC.wa}</a></div></aside>
 <div class="main"><header class="top"><button class="menu-btn" id="mb" aria-label="Menu">${ic('menu','width="20"')}</button><div><div class="crumb">${SCHOOL.name}</div><h1 id="ttl"></h1></div>
 ${u.role!=='parent'?`<div class="top-search">${ic('search')}<input class="input" id="gs" placeholder="Search students by name or ID…"></div>`:'<div style="margin-left:auto"></div>'}
 <div class="me" id="me"><div class="av" style="width:36px;height:36px;font-size:13px;background:linear-gradient(135deg,#d4a53c,#94680f)">${u.name.split(' ').map(x=>x[0]).filter(x=>/[A-Z]/.test(x)).slice(0,2).join('')}</div><div><b>${esc(u.name)}</b><small>${esc(u.title)}</small></div>
 <div class="me-menu" id="mm"><button data-act="role">${ic('user','width="17"')} Switch demo role</button>${u.role==='admin'?`<button data-act="reset">${ic('reset','width="17"')} Reset demo data</button>`:''}<button data-act="out">${ic('out','width="17"')} Sign out</button></div></div></header>
 <main class="content" id="view"></main><footer class="app-foot">${pcFoot()}</footer></div>
 <nav class="bottom-nav">${items.slice(0,5).map(([k,i,l])=>`<a href="#/${k}" data-k="${k}">${ic(i)}<span>${l.replace('Student Records','Students').replace('My Students','Students').replace('Class Grade Sheet','Sheet').replace('Grade Portal','Grades').replace('Report Cards','Reports').replace('Student ID Cards','IDs')}</span></a>`).join('')}</nav></div>`;
 $('#mb').onclick=()=>{$('#side').classList.add('open');const s=document.createElement('div');s.className='scrim';s.onclick=()=>{$('#side').classList.remove('open');s.remove()};document.body.appendChild(s)};
 $('#me').onclick=e=>{e.stopPropagation();$('#mm').classList.toggle('open')};document.addEventListener('click',()=>$('#mm')?.classList.remove('open'));
 $('#mm').onclick=e=>{const a=e.target.closest('button')?.dataset.act;if(a==='out'||a==='role'){localStorage.removeItem('mbgca_role');location.hash='';render()}if(a==='reset'&&confirm('Reset all demo data to the original sample?')){DB=seed();save();toast('Demo data reset');route()}};
 const gs=$('#gs');if(gs)gs.onkeydown=e=>{if(e.key==='Enter'){sessionStorage.setItem('q',gs.value);if(location.hash==='#/students')route();else location.hash='#/students'}};
}
function render(){if(!ME())return loginView();shell();route()}
function route(){
 if(!ME())return loginView();if(!$('#view')||$('.shell')?.dataset.role!==ME().role)shell();
 killCharts();$('.scrim')?.remove();$('#side')?.classList.remove('open');$('#modal-root').innerHTML='';
 const [p,a]=(location.hash.slice(2)||'').split('/');const r=ME().role;
 const def=r==='parent'?'my':'dashboard';const page=p||def;
 $$('.nav a,.bottom-nav a').forEach(x=>x.classList.toggle('on',x.dataset.k===page||(page==='student'&&x.dataset.k===(r==='parent'?'my':'students'))||(page==='report'&&x.dataset.k==='reports')));
 const V={dashboard:dashView,students:studentsView,student:profileView,grades:gradesView,gradesheet:sheetView,reports:reportsView,report:reportView,idcards:idcardsView,classes:classesView,my:myView};
 const allowed={admin:Object.keys(V),teacher:['dashboard','students','student','grades','gradesheet','reports','report'],parent:['my','student','reports','report','idcards']}[r];
 const fn=allowed.includes(page)?V[page]:V[def];
 const out=fn(a);$('#ttl').textContent=out.title;$('#view').innerHTML=out.html;out.after&&out.after();window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
function dashView(){
 const u=ME(),T=u.role==='teacher',scope=T?DB.students.filter(s=>T_CLASSES.includes(s.cls)):DB.students;
 const act=scope.filter(s=>s.status==='Active'),avs=act.map(s=>({s,a:overall(s.id)})).filter(x=>x.a!=null);
 const sAvg=avg(avs.map(x=>x.a)),pass=avs.filter(x=>x.a>=PASS).length,top=[...avs].sort((a,b)=>b.a-a.a).slice(0,5),risk=avs.filter(x=>x.a<PASS).sort((a,b)=>a.a-b.a).slice(0,5);
 const vc=visibleClasses(),classAvgs=vc.map(c=>avg(inClass(c.id).map(s=>overall(s.id)))),dist=SCALE.map(g=>avs.filter(x=>letter(x.a)===g.l).length);
 const girls=act.filter(s=>s.gender==='F').length,pr=avs.length?Math.round(pass/avs.length*100):0;
 const hour=new Date().getHours(),greet=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
 const kpis=T?[['users','blue',act.length,'Students in my classes'],['school','gold',3,'Classes I teach'],['chart','green',fmt(sAvg,1)+'%','Average across my classes'],['check','purple',pr+'%','Pass rate (≥70)']]
 :[['users','blue',act.length,'Active students','+'+DB.students.filter(s=>s.enrolled>='2025-09-01').length+' this year'],['school','gold',CLASSES.length,'Classes · ABC to 12th'],['chart','green',fmt(sAvg,1)+'%','School-wide average'],['check','purple',pr+'%','Pass rate (≥70)']];
 return{title:T?'Teacher Dashboard':'Dashboard',html:`
 <div class="hero"><div><h2>${greet}, ${esc(u.name.split(' ')[0])} 👋</h2><p>${T?'Here is how your 7th, 8th and 9th Grade learners are performing. Open the Grade Portal to enter period scores — averages, ranks and report cards update instantly.':`Here is ${SCHOOL.name} at a glance for the ${SCHOOL.year} academic year — records, grades and performance in one place.`}</p>
 <div class="chips"><span class="chip">📅 ${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</span><span class="chip">🎓 ${SCHOOL.year}</span><span class="chip">📍 Paynesville, Liberia</span></div></div><div class="hc">${crest(110)}</div></div>
 <div class="grid g4">${kpis.map(([i,c,v,l,t])=>`<div class="card kpi">${t?`<span class="kt">${t}</span>`:''}<div class="ki ${c}">${ic(i)}</div><div class="kv">${v}</div><div class="kl">${l}</div></div>`).join('')}</div>
 <div class="grid g21" style="margin-top:18px"><div class="card"><div class="card-h"><h3>Average by class</h3><small>Yearly average · pass mark ${PASS}</small></div><div class="chart-box"><canvas id="c1"></canvas></div></div>
 <div class="card"><div class="card-h"><h3>Grade distribution</h3><small>${avs.length} students</small></div><div class="chart-box" style="height:220px"><canvas id="c2"></canvas></div>
 <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:12.5px;color:var(--muted)"><span>👧 Girls <b style="color:var(--ink)">${girls}</b></span><span>👦 Boys <b style="color:var(--ink)">${act.length-girls}</b></span><span>Attendance <b style="color:var(--ink)">${fmt(avg(act.map(s=>s.present/180*100)),1)}%</b></span></div></div></div>
 <div class="grid g3" style="margin-top:18px">
 <div class="card"><div class="card-h"><h3>🏆 Honor roll</h3><small>Top performers</small></div>${top.map((x,i)=>`<a class="list-row" href="#/student/${x.s.id}" style="text-decoration:none"><span class="rank r${i+1}">${i+1}</span>${avatar(x.s,34)}<div class="who" style="flex:1"><div><b>${esc(fullName(x.s))}</b><small>${cls(x.s.cls).name}</small></div></div>${gradeTag(x.a)}</a>`).join('')}</div>
 <div class="card"><div class="card-h"><h3>⚠️ Needs attention</h3><small>Below ${PASS}</small></div>${risk.length?risk.map(x=>`<a class="list-row" href="#/student/${x.s.id}" style="text-decoration:none">${avatar(x.s,34)}<div class="who" style="flex:1"><div><b>${esc(fullName(x.s))}</b><small>${cls(x.s.cls).name} · ${esc(x.s.guardian)}</small></div></div><span class="tag red">${fmt(x.a,1)}</span></a>`).join(''):'<div class="empty">Everyone is passing 🎉</div>'}</div>
 <div class="card"><div class="card-h"><h3>Recent activity</h3><small>Live log</small></div><div class="activity">${DB.activity.slice(0,6).map(a=>`<div class="act"><b>${esc(a.who)}</b> ${esc(a.what)}<small>${ago(a.t)}</small></div>`).join('')}</div></div></div>`,
 after(){chart('c1',{type:'bar',data:{labels:vc.map(c=>c.name.replace(' Grade','')),datasets:[{data:classAvgs.map(v=>v&&+v.toFixed(1)),backgroundColor:classAvgs.map(v=>v>=80?'#1d4290':v>=PASS?'#5b8cf5':'#e05656'),borderRadius:8,maxBarThickness:34}]},options:{...gridOpts,scales:{...gridOpts.scales,y:{...gridOpts.scales.y,min:50,max:100}}}});
 chart('c2',{type:'doughnut',data:{labels:SCALE.map(s=>s.l+' · '+s.d),datasets:[{data:dist,backgroundColor:['#1d4290','#5b8cf5','#d4a53c','#f3d27a','#e05656'],borderWidth:3,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,cutout:'66%',plugins:{legend:{position:'right',labels:{boxWidth:10,usePointStyle:true}}}}})}}}
let SF={q:'',c:'',st:'Active',g:''};
function studentsView(){
 const q=sessionStorage.getItem('q');if(q!=null){SF.q=q;SF.st='';sessionStorage.removeItem('q')}
 const admin=ME().role==='admin';
 return{title:admin?'Student Records':'My Students',html:`
 <div class="toolbar"><div class="top-search grow" style="margin:0;width:auto;display:block">${ic('search')}<input class="input" id="fq" style="width:100%" placeholder="Search name, ID, guardian, phone…" value="${esc(SF.q)}"></div>
 <select class="input" id="fc"><option value="">All classes</option>${opts(visibleClasses().map(c=>[c.id,c.name]),SF.c)}</select>
 <select class="input" id="fs"><option value="">All statuses</option>${opts(STATUSES,SF.st)}</select>
 <select class="input hide-m" id="fg"><option value="">All genders</option>${opts([['F','Female'],['M','Male']],SF.g)}</select>
 ${admin?`<button class="btn btn-primary" id="add">${ic('plus')} Add student</button>`:''}</div>
 <div class="card" style="padding:0;overflow:hidden"><div id="slist"></div></div>`,
 after(){const draw=()=>{const qq=SF.q.toLowerCase();const vis=visibleClasses().map(c=>c.id);
  const l=DB.students.filter(s=>vis.includes(s.cls)&&(!SF.c||s.cls===SF.c)&&(!SF.st||s.status===SF.st)&&(!SF.g||s.gender===SF.g)&&(!qq||[fullName(s),s.id,s.guardian,s.phone,s.address].join(' ').toLowerCase().includes(qq)))
   .sort((a,b)=>CLASSES.findIndex(c=>c.id===a.cls)-CLASSES.findIndex(c=>c.id===b.cls)||a.last.localeCompare(b.last));
  $('#slist').innerHTML=`<div style="padding:14px 18px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line)"><b>${l.length} student${l.length===1?'':'s'}</b><small style="color:var(--muted)">Tap a student to open their profile</small></div>
  ${l.length?`<div class="tbl-wrap" style="border:0;border-radius:0"><table class="tbl"><thead><tr><th>Student</th><th class="hide-m">ID Number</th><th>Class</th><th class="hide-m">Guardian</th><th class="hide-m">Phone</th><th class="hide-m">Address</th><th>Average</th><th class="hide-m">Status</th></tr></thead><tbody>
  ${l.map(s=>`<tr class="click" data-id="${s.id}"><td><div class="who">${avatar(s,36)}<div><b>${esc(fullName(s))}</b><small>${s.gender==='F'?'Female':'Male'} · ${age(s.dob)} yrs<span class="hide-d"> · ${s.id}</span></small></div></div></td><td class="hide-m"><code>${s.id}</code></td><td>${cls(s.cls).name.replace(' Grade','')}</td><td class="hide-m">${esc(s.guardian)}<br><small style="color:var(--muted)">${esc(s.relation)}</small></td><td class="hide-m">${esc(s.phone)}</td><td class="hide-m">${esc(s.address)}</td><td>${gradeTag(overall(s.id))}</td><td class="hide-m">${statusTag(s.status)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No students match your search.</div>'}`;
  $$('#slist tr[data-id]').forEach(r=>r.onclick=()=>location.hash='#/student/'+r.dataset.id)};
  draw();$('#fq').oninput=e=>{SF.q=e.target.value;draw()};$('#fc').onchange=e=>{SF.c=e.target.value;draw()};$('#fs').onchange=e=>{SF.st=e.target.value;draw()};$('#fg').onchange=e=>{SF.g=e.target.value;draw()};
  $('#add')&&($('#add').onclick=()=>studentForm())}}
}
function studentForm(id){
 const s=id?stu(id):{first:'',middle:'',last:'',gender:'F',dob:'2015-01-01',cls:'G1',status:'Active',guardian:'',relation:'Mother',phone:'',address:'',enrolled:new Date().toISOString().slice(0,10),photo:null,present:0,conduct:'A'};
 let photo=s.photo;
 $('#modal-root').innerHTML=`<div class="modal-bg" id="mbg"><form class="modal" id="sf"><div class="modal-h"><div><h3>${id?'Edit student record':'Enroll new student'}</h3><small style="color:var(--muted)">${id?s.id:'An ID number is generated automatically'}</small></div><button type="button" class="x" id="mx">×</button></div>
 <div class="modal-b"><div class="photo-pick"><div id="pp">${id?avatar(s,72):'<div class="av" style="width:72px;height:72px;background:#e9edf5;color:#8a95ab;font-size:26px">+</div>'}</div><div><label class="btn btn-ghost btn-sm">${ic('user')} Upload photo<input type="file" accept="image/*" id="pf" hidden></label><div style="font-size:12px;color:var(--muted);margin-top:6px">Passport photo · auto-resized</div></div></div>
 <div class="fgrid"><div class="field"><label>First name *</label><input class="input" name="first" required value="${esc(s.first)}"></div><div class="field"><label>Middle initial</label><input class="input" name="middle" value="${esc(s.middle)}"></div><div class="field"><label>Last name *</label><input class="input" name="last" required value="${esc(s.last)}"></div>
 <div class="field"><label>Gender</label><select class="input" name="gender">${opts([['F','Female'],['M','Male']],s.gender)}</select></div><div class="field"><label>Date of birth *</label><input class="input" type="date" name="dob" required value="${s.dob}"></div><div class="field"><label>Class</label><select class="input" name="cls">${opts(CLASSES.map(c=>[c.id,c.name]),s.cls)}</select></div>
 <div class="field"><label>Status</label><select class="input" name="status">${opts(STATUSES,s.status)}</select></div><div class="field"><label>Enrollment date</label><input class="input" type="date" name="enrolled" value="${s.enrolled}"></div><div class="field"><label>Conduct</label><select class="input" name="conduct">${opts(['A','B','C','D'],s.conduct)}</select></div>
 <div class="field span2"><label>Parent / guardian name *</label><input class="input" name="guardian" required value="${esc(s.guardian)}"></div><div class="field"><label>Relationship</label><select class="input" name="relation">${opts(['Mother','Father','Aunt','Uncle','Grandmother','Grandfather','Guardian'],s.relation)}</select></div>
 <div class="field"><label>Guardian phone *</label><input class="input" name="phone" required placeholder="0777 000 000" value="${esc(s.phone)}"></div><div class="field span2"><label>Home address</label><input class="input" name="address" placeholder="e.g. Duport Road, Paynesville" value="${esc(s.address)}"></div></div></div>
 <div class="modal-f"><button type="button" class="btn btn-ghost" id="mc">Cancel</button><button class="btn btn-primary">${ic('check')} ${id?'Save changes':'Enroll student'}</button></div></form></div>`;
 const close=()=>$('#modal-root').innerHTML='';$('#mx').onclick=$('#mc').onclick=close;$('#mbg').onclick=e=>{if(e.target.id==='mbg')close()};
 $('#pf').onchange=e=>{const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),z=220,k=Math.max(z/im.width,z/im.height);c.width=c.height=z;c.getContext('2d').drawImage(im,(z-im.width*k)/2,(z-im.height*k)/2,im.width*k,im.height*k);photo=c.toDataURL('image/jpeg',.82);$('#pp').innerHTML=`<img class="av" src="${photo}" style="width:72px;height:72px">`};im.src=rd.result};rd.readAsDataURL(f)};
 $('#sf').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));d.photo=photo;
  if(id){const old=s.cls;Object.assign(s,d);if(old!==s.cls){DB.grades[s.id]={};subjectsOf(s.cls).forEach(sb=>DB.grades[s.id][sb]={})}log('updated the record of '+fullName(s));save();close();toast('Student record saved');route()}
  else{const n={...s,...d,id:'MBGCA-'+String(DB.seq++).padStart(4,'0'),present:0};DB.students.push(n);DB.grades[n.id]={};subjectsOf(n.cls).forEach(sb=>DB.grades[n.id][sb]={});log('enrolled '+fullName(n)+' in '+cls(n.cls).name);save();close();toast(fullName(n)+' enrolled · '+n.id);location.hash='#/student/'+n.id}}}
function profileView(id){
 const s=stu(id);if(!s||!canSee(id))return{title:'Student',html:'<div class="card empty">Student not found or not available for your account.</div>'};
 const r=ME().role,rk=ranks(s.cls),oa=overall(id),subs=subjectsOf(s.cls);
 return{title:r==='parent'?'My Child':'Student Profile',html:`
 <a href="${r==='parent'?'#/my':'#/students'}" class="btn btn-ghost btn-sm no-print" style="margin-bottom:14px">${ic('back')} Back</a>
 <div class="card" style="margin-bottom:18px;background:linear-gradient(180deg,#fff,#f9fbff)"><div class="prof-head">${avatar(s,92)}<div><h2>${esc(fullName(s))}</h2><div class="meta"><span class="tag navy">${s.id}</span><span class="tag blue">${cls(s.cls).name}</span>${statusTag(s.status)}<span class="tag gray">${LEVELS[cls(s.cls).level]}</span></div></div>
 <div class="prof-actions">${r==='admin'?`<button class="btn btn-ghost" id="ed">${ic('edit')} Edit</button>`:''}${r!=='teacher'?`<a class="btn btn-ghost" href="#/idcards/${s.id}">${ic('id')} ID Card</a>`:''}<a class="btn btn-gold" href="#/report/${s.id}">${ic('doc')} Report Card</a></div></div></div>
 <div class="stat-strip" style="margin-bottom:18px"><div class="stat"><b style="color:${oa!=null&&oa<PASS?'var(--red)':'var(--green)'}">${fmt(oa,1)}</b><small>Yearly average</small></div><div class="stat"><b>${letter(oa)}</b><small>${oa!=null?SCALE.find(x=>oa>=x.min).d:'No grades yet'}</small></div><div class="stat"><b>${rk.m[id]||'—'}<span style="font-size:14px;color:var(--muted)">/${rk.n}</span></b><small>Class rank</small></div><div class="stat"><b>${Math.round(s.present/180*100)}%</b><small>Attendance (${s.present}/180 days)</small></div></div>
 <div class="grid g12"><div class="card"><div class="card-h"><h3>Personal information</h3></div><div class="info-grid">
 <div><small>Date of birth</small><b>${fdate(s.dob)}</b> <span style="color:var(--muted)">(${age(s.dob)} yrs)</span></div><div><small>Gender</small><b>${s.gender==='F'?'Female':'Male'}</b></div><div><small>Enrolled</small><b>${fdate(s.enrolled)}</b></div><div><small>Conduct</small><b>${s.conduct}</b></div>
 <div style="grid-column:1/-1"><small>Home address</small><b>${esc(s.address)}</b></div><div><small>Guardian</small><b>${esc(s.guardian)}</b><br><span style="color:var(--muted);font-size:12px">${esc(s.relation)}</span></div><div><small>Guardian phone</small><b>${esc(s.phone)}</b></div>
 <div style="grid-column:1/-1"><small>Class sponsor</small><b>${esc(TEACHERS.find(t=>t.sponsor===s.cls)?.name||'—')}</b></div></div></div>
 <div class="card"><div class="card-h"><h3>Progress across the year</h3><small>Average of all subjects per marking period</small></div><div class="chart-box"><canvas id="pc"></canvas></div></div></div>
 <div class="card" style="margin-top:18px"><div class="card-h"><h3>Grades — ${SCHOOL.year}</h3><small>Scores below ${PASS} are shown in red</small></div>${gradeTable(s,subs)}</div>`,
 after(){$('#ed')&&($('#ed').onclick=()=>studentForm(id));
  chart('pc',{type:'line',data:{labels:PERIODS.map(p=>p.k==='e1'?'Exam I':p.k==='e2'?'Exam II':p.s),datasets:[{data:PERIODS.map(p=>{const v=overall(id,p.k);return v&&+v.toFixed(1)}),borderColor:'#1d4290',backgroundColor:c=>{const g=c.chart.ctx.createLinearGradient(0,0,0,260);g.addColorStop(0,'rgba(29,66,144,.25)');g.addColorStop(1,'rgba(29,66,144,0)');return g},fill:true,tension:.38,pointBackgroundColor:'#d4a53c',pointBorderColor:'#fff',pointBorderWidth:2,pointRadius:5},{data:PERIODS.map(()=>PASS),borderColor:'#e05656',borderDash:[5,5],pointRadius:0,borderWidth:1.5}]},options:{...gridOpts,scales:{...gridOpts.scales,y:{...gridOpts.scales.y,min:50,max:100}}}})}}}
function gradeTable(s,subs){const c=v=>v==null?'':v<PASS?'low':'';
 return `<div class="tbl-wrap"><table class="tbl"><thead><tr><th class="stick">Subject</th>${PERIODS.slice(0,4).map(p=>`<th class="num">${p.s}</th>`).join('')}<th class="num" style="background:#fbf3dc">Sem I</th>${PERIODS.slice(4).map(p=>`<th class="num">${p.s}</th>`).join('')}<th class="num" style="background:#fbf3dc">Sem II</th><th class="num" style="background:#e8eefc">Year</th><th class="num">Grade</th></tr></thead><tbody>
 ${subs.map(sb=>{const g=subj(s.id,sb);return `<tr><td class="stick"><b>${sb}</b></td>${['p1','p2','p3','e1'].map(k=>`<td class="num ${c(g[k])}">${fmt(g[k])}</td>`).join('')}<td class="num ${c(g.s1)}" style="background:#fffaf0;font-weight:700">${fmt(g.s1)}</td>${['p4','p5','p6','e2'].map(k=>`<td class="num ${c(g[k])}">${fmt(g[k])}</td>`).join('')}<td class="num ${c(g.s2)}" style="background:#fffaf0;font-weight:700">${fmt(g.s2)}</td><td class="num ${c(g.y)}" style="background:#f4f7fe;font-weight:800">${fmt(g.y)}</td><td class="num">${letter(g.y)}</td></tr>`}).join('')}
 <tr><td class="stick"><b>Average</b></td>${['p1','p2','p3','e1','s1','p4','p5','p6','e2','s2','y'].map(k=>`<td class="num ${c(overall(s.id,k))}" style="font-weight:800">${fmt(overall(s.id,k),1)}</td>`).join('')}<td class="num"><b>${letter(overall(s.id))}</b></td></tr></tbody></table></div>`}
let GP={c:'G9',sb:'Mathematics',p:'p6'};
function gradesView(){
 const vc=visibleClasses();if(!vc.find(c=>c.id===GP.c))GP.c='G9';
 const subs=subjectsOf(GP.c);if(!subs.includes(GP.sb))GP.sb=subs.includes('Mathematics')?'Mathematics':subs[0];
 return{title:'Grade Portal',html:`
 <div class="hero" style="padding:20px 24px"><div><h2 style="font-size:20px">Enter & update grades</h2><p>Choose a class, subject and marking period. Semester averages, yearly averages, class rank and pass/fail are calculated automatically.</p></div></div>
 <div class="card" style="margin-bottom:16px"><div class="toolbar" style="margin:0">
 <div class="field" style="margin:0;flex:1;min-width:140px"><label>Class</label><select class="input" id="gc">${opts(vc.map(c=>[c.id,c.name]),GP.c)}</select></div>
 <div class="field" style="margin:0;flex:1;min-width:150px"><label>Subject</label><select class="input" id="gsb">${opts(subs.map(sb=>[sb,sb+(canEdit(GP.c,sb)?'':' (view only)')]),GP.sb)}</select></div>
 <div class="field" style="margin:0;flex:1;min-width:150px"><label>Marking period</label><select class="input" id="gp">${opts(PERIODS.map(p=>[p.k,p.l]),GP.p)}</select></div></div></div>
 <div class="grid g21"><div class="card" style="padding:0;overflow:hidden" id="gtab"></div><div><div class="card" style="margin-bottom:18px"><div class="card-h"><h3>Period summary</h3><small id="gsum"></small></div><div class="stat-strip" style="grid-template-columns:1fr 1fr" id="gstats"></div></div>
 <div class="card"><div class="card-h"><h3>Score distribution</h3></div><div class="chart-box" style="height:200px"><canvas id="gch"></canvas></div></div>
 <div class="card" style="margin-top:18px"><h3 style="font-size:14px;margin-bottom:10px">Grading scale</h3>${SCALE.map((g,i)=>`<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0"><span><b>${g.l}</b> · ${g.d}</span><span style="color:var(--muted)">${g.min}–${i?SCALE[i-1].min-1:100}</span></div>`).join('')}</div></div></div>`,
 after(){
  $('#gc').onchange=e=>{GP.c=e.target.value;route()};$('#gsb').onchange=e=>{GP.sb=e.target.value;route()};$('#gp').onchange=e=>{GP.p=e.target.value;route()};
  const ed=canEdit(GP.c,GP.sb),list=inClass(GP.c),dirty={},semOf=()=>/p[1-3]|e1/.test(GP.p)?'s1':'s2';let gch=null;
  const stats=()=>{const vs=list.map(s=>val(s.id,GP.sb,GP.p)).filter(v=>v!=null);const a=avg(vs);
   $('#gstats').innerHTML=`<div class="stat"><b>${fmt(a,1)}</b><small>Class average</small></div><div class="stat"><b>${vs.length?Math.max(...vs):'—'}</b><small>Highest</small></div><div class="stat"><b style="color:var(--green)">${vs.filter(v=>v>=PASS).length}</b><small>Passed</small></div><div class="stat"><b style="color:var(--red)">${vs.filter(v=>v<PASS).length}</b><small>Below ${PASS}</small></div>`;
   $('#gsum').textContent=`${vs.length}/${list.length} entered`;
   const d=['F','D','C','B','A'].map(L=>vs.filter(v=>letter(v)===L).length);
   if(gch){gch.data.datasets[0].data=d;gch.update()}else if(window.Chart){chart('gch',{type:'bar',data:{labels:['F','D','C','B','A'],datasets:[{data:d,backgroundColor:['#e05656','#f3d27a','#d4a53c','#5b8cf5','#1d4290'],borderRadius:8}]},options:{...gridOpts,scales:{...gridOpts.scales,y:{...gridOpts.scales.y,ticks:{precision:0}}}}});gch=charts[charts.length-1]}else setTimeout(stats,300)};
  const ltag=v=>v==null||v===''?'—':`<span class="tag ${v>=PASS?(v>=80?'green':'blue'):'red'}">${letter(+v)}</span>`;
  $('#gtab').innerHTML=`<div style="padding:14px 18px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><b>${cls(GP.c).name} · ${GP.sb}</b><div style="font-size:12px;color:var(--muted)">${PERIODS.find(p=>p.k===GP.p).l} · ${list.length} students</div></div>${ed?'<span class="tag green">✎ You can edit</span>':'<span class="tag gray">View only</span>'}</div>
  <div class="tbl-wrap" style="border:0;border-radius:0"><table class="tbl"><thead><tr><th class="hide-m">#</th><th>Student</th><th class="num">Score</th><th class="num">Grade</th><th class="num hide-m">Sem avg</th><th class="num hide-m">Year avg</th></tr></thead><tbody>
  ${list.map((s,i)=>{const v=val(s.id,GP.sb,GP.p),g=subj(s.id,GP.sb);return `<tr><td class="hide-m" style="color:var(--muted)">${i+1}</td><td><div class="who">${avatar(s,32)}<div><b>${esc(fullName(s))}</b><small>${s.id}</small></div></div></td>
  <td class="num">${ed?`<input class="grade-input ${v!=null&&v<PASS?'bad':''}" inputmode="numeric" data-id="${s.id}" value="${v??''}" maxlength="3" aria-label="Score for ${esc(fullName(s))}">`:`<b class="${v!=null&&v<PASS?'low':''}">${fmt(v)}</b>`}</td><td class="num" data-l="${s.id}">${ltag(v)}</td>
  <td class="num hide-m" data-s="${s.id}">${fmt(g[semOf()])}</td><td class="num hide-m" data-y="${s.id}">${fmt(g.y)}</td></tr>`}).join('')}</tbody></table></div>
  ${ed?`<div style="padding:12px 16px"><div class="savebar"><span id="dc">No unsaved changes</span><button class="btn btn-gold btn-sm" id="gsave">${ic('check')} Save grades</button></div></div>`:''}`;
  stats();
  $$('.grade-input').forEach(inp=>{inp.oninput=()=>{inp.value=inp.value.replace(/\D/g,'').slice(0,3);if(+inp.value>100)inp.value='100';const v=inp.value===''?'':+inp.value;dirty[inp.dataset.id]=v;inp.classList.add('dirty');inp.classList.toggle('bad',v!==''&&v<PASS);
   $(`[data-l="${inp.dataset.id}"]`).innerHTML=ltag(v);const n=Object.keys(dirty).length;$('#dc').textContent=n+' unsaved change'+(n>1?'s':'')};
   inp.onkeydown=e=>{const all=$$('.grade-input'),i=all.indexOf(inp);if(e.key==='Enter'||e.key==='ArrowDown'){e.preventDefault();all[i+1]?.focus()}if(e.key==='ArrowUp'){e.preventDefault();all[i-1]?.focus()}};inp.onfocus=()=>inp.select()});
  $('#gsave')&&($('#gsave').onclick=()=>{const ids=Object.keys(dirty);if(!ids.length)return toast('Nothing to save');ids.forEach(id=>{DB.grades[id]=DB.grades[id]||{};DB.grades[id][GP.sb]=DB.grades[id][GP.sb]||{};DB.grades[id][GP.sb][GP.p]=dirty[id]===''?null:dirty[id];const g=subj(id,GP.sb);$(`[data-s="${id}"]`).textContent=fmt(g[semOf()]);$(`[data-y="${id}"]`).textContent=fmt(g.y);delete dirty[id]});
   log(`entered ${PERIODS.find(p=>p.k===GP.p).l} ${GP.sb} grades for ${cls(GP.c).name}`);save();$$('.grade-input').forEach(i=>i.classList.remove('dirty'));$('#dc').textContent='All changes saved ✓';stats();toast(ids.length+' grade'+(ids.length>1?'s':'')+' saved · averages & ranks updated')})}}
}
let GS={c:'G9',v:'y'};
function sheetView(){
 const vc=visibleClasses();if(!vc.find(c=>c.id===GS.c))GS.c='G9';
 const subs=subjectsOf(GS.c),rk=ranks(GS.c,GS.v),list=inClass(GS.c).map(s=>({s,a:overall(s.id,GS.v)})).sort((a,b)=>(rk.m[a.s.id]||999)-(rk.m[b.s.id]||999));
 const ca=avg(list.map(x=>x.a)),pass=list.filter(x=>x.a!=null&&x.a>=PASS).length,sp=TEACHERS.find(t=>t.sponsor===GS.c),vl=VIEWS.find(v=>v.k===GS.v).l;
 const c=v=>v!=null&&v<PASS?'low':'';
 return{title:'Class Grade Sheet',html:`
 <div class="toolbar no-print"><select class="input" id="sc">${opts(vc.map(c=>[c.id,c.name]),GS.c)}</select><select class="input" id="sv">${opts(VIEWS.map(v=>[v.k,v.l]),GS.v)}</select><span style="flex:1"></span><button class="btn btn-ghost" id="csv">${ic('dl')} Export CSV</button><button class="btn btn-primary" onclick="print()">${ic('print')} Print</button></div>
 <div class="only-print" style="text-align:center;margin-bottom:10px">${crest(50)}<h2>${SCHOOL.name}</h2><div>${cls(GS.c).name} — ${vl} — ${SCHOOL.year}</div></div>
 <div class="grid g4" style="margin-bottom:18px"><div class="card kpi"><div class="kv">${list.length}</div><div class="kl">Students · ${cls(GS.c).name}</div></div><div class="card kpi"><div class="kv">${fmt(ca,1)}</div><div class="kl">Class average</div></div><div class="card kpi"><div class="kv" style="color:var(--green)">${list.length?Math.round(pass/list.length*100):0}%</div><div class="kl">Pass rate (${pass}/${list.length})</div></div><div class="card kpi"><div class="kv" style="font-size:17px;line-height:1.3;padding-top:6px">${esc(sp?.name||'—')}</div><div class="kl">Class sponsor</div></div></div>
 <div class="card" style="padding:0;overflow:hidden"><div style="padding:14px 18px;border-bottom:1px solid var(--line)"><b>${cls(GS.c).name} — ${vl}</b> <small style="color:var(--muted)">· ranked by average</small></div>
 <div class="tbl-wrap" style="border:0;border-radius:0"><table class="tbl"><thead><tr><th class="num">Rank</th><th class="stick">Student</th>${subs.map(sb=>`<th class="num" title="${sb}">${sb.length>10?sb.split(' ').map(w=>w.slice(0,4)).join('. '):sb}</th>`).join('')}<th class="num" style="background:#e8eefc">Average</th><th class="num">Grade</th><th class="num">Result</th></tr></thead><tbody>
 ${list.map(x=>`<tr class="click" data-id="${x.s.id}"><td class="num"><span class="rank ${rk.m[x.s.id]<=3?'r'+rk.m[x.s.id]:''}" style="margin:auto">${rk.m[x.s.id]||'—'}</span></td><td class="stick"><div class="who">${avatar(x.s,30)}<b>${esc(fullName(x.s))}</b></div></td>${subs.map(sb=>{const v=val(x.s.id,sb,GS.v);return `<td class="num ${c(v)}">${fmt(v)}</td>`}).join('')}<td class="num ${c(x.a)}" style="background:#f4f7fe;font-weight:800">${fmt(x.a,1)}</td><td class="num"><b>${letter(x.a)}</b></td><td class="num">${pf(x.a)}</td></tr>`).join('')}
 <tr><td></td><td class="stick"><b>Subject average</b></td>${subs.map(sb=>{const a=avg(list.map(x=>val(x.s.id,sb,GS.v)));return `<td class="num ${c(a)}" style="font-weight:800">${fmt(a,1)}</td>`}).join('')}<td class="num" style="font-weight:800">${fmt(ca,1)}</td><td></td><td></td></tr></tbody></table></div></div>`,
 after(){$('#sc').onchange=e=>{GS.c=e.target.value;route()};$('#sv').onchange=e=>{GS.v=e.target.value;route()};$$('tr[data-id]').forEach(r=>r.onclick=()=>location.hash='#/student/'+r.dataset.id);
  $('#csv').onclick=()=>{const rows=[['Rank','Student ID','Name',...subs,'Average','Grade','Result'],...list.map(x=>[rk.m[x.s.id]||'',x.s.id,fullName(x.s),...subs.map(sb=>fmt(val(x.s.id,sb,GS.v))),fmt(x.a,1),letter(x.a),x.a>=PASS?'PASS':'FAIL'])];const b=new Blob([rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n')],{type:'text/csv'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`MBGCA_${cls(GS.c).name.replace(/ /g,'_')}_${GS.v}.csv`;a.click();toast('Grade sheet exported')}}}}
let RC={c:'G9'};
function reportsView(){
 const r=ME().role;if(r==='parent'){return{title:'Report Cards',html:`<div class="grid g2">${DB.parentKids.map(id=>{const s=stu(id);return `<a class="card kid-card" href="#/report/${id}" style="text-decoration:none">${avatar(s,60)}<div style="flex:1"><h3>${esc(fullName(s))}</h3><small style="color:var(--muted)">${cls(s.cls).name} · ${SCHOOL.year}</small></div><span class="btn btn-gold btn-sm">${ic('doc')} Open</span></a>`}).join('')}</div>`}}
 const vc=visibleClasses();if(!vc.find(c=>c.id===RC.c))RC.c=vc[0].id;const rk=ranks(RC.c);
 return{title:'Report Cards',html:`<div class="toolbar"><select class="input" id="rcc">${opts(vc.map(c=>[c.id,c.name]),RC.c)}</select><small style="color:var(--muted)">Select a student to open a printable report card</small></div>
 <div class="grid g3">${inClass(RC.c).map(s=>`<a class="card kid-card" href="#/report/${s.id}" style="text-decoration:none;padding:16px">${avatar(s,48)}<div style="flex:1;min-width:0"><b style="display:block">${esc(fullName(s))}</b><small style="color:var(--muted)">Rank ${rk.m[s.id]||'—'} of ${rk.n} · ${s.id}</small></div>${gradeTag(overall(s.id))}</a>`).join('')}</div>`,after(){$('#rcc').onchange=e=>{RC.c=e.target.value;route()}}}}
function reportView(id){
 const s=stu(id);if(!s||!canSee(id))return{title:'Report Card',html:'<div class="card empty">Not available.</div>'};
 const subs=subjectsOf(s.cls),rk=ranks(s.cls),oa=overall(id),c=v=>v!=null&&v<PASS?'low':'',sp=TEACHERS.find(t=>t.sponsor===s.cls),fails=subs.filter(sb=>{const v=val(id,sb,'y');return v!=null&&v<PASS}).length;
 const promoted=oa!=null&&oa>=PASS&&fails<=2,K=['p1','p2','p3','e1','s1','p4','p5','p6','e2','s2','y'];
 return{title:'Report Card',html:`<div class="toolbar no-print"><a class="btn btn-ghost" href="#/student/${id}">${ic('back')} Profile</a><span style="flex:1"></span><button class="btn btn-primary" onclick="print()">${ic('print')} Print / Save PDF</button></div>
 <div class="rc-wrap"><div class="rc"><div class="rc-water">${crest(420)}</div>
 <div class="rc-head">${crest(84)}<div><h1>Martha B Gibor Christian Academy</h1><p>${SCHOOL.address} · ${SCHOOL.email}</p><p style="font-style:italic;color:#7a6326">“${SCHOOL.motto}”</p><span class="rc-title">Student Progress Report · ${SCHOOL.year}</span></div><div class="hide-m" style="width:84px"></div></div>
 <div class="rc-info"><div><small>Student name</small><b>${esc(fullName(s)).toUpperCase()}</b></div><div><small>ID number</small><b>${s.id}</b></div><div><small>Class</small><b>${cls(s.cls).name}</b></div><div><small>Class sponsor</small><b>${esc(sp?.name||'—')}</b></div>
 <div><small>Gender / Age</small><b>${s.gender==='F'?'Female':'Male'} · ${age(s.dob)} yrs</b></div><div><small>Parent / guardian</small><b>${esc(s.guardian)}</b></div><div><small>Days present</small><b>${s.present} of 180</b></div><div><small>Conduct</small><b>${s.conduct}</b></div></div>
 <div class="rc-scroll"><table><thead><tr><th rowspan="2" style="text-align:left;padding-left:9px">SUBJECTS</th><th colspan="5" class="sem">FIRST SEMESTER</th><th colspan="5" class="sem">SECOND SEMESTER</th><th rowspan="2">YEARLY<br>AVG</th><th rowspan="2">GRADE</th></tr>
 <tr><th>1st</th><th>2nd</th><th>3rd</th><th>Exam</th><th>Avg</th><th>4th</th><th>5th</th><th>6th</th><th>Exam</th><th>Avg</th></tr></thead><tbody>
 ${subs.map(sb=>{const g=subj(id,sb);return `<tr><td class="sub">${sb}</td>${['p1','p2','p3','e1'].map(k=>`<td class="${c(g[k])}">${fmt(g[k])}</td>`).join('')}<td class="avg ${c(g.s1)}">${fmt(g.s1)}</td>${['p4','p5','p6','e2'].map(k=>`<td class="${c(g[k])}">${fmt(g[k])}</td>`).join('')}<td class="avg ${c(g.s2)}">${fmt(g.s2)}</td><td class="avg ${c(g.y)}">${fmt(g.y)}</td><td><b>${letter(g.y)}</b></td></tr>`}).join('')}
 <tr class="tot"><td class="sub">AVERAGE</td>${K.map(k=>`<td class="${c(overall(id,k))}">${fmt(overall(id,k),1)}</td>`).join('')}<td>${letter(oa)}</td></tr>
 <tr><td class="sub">CLASS RANK</td>${K.map(k=>`<td>${ranks(s.cls,k).m[id]||'—'}</td>`).join('')}<td>of ${rk.n}</td></tr></tbody></table></div>
 <div class="rc-bottom"><div class="rc-box"><h4>Sponsor's remarks</h4><div style="font-style:italic">${remark(oa)}</div><div style="margin-top:10px" class="promo">Status: <span style="color:${promoted?'var(--green)':'var(--red)'}">${promoted?(s.cls==='G12'?'ELIGIBLE FOR GRADUATION':'PROMOTED TO '+nextClass(s.cls).toUpperCase()):'NOT PROMOTED'}</span></div></div>
 <div class="rc-box"><h4>Grading scale</h4>${SCALE.map((g,i)=>`<div style="display:flex;justify-content:space-between"><span><b>${g.l}</b> ${g.d}</span><span>${g.min}–${i?SCALE[i-1].min-1:100}</span></div>`).join('')}<div style="margin-top:4px;color:var(--red);font-size:11px">Scores below ${PASS} are failing (in red)</div></div>
 <div class="rc-box" style="text-align:center"><h4>Yearly average</h4><div style="font-family:'Plus Jakarta Sans';font-size:38px;font-weight:800;color:${oa!=null&&oa<PASS?'var(--red)':'var(--navy)'}">${fmt(oa,1)}</div><div><b>${letter(oa)}</b> · Rank <b>${rk.m[id]||'—'}</b> of ${rk.n}</div></div></div>
 <div class="sig"><div>Class Sponsor</div><div>Principal</div><div>Parent / Guardian</div></div>
 <div style="text-align:center;font-size:10.5px;color:#8a93a6;margin-top:18px">Generated by MBGCA Portal on ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})} · Any alteration renders this report invalid</div></div></div>`}}
function qr(seedStr,n=21,size=58){const R=rng(hash(seedStr));let r='';const cell=size/n;const fin=(x,y)=>(x<7&&y<7)||(x>n-8&&y<7)||(x<7&&y>n-8);
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){let on;if(fin(x,y)){const lx=x<7?x:x-(n-7),ly=y<7?y:y-(n-7);on=lx===0||ly===0||lx===6||ly===6||(lx>=2&&lx<=4&&ly>=2&&ly<=4)}else on=R()<.48;if(on)r+=`<rect x="${(x*cell).toFixed(2)}" y="${(y*cell).toFixed(2)}" width="${cell.toFixed(2)}" height="${cell.toFixed(2)}"/>`}
 return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="#0b1f4b" shape-rendering="crispEdges">${r}</svg>`}
function idCard(s){const p=PAL[hash(s.id)%PAL.length];return `<div class="idc"><div class="idc-top">${crest(34)}<div><b>Martha B Gibor<br>Christian Academy</b><small>STUDENT IDENTITY CARD</small></div></div>
 <div class="idc-body"><div class="idc-photo" style="background:linear-gradient(135deg,${p[0]},${p[1]})">${s.photo?`<img src="${s.photo}" alt="">`:esc(s.first[0]+s.last[0])}</div><div class="idc-f"><div class="nm">${esc(fullName(s))}</div><small>ID number</small><b>${s.id}</b><small style="margin-top:3px">Class</small><b>${cls(s.cls).name}</b><small style="margin-top:3px">Date of birth</small><b>${fdate(s.dob)}</b></div></div>
 <div class="idc-qr">${qr(s.id)}</div><div class="idc-strip"><span>${SCHOOL.year}</span><span>✝ ${SCHOOL.short}</span></div></div>`}
function idBack(s){return `<div class="idc back"><h5>IF FOUND, PLEASE RETURN TO</h5>${SCHOOL.name}<br>${SCHOOL.address}<br><br><b style="color:#fff">Emergency contact</b><br>${esc(s.guardian)} (${esc(s.relation)}) · ${esc(s.phone)}<br>${esc(s.address)}<div style="position:absolute;bottom:16px;left:18px;right:18px;display:flex;justify-content:space-between;align-items:flex-end"><div style="border-top:1px solid rgba(255,255,255,.4);padding-top:4px;width:120px;font-size:9.5px">Principal's signature</div><div style="text-align:right;font-size:9.5px;color:#f3d27a">Valid: Sept 2025 – July 2026</div></div></div>`}
let IDC={c:'G9'};
function idcardsView(id){
 const r=ME().role;
 if(id&&canSee(id)){const s=stu(id);return{title:'Student ID Card',html:`<div class="toolbar no-print"><a class="btn btn-ghost" href="#/student/${id}">${ic('back')} Profile</a><span style="flex:1"></span><button class="btn btn-primary" onclick="print()">${ic('print')} Print card</button></div><div class="card" style="background:radial-gradient(600px 300px at 50% 0,#eef3ff,#fff)"><div class="card-h"><h3>Front & back preview</h3><small>Standard ID-card size · hover to tilt</small></div><div class="idc-row" style="padding:10px 0 20px">${idCard(s)}${idBack(s)}</div></div>`}}
 const list=r==='parent'?DB.parentKids.map(stu):inClass(IDC.c);
 return{title:'Student ID Cards',html:`${r!=='parent'?`<div class="toolbar no-print"><select class="input" id="ic">${opts(CLASSES.map(c=>[c.id,c.name]),IDC.c)}</select><span style="flex:1"></span><button class="btn btn-primary" onclick="print()">${ic('print')} Print all (${list.length})</button></div>`:''}<div class="idc-row" style="justify-content:flex-start">${list.map(s=>`<a href="#/idcards/${s.id}" style="text-decoration:none">${idCard(s)}</a>`).join('')}</div>`,after(){$('#ic')&&($('#ic').onchange=e=>{IDC.c=e.target.value;route()})}}}
function classesView(){
 return{title:'Classes & Teachers',html:`<div class="grid g4" style="margin-bottom:18px">${['K','E','J','S'].map(l=>{const cs=CLASSES.filter(c=>c.level===l),n=cs.reduce((a,c)=>a+inClass(c.id).length,0);return `<div class="card kpi"><div class="ki ${{K:'gold',E:'blue',J:'green',S:'purple'}[l]}">${ic('school')}</div><div class="kv">${n}</div><div class="kl">${LEVELS[l]} · ${cs.length} classes</div></div>`}).join('')}</div>
 <div class="grid g3">${CLASSES.map(c=>{const l=inClass(c.id),a=avg(l.map(s=>overall(s.id))),t=TEACHERS.find(t=>t.sponsor===c.id);return `<a class="card class-card" href="#/gradesheet" data-c="${c.id}" style="text-decoration:none"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div class="cn">${c.name}</div><small style="color:var(--muted)">${LEVELS[c.level]} · ${subjectsOf(c.id).length} subjects</small></div>${gradeTag(a)}</div>
 <div style="display:flex;margin:14px 0">${l.slice(0,6).map((s,i)=>`<div style="margin-left:${i?-10:0}px">${avatar(s,30)}</div>`).join('')}${l.length>6?`<div class="av" style="width:30px;height:30px;font-size:11px;background:#e9edf5;color:#56627a;margin-left:-10px">+${l.length-6}</div>`:''}</div>
 <div style="font-size:13px"><span style="color:var(--muted)">Sponsor:</span> <b>${esc(t?.name||'—')}</b></div><div class="bar" style="margin-top:10px"><i style="width:${a?Math.max(0,(a-50)*2):0}%"></i></div><small style="color:var(--muted)">${l.length} students · tap for grade sheet</small></a>`}).join('')}</div>
 <div class="card" style="margin-top:18px;padding:0;overflow:hidden"><div style="padding:16px 18px;border-bottom:1px solid var(--line)"><h3 style="font-size:16px">Teaching staff</h3><small style="color:var(--muted)">Role-based access: teachers only enter grades for their assigned classes & subjects</small></div>
 <div class="tbl-wrap" style="border:0;border-radius:0"><table class="tbl"><thead><tr><th>Teacher</th><th>Subject(s)</th><th>Sponsor of</th><th class="hide-m">Phone</th><th class="hide-m">Portal role</th></tr></thead><tbody>${TEACHERS.map(t=>`<tr><td><div class="who"><div class="av" style="width:32px;height:32px;font-size:12px;background:linear-gradient(135deg,#1d4290,#0b1f4b)">${t.name.replace(/^(Mr|Mrs|Ms|Rev)\. /,'').split(' ').filter(w=>w.length>2).map(w=>w[0]).join('').slice(0,2)}</div><b>${esc(t.name)}</b></div></td><td>${esc(t.subj)}</td><td>${t.sponsor?cls(t.sponsor).name:'<span style="color:var(--muted)">—</span>'}</td><td class="hide-m">${t.phone}</td><td class="hide-m"><span class="tag blue">Teacher</span></td></tr>`).join('')}</tbody></table></div></div>`,
 after(){$$('.class-card').forEach(a=>a.onclick=()=>{GS.c=a.dataset.c})}}}
function myView(){
 const kids=DB.parentKids.map(stu);
 return{title:'My Children',html:`<div class="hero"><div><h2>Hello, Mrs. Kollie 👋</h2><p>Check your children's grades for every marking period, open report cards and see how they are progressing — anytime, from your phone.</p><div class="chips"><span class="chip">🎓 ${SCHOOL.year}</span><span class="chip">🔒 Private to your family</span></div></div><div class="hc">${crest(100)}</div></div>
 <div class="grid g2">${kids.map(s=>{const a=overall(s.id),rk=ranks(s.cls),last=PERIODS.slice().reverse().find(p=>overall(s.id,p.k)!=null);return `<div class="card"><a class="kid-card" href="#/student/${s.id}" style="text-decoration:none">${avatar(s,64)}<div style="flex:1;min-width:0"><h3>${esc(fullName(s))}</h3><small style="color:var(--muted)">${cls(s.cls).name} · ${s.id}</small><div class="meta"><span class="tag navy">Rank ${rk.m[s.id]||'—'} of ${rk.n}</span>${pf(a)}</div></div><div class="ring" style="--p:${Math.round(a||0)};--c:${a!=null&&a<PASS?'#d92d2d':'#1d4290'}"><span>${letter(a)}</span></div></a>
 <div style="margin:16px 0 6px;font-size:12.5px;color:var(--muted)">Latest: <b style="color:var(--ink)">${last?last.l:'—'}</b> average <b style="color:var(--ink)">${last?fmt(overall(s.id,last.k),1):'—'}</b> · Yearly by subject:</div>
 ${subjectsOf(s.cls).map(sb=>{const v=val(s.id,sb,'y');return `<div style="display:flex;align-items:center;gap:10px;margin:7px 0;font-size:13px"><span style="width:118px;flex:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${sb}</span><div class="bar" style="flex:1"><i style="width:${v||0}%;${v!=null&&v<PASS?'background:#e05656':''}"></i></div><b class="${v!=null&&v<PASS?'low':''}" style="width:30px;text-align:right">${fmt(v)}</b></div>`}).join('')}
 <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap"><a class="btn btn-primary btn-sm" href="#/student/${s.id}">${ic('chart')} Full grades</a><a class="btn btn-gold btn-sm" href="#/report/${s.id}">${ic('doc')} Report card</a><a class="btn btn-ghost btn-sm" href="#/idcards/${s.id}">${ic('id')} ID card</a></div></div>`}).join('')}</div>`}}
render();
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(()=>{});
