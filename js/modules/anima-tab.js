export default function initAnimaTab() {
  const tabMenu = document.querySelectorAll('[data-tabmenu="ativo"] li');
  const tabContent = document.querySelectorAll('[data-tabcontent="ativo"]  section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const classe = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', classe);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
