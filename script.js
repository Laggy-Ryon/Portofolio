// Theme
const root = document.documentElement, themeBtn = document.getElementById('themeBtn');
const sunIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
const moonIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
function setTheme(t){ root.dataset.theme = t; themeBtn.innerHTML = t === 'dark' ? sunIcon : moonIcon; try{ localStorage.setItem('theme', t); }catch(e){} }
let saved = null; try{ saved = localStorage.getItem('theme'); }catch(e){}
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');

// Mobile menu
const menu = document.getElementById('menu');
document.getElementById('menuBtn').onclick = () => menu.classList.toggle('open');
menu.addEventListener('click', e => { if(e.target.tagName === 'A') menu.classList.remove('open'); });

// Active nav highlight
const links = [...menu.querySelectorAll('a')];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
}), {rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s => spy.observe(s));

// Project details
document.querySelectorAll('.more').forEach(b => b.onclick = () => {
  const d = b.nextElementSibling; const open = d.classList.toggle('open');
  b.textContent = open ? 'Hide details' : 'View details';
});

// Contact form validation
const form = document.getElementById('contactForm');
const rules = {
  name: v => v.trim().length >= 2 || 'Please enter your name (min 2 characters).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email address.',
  msg: v => v.trim().length >= 10 || 'Message must be at least 10 characters.'
};
const ENDPOINT = 'https://formsubmit.co/ajax/Harshitneog44@gmail.com';
const st = document.getElementById('status');
function show(msg, ok){ st.textContent = msg; st.style.color = ok ? '#2a9d5c' : '#e5484d'; }
form.addEventListener('submit', async e => {
  e.preventDefault(); let ok = true;
  for(const id in rules){
    const el = document.getElementById(id), r = rules[id](el.value);
    el.classList.toggle('bad', r !== true);
    el.parentElement.querySelector('small').textContent = r === true ? '' : r;
    if(r !== true) ok = false;
  }
  if(!ok){ show('', true); return; }
  if(form.website.value) return; // honeypot: bots only
  const btn = form.querySelector('button'); btn.disabled = true; show('Sending...', true);
  try{
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('msg').value.trim(),
        _subject: 'New portfolio message from ' + document.getElementById('name').value.trim(),
        _replyto: document.getElementById('email').value.trim()
      })
    });
    const data = await res.json();
    if(!res.ok || data.success === 'false') throw new Error('send failed');
    show('Thanks! Your message has been sent.', true); form.reset();
  }catch(err){
    show('Could not send right now. Please email me directly at Harshitneog44@gmail.com.', false);
  }finally{ btn.disabled = false; }
});