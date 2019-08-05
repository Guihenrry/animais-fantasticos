import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/anima-tab.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdownmenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFucionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/anima-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(('[data-anime="accordion"] dt'));
accordion.init();

const tabNav = new TabNav('[data-tabmenu="ativo"] li', '[data-tabcontent="ativo"]  section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();


modal.toggleModal();

initTooltip();
initDropDownMenu();
initMenuMobile();
initFucionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
