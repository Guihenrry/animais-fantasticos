import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // define eventos padrao caso não iformado
    // como parametro do constructor
    if (events === undefined) this.events = ['click', 'touchstart']; 
    else this.events = events;


    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }


  // adiciona o deropdownMenu e aiciona
  // a funcção que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvents();
    }

    return this;
  }

}
