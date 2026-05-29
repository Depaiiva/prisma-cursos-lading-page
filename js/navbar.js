const links = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname;

// Progresso por página (1/5, 2/5, etc.)
const progressMap = {
  '/index.html':               20,
  '/':                         20,
  '/pages/who-we-are.html':    40,
  '/pages/courses.html':       60,
  '/pages/testimonials.html':  80,
  '/pages/contact.html':      100,
};

// Ativa o link correto
links.forEach(link => {
  link.classList.remove('active');
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

// Preenche a barra
const fill = document.querySelector('.nav-progress-bar__fill');
if (fill) {
  const progress = progressMap[currentPath] ?? 0;
  fill.style.width = progress + '%';
}

// Hamburger — abre/fecha menu mobile
const hamburger = document.getElementById('hamburger');
const navBlock = document.querySelector('.nav-block');

if (hamburger && navBlock) {
  hamburger.addEventListener('click', () => {
    navBlock.classList.toggle('open');
  });
}
