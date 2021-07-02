const closeModalButtons = document.querySelectorAll('[data-close-button]');
const body = document.getElementById('body-index');
const nav = document.getElementById('nav');
const boxPedido = document.getElementById('boxPedido');


body.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.activo');
  modals.forEach(modal => {
    closeModal(modal);
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
});


function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('activo');
  body.classList.remove('activo');
  nav.classList.remove('activo');
}
