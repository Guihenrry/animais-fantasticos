export default function initScrollSuave() {
  const linkIntermo = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linkIntermo.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
