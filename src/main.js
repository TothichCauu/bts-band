//Query Selector Shorthands
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Handle auto slideshow
let index = 0;
const autoSlideShow = () => {
    const x = $$('.slider-section');
    for (let i = 0; i < x.length; i++) x[i].style.display = 'none';

    index++;
    if (index > x.length) index = 1;

    x[index - 1].style.display = 'block';
    setTimeout(autoSlideShow, 4000);
};
autoSlideShow();

//Handle buy tickets modal
const modal = $('.js-modal');
const modalContainer = $('.js-modal-container');

const buyButtons = $$('.js-buy-tickets');
const closeButton = $('.js-modal-close');

const showModal = () => modal.classList.add('open');
const hideModal = () => modal.classList.remove('open');

for (const buyButton of buyButtons) {
    buyButton.onclick = showModal;
}
closeButton.onclick = hideModal;

modal.onclick = hideModal;
modalContainer.onclick = (e) => e.stopPropagation();

//Handle header on mobiles
const header = $('#header');

if (header.clientWidth > 740) {
    header.classList.remove('mobile-close-header');
} else {
    header.classList.add('mobile-close-header');
}

const shrinkMenu = () => header.classList.add('mobile-close-header');
const expandMenu = () => header.classList.remove('mobile-close-header');

const mobileMenu = $('#mobile-menu');
mobileMenu.onclick = () => {
    let isClosed = header.clientHeight === mobileMenu.clientHeight;
    if (isClosed) {
        expandMenu();
        header.style.height = 'auto';
    } else shrinkMenu();
};

const menuItems = $$('.nav > li > a');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = shrinkMenu;
}
