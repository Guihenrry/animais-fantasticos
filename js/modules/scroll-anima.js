export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distancia de cada element
  // em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((element) => {
      return {
        element,
        offsetTop: element.offsetTop,
      };
    });
  }

  // adiciona ou remove a class ativo
  // em relação a distancia do topo
  checkDistance() {
    this.distance.forEach(({ element, offsetTop }) => {
      if (window.pageYOffset > offsetTop - this.windowMetade) {
        element.classList.add('ativo');
      } else if (element.classList.contains('ativo')) {
        element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event do evento scrool do window
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
