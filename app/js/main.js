$(document).ready(function () {

    //quick-bar (+tooltips)
    const tippyInstances = tippy('[data-tippy-content]', {
        arrow: true,
        delay: [50, 150],
        animation: 'shift-away',
        placement: 'right',
    });

    function enableTippy() {
        $.each(tippyInstances, function (index, tippyInstance) {
            tippyInstance.enable();
        });
    }

    function disableTippy() {
        $.each(tippyInstances, function (index, tippyInstance) {
            tippyInstance.disable();
        });
    }

    let appWrapper = $('#app-wrapper');

    $('.btn-bento__inner').click(function () {
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

        let endTime = new Date("25 Jule 2021 9:56:00");
        endTime = (Date.parse(endTime) / 1000);

        let now = new Date();
        now = (Date.parse(now) / 1000);

        let timeLeft = endTime - now;

        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function () {
        makeTimer();
    }, 1000);
});

//преобразование svg в теге img
function imgToSvg() {
    $('img.svg').each(function () {
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            let $svg = $(data).find('svg');

            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);

        }, 'xml');
    });
}

imgToSvg();


/*----main tabs----*/
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
});
/*---------------------------*/


/*----remove background img on mobile----*/
if ($(window).width() <= 992) {
    $('.page-bg-section').css({'background-image': 'none'});
}
/*---------------------------*/


/*----adaptive quick bar-----*/
let qLinks = $('.quick-bar__links');

if ($(window).width() <= 680) {
    qLinks.detach();
}

$('.btn-bento__inner').on('click', function () {
    if (!$('div').is('.quick-bar__links')) {
        qLinks.appendTo('.quick-bar');
        imgToSvg();
    } else {
        if ($(window).width() <= 680) {
            qLinks.detach();
        }
    }
});
/*---------------------------*/


/*----hide/show password-----*/
$(document).on('click', '.pass-icon', function (e) {
    e.preventDefault();

    let inputWrap = $(this).closest('.pass-block__input-wrap');
    let currentInput = inputWrap.children('.input-pass');
    inputWrap.toggleClass('visible');

    if (currentInput.attr('type') === 'password') {
        currentInput.attr('type', 'text');
    } else {
        currentInput.attr('type', 'password');
    }
});
/*---------------------------*/


/*----copy secret key-----*/
$('.secret-word__copy').on('click', function(e) {
    e.preventDefault();
    copyToClipboard($('.secret-word__inner').text());
    highlightSecretWord();
    ui_copyDone( this );
});

function copyToClipboard(str) {
    let area = document.createElement('textarea');

    document.body.appendChild(area);
    area.value = str;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
}

function ui_copyDone(btn) {
    let contentSaved = btn.innerHTML;

    btn.innerHTML = 'Скопировано!';
    btn.classList.add('copied');

    setTimeout(function() {
        btn.innerHTML = contentSaved;
        btn.classList.remove('copied');
    }, 5000);
}

function highlightSecretWord() {
    let element = document.getElementById("secret-word");
    let range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}
/*---------------------------*/


/*----tab-links-----*/
$('.tabs-block .tab-link').on('click', function() {
    if (!$(this).hasClass('active')) {
        let parentTabs = $(this).closest('.tabs-block');
        parentTabs.find('.tab-link.active, .tab-content.active').removeClass('active');
        let elemIndex = $(this).index();
        $(this).addClass('active');
        parentTabs.find('.tab-content').eq(elemIndex).addClass('active');
    }
});
/*---------------------------*/