// Handle auto slideshow
let index = 0;
const autoSlideShow = () => {
    const x = $('.slider-section');
    x.hide();

    index++;
    if (index > x.length) index = 1;

    x.eq(index - 1).show();
    setTimeout(autoSlideShow, 4000);
};
autoSlideShow();

// Handle buy tickets modal
const modal = $('.js-modal');
const modalContainer = $('.js-modal-container');

const buyButtons = $('.js-buy-tickets');
const closeButton = $('.js-modal-close');

const showModal = () => modal.addClass('open');
const hideModal = () => modal.removeClass('open');

buyButtons.on('click', showModal);
closeButton.on('click', hideModal);

modal.on('click', hideModal);
modalContainer.on('click', (e) => e.stopPropagation());

// Handle header on mobiles
const header = $('#header');
if (header.width() > 740) {
    header.removeClass('mobile-close-header');
} else {
    header.addClass('mobile-close-header');
}

const shrinkMenu = () => header.addClass('mobile-close-header');
const expandMenu = () => header.removeClass('mobile-close-header');

const mobileMenu = $('#mobile-menu');

mobileMenu.on('click', () => {
    let isClosed = header.height() === mobileMenu.innerHeight();
    if (isClosed) {
        expandMenu();
        header.css('height', 'auto');
    } else {
        shrinkMenu();
    }
});

const menuItems = $('.nav > li > a');
menuItems.on('click', shrinkMenu);
