const setActiveNav = () => {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;
  document
    .querySelectorAll('nav a[data-page]')
    .forEach((link) => {
      const isActive = link.dataset.page === currentPage;
      link.classList.toggle('active', isActive);
    });
};

const scrollToTopButton = () => {
  const btn = document.querySelector('[data-scroll-top]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  scrollToTopButton();
});
