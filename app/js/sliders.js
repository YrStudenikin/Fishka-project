const mainSlider = new Swiper('.main-slider__container', {
    direction: 'horizontal',
    loop: false,
    speed: 800,
    effect: 'fade',
    autoplay: true,
    pagination: {
        el: '.main-slider__container .slider__pagination',
        clickable: true,
    },
});

const sliderGameCategories = new Swiper('.game-categories', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    speed: 400,
    autoplay: false,
});

const sliderWinners = new Swiper('.winners .swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    autoplay: {
        delay: 5000
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        640: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
            autoplay: true
        }
    }
});

const sliderTournaments = new Swiper('.slider-tournaments .swiper-container', {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: true,
    navigation: {
        nextEl: '.slider-tournaments .slider-button-next',
        prevEl: '.slider-tournaments .slider-button-prev',
    },
    breakpoints: {
        993: {
            slidesPerView: "auto",
        },
        640: {
            speed: 600,
            spaceBetween: 0,
        },
    }
});

const sliderPromo = new Swiper('.slider-promo .swiper-container', {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    speed: 500,
    spaceBetween: 20,
    autoplay: true,
    navigation: {
        nextEl: '.slider-promo .slider-button-next',
        prevEl: '.slider-promo .slider-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1.3,
            centeredSlides: true,
            spaceBetween: 10
        }
    }
});

const sliderStats = new Swiper('.slider-stats .swiper-container', {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: true,
    navigation: {
        nextEl: '.slider-stats .slider-button-next',
        prevEl: '.slider-stats .slider-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        500: {
            slidesPerView: 1.7,
            centeredSlides: true,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1.4,
            centeredSlides: true,
            spaceBetween: 10,
        }
    }
});

const sliderPayments = new Swiper('.slider-payments .swiper-container', {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    speed: 500,
    slidesPerView: 7,
    spaceBetween: 20,
    autoplay: true,
    navigation: {
        nextEl: '.slider-payments .slider-button-next',
        prevEl: '.slider-payments .slider-button-prev',
    },
    breakpoints: {
        1200: {
            spaceBetween: 20,
        },
        640: {
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});

const sliderDatePicker = new Swiper('.date-picker .swiper-container', {
    direction: 'horizontal',
    grabCursor: true,
    loop: false,
    speed: 500,
    slidesPerView: 10,
    spaceBetween: 20,
    autoplay: false,
    navigation: {
        nextEl: '.date-picker .slider-button-next',
        prevEl: '.date-picker .slider-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 10,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 6,
        },
        500: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 5,
        }
    }
});