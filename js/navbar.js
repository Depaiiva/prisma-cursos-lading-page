const links = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname;

const progressMap = {
  'index.html':        20,
  'who-we-are.html':   40,
  'courses.html':      60,
  'testimonials.html': 80,
  'contact.html':      100,
};

function getCurrentPageKey(path) {
  if (path.endsWith('/')) return 'index.html';

  const segments = path.split('/');
  const lastSegment = segments[segments.length - 1];

  const page = lastSegment || 'index.html';

  if(page === 'quiz.html') {
    return 'courses.html'
  }

  if (page === 'confirmation-form-contact.html') {
    return 'contact.html';
  }

  return page;
}

const activeKey = getCurrentPageKey(currentPath);

links.forEach(link => {
  link.classList.remove('active');
  const linkPath = new URL(link.href).pathname;
  const linkKey = getCurrentPageKey(linkPath);

  if (linkKey === activeKey) {
    link.classList.add('active');
  }

});

// Preenche a barra
const fill = document.querySelector('.nav-progress-bar__fill');
if (fill) {
  const progress = progressMap[activeKey] ?? 0;
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
