// Menu mobile (burger)
(function () {
  const burger = document.querySelector('.retro-nav-burger');
  const mobileNav = document.querySelector('.retro-nav-mobile');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });

  // Refermer en cliquant sur un lien
  mobileNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
