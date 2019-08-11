import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com a specie e total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atraves de um arquivo json
  // e cria cada elemento utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch e espera a resposta e transforma em Json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // appos pegar os animais da api prenche e anima
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  return criarAnimais();
}
