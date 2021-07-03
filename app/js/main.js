
$(document).ready(function(){

    //преобразование svg в теге img
    $('img.svg').each(function(){
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            let $svg = $(data).find('svg');

            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);

        }, 'xml');
    });

    //quick-bar (+tooltips)
    const tippyInstances = tippy('[data-tippy-content]', {
        arrow: true,
        delay: [50, 150],
        animation: 'shift-away',
        placement: 'right',
    });

    function enableTippy() {
        $.each(tippyInstances, function(index, tippyInstance){
            tippyInstance.enable();
        });
    }
    function disableTippy() {
        $.each(tippyInstances, function(index, tippyInstance){
            tippyInstance.disable();
        });
    }

    let appWrapper = $('#app-wrapper');

    $('.btn-bento__inner').click(function(){
        !appWrapper.hasClass('menu-opened') ? disableTippy() : enableTippy();
        appWrapper.toggleClass('menu-opened overlay-open');
        $('.btn-bento__inner').toggleClass('active');
    });

    $(document).bind('click', function (e) {
        if ($(e.target).hasClass('overlay')) {
            appWrapper.removeClass('menu-opened overlay-open');
            $('.btn-bento__inner').removeClass('active');
        }
    });


    //tabs games
    $('.icon-tab-btn').on('click', function () {
        $('.icon-tab-btn').removeClass('icon-tab-btn--active');
        $(this).addClass('icon-tab-btn--active');
    })

    //timer tourney
    function makeTimer() {

        let endTime = new Date("19 Jule 2021 9:56:00");
        endTime = (Date.parse(endTime) / 1000);

        let now = new Date();
        now = (Date.parse(now) / 1000);

        let timeLeft = endTime - now;

        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function() { makeTimer(); }, 1000);
})

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
});

const sliderPromo = new Swiper('.slider-promo .swiper-container', {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: true,
    navigation: {
        nextEl: '.slider-promo .slider-button-next',
        prevEl: '.slider-promo .slider-button-prev',
    },
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
});


const activeTabClass = 'main-tabs__item--active';
const activeTabContentClass = 'main-tabs__content--active';

let tab = $('.main-tabs__item');
let tabContent = $('.main-tabs__content');

tab.on('click', function (e) {
    e.preventDefault();
    let currentTabContent = $($(this).attr('href'));

    tabContent.removeClass(activeTabContentClass);
    currentTabContent.addClass(activeTabContentClass);

    tab.removeClass(activeTabClass);
    $(this).addClass(activeTabClass);
})

