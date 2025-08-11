// small helpers: year, menu toggle, typed hero title, contact form mock, AOS init done in index
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menuToggle && menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Simple typed effect for hero title (keeps text from resume verbatim)
(function typedTitle() {
  const el = document.getElementById('typedTitle');
  const full = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  const speed = 40;
  function step() {
    if (i <= full.length) {
      el.textContent = full.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
})();

// Contact form handler (no backend) — mock behaviour with friendly message
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('contactStatus');
  status.textContent = 'Thanks — message received (demo). For production, integrate Formspree / Netlify Forms / your backend.';
  status.style.color = 'var(--muted)';
  // reset form
  e.target.reset();
  return false;
}
