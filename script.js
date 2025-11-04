// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
function toggleMenu(){ document.getElementById('navLinks').classList.toggle('active'); }
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', ()=> document.getElementById('navLinks').classList.remove('active'));
});

// Popup
const popup = document.getElementById('contactPopup');
function openPopup(){ popup.classList.add('active'); trapFocus(popup); }
function closePopup(){ popup.classList.remove('active'); document.activeElement.blur(); }
if (popup) {
  popup.addEventListener('click', (e)=>{ if(e.target === popup) closePopup(); });
}
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closePopup(); });

// Simple focus trap for accessibility
function trapFocus(el){
  const focusable = el.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
  if(!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length-1];
  first.focus();
  function handle(e){
    if(e.key !== 'Tab') return;
    if(e.shiftKey && document.activeElement === first){ last.focus(); e.preventDefault(); }
    else if(!e.shiftKey && document.activeElement === last){ first.focus(); e.preventDefault(); }
  }
  el.addEventListener('keydown', handle, { once: true });
}

// Smooth anchor scroll (offset for sticky header)
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const id = this.getAttribute('href');
    if(id.length === 1) return;         // ignore href="#"
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// Expose functions for buttons
window.toggleMenu = toggleMenu;
window.openPopup = openPopup;
window.closePopup = closePopup;

