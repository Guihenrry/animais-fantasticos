export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modalContantainer = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContantainer.classList.toggle('ativo');
  }
  function clickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (btnAbrir && btnFechar && modalContantainer) {
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    modalContantainer.addEventListener('click', clickForaModal);
  }
}
