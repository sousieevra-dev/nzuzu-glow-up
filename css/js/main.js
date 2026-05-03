/* --- Header au scroll --- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

/* --- Menu mobile --- */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
  document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
});

function fermerMenu() {
  hamburger.classList.remove('open');
  navMobile.classList.remove('open');
  document.body.style.overflow = '';
}

/* --- Animations au scroll (Intersection Observer) --- */
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach(entree => {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveler').forEach(el => observateur.observe(el));

/* --- FAQ Accordéon --- */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const reponse = btn.nextElementSibling;
  const estOuvert = item.classList.contains('open');

  // Fermer tous les autres
  document.querySelectorAll('.faq-item.open').forEach(autre => {
    autre.classList.remove('open');
    autre.querySelector('.faq-reponse').style.maxHeight = '0';
  });

  // Ouvrir celui-ci si fermé
  if (!estOuvert) {
    item.classList.add('open');
    reponse.style.maxHeight = reponse.scrollHeight + 'px';
  }
}

/* --- Texte hero blanc sur header transparent --- */
const heroLinks = document.querySelectorAll('.header .nav-link, .header .logo-nzuzu, .header .logo-glowup');
function updateHeaderColors() {
  const isScrolled = header.classList.contains('scrolled');
  if (!isScrolled) {
    document.querySelectorAll('.header .logo-nzuzu').forEach(el => el.style.color = '#fff');
    document.querySelectorAll('.header .logo-glowup').forEach(el => el.style.color = 'rgba(255,255,255,0.7)');
    document.querySelectorAll('.header .nav-link').forEach(el => el.style.color = 'rgba(255,255,255,0.7)');
    document.querySelectorAll('.hamburger span').forEach(el => el.style.background = '#fff');
  } else {
    document.querySelectorAll('.header .logo-nzuzu').forEach(el => el.style.color = '');
    document.querySelectorAll('.header .logo-glowup').forEach(el => el.style.color = '');
    document.querySelectorAll('.header .nav-link').forEach(el => el.style.color = '');
    document.querySelectorAll('.hamburger span').forEach(el => el.style.background = '');
  }
}

window.addEventListener('scroll', updateHeaderColors);
updateHeaderColors();
