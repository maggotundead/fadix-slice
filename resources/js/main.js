const servicesSwiper = new Swiper('.js-services-swiper', {
    slidesPerView: 1,
    loop: false,
    draggable: true,
    // spaceBetween: 30,
    // noSwiping: true,
    // autoplay: {
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        //$tablet-width
        1200: {
            slidesPerView: 'auto',
        },
    }
});

const teamsSwiper = new Swiper('.js-teams-swiper', {
    slidesPerView: 'auto',
    loop: true,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const feedbackSwiper = new Swiper('.js-feedback-swiper', {
    slidesPerView: 1,
    loop: false,
    draggable: true,
    // spaceBetween: 30,
    // noSwiping: true,
    // autoplay: {
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '#prev-feedback',
        nextEl: '#next-feedback',
    },
});

const stepsSwiper = new Swiper('.js-steps-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const cooperationOptsSwiper = new Swiper('.js-cooperation-options-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const techSwiper = new Swiper('.js-tech-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});


document.querySelector('.burger-btn').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// sticky header
// window.onscroll = function() {toggleHeader()};
// const header = document.querySelector('header');
// window.pageYOffset && header.classList.add('sticky')
// const toggleHeader = () => {
//     window.pageYOffset > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
// }


//modal
// const contactModal = document.querySelector('.contact-modal');
// document.querySelectorAll('[modal-btn]').forEach(btn => {
//     btn.addEventListener('click', () => {
//         contactModal.classList.add('open');
//     });
// });

// document.querySelectorAll('.modal-close').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.modal').forEach(modal => {
//             modal.classList.remove('open');
//         });
//     });
// });
// document.querySelectorAll('.modal-overlay').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.modal').forEach(modal => {
//             modal.classList.remove('open');
//         });
//     });
// });

// const cart = document.querySelector('.cart');
// document.querySelector('.cart-btn').addEventListener('click', () => {
//     cart.classList.toggle('open');
// });

// document.addEventListener('click', function(event) {
//     if ( cart.classList.contains('open') && event.target !== cart && !cart.contains(event.target) ) {
//         cart.classList.remove('open');
//     }
// });