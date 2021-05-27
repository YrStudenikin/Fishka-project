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

$(document).ready(function(){

    //quick-bar (+tooltips)
    const tippyInstances = tippy('[data-tippy-content]', {
        arrow: true,
        delay: [100, 150],
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

    let decimal_places = 2;
    let decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    $('#top-jackpot-val')
        .animateNumber(
            {
                number: 217018891 * decimal_factor,

                numberStep: function(now, tween) {
                    let floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);

                    if (decimal_places > 0) {
                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);
                        floored_number = floored_number.toString().replace('.', ' ');
                    }

                    target.text('$' + floored_number);
                }
            },
            20000
        );
})