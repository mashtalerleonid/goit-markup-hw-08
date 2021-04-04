(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const cont = document.querySelector('[data-link]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('menu--is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('menu--is-open');

    document.body.classList.toggle('menu--is-open');
  });

  cont.addEventListener('click', () => {
    document.body.classList.remove('menu--is-open');
    mobileMenuRef.classList.remove('menu--is-open');
    menuBtnRef.classList.remove('menu--is-open');
  });
})();
