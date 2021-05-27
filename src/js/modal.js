(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalMenuBtn: document.querySelector('[data-modal-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('div.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', openCloseModalMenu);
  refs.openModalMenuBtn.addEventListener('click', openCloseModalMenu);
  refs.closeModalBtn.addEventListener('click', openCloseModalMenu);
  refs.backdrop.addEventListener('click', openCloseModalMenu);

  function openCloseModalMenu(event) {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  function closeModalMenu(event) {
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden');
  }

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      closeModalMenu(event);
      return;
    }
  };
})();
