const teamSwiper = new Swiper('.js-team-swiper', {
    slidesPerView: 'auto',
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
    // pagination: {
    //     el: '#team-pagination',
    //     type: 'bullets',
    //     clickable: true,
    // },
    // navigation: {
    //     prevEl: '#team-prev',
    //     nextEl: '#team-next',
    // },
    breakpoints: {
        0: {
            // slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            // slidesPerView: 2,
            spaceBetween: 30,
        },
        // 860: {
        //     slidesPerView: 3,
        //     spaceBetween: 64,
        // },
        // 1024: {
        //     spaceBetween: 75,
        // }
    }
});

document.querySelector('.burger-btn').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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