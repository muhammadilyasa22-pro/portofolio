const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('show');
    menu.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav a');

function setActiveNav() {
  let current = 'home';
  const position = window.scrollY + 180;

  sections.forEach((section) => {
    if (position >= section.offsetTop) current = section.id;
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
