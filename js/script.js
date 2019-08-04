import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initAnimaTab from './modules/anima-tab.js';
import initModal from './modules/modal.js';
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


initAnimaTab();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFucionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
