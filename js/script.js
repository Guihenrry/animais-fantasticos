import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/anima-tab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdownmenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFucionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/anima-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(('[data-anime="accordion"] dt'));
accordion.init();

const tabNav = new TabNav('[data-tabmenu="ativo"] li', '[data-tabcontent="ativo"]  section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

initDropDownMenu();
initMenuMobile();
initFucionamento();
initAnimacaoScroll();
