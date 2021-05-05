$(function() {
    $(window).scroll(function() {
        var n = $(window).scrollTop();
        console.log(n);
        if (n >= 150) {
            $('header').css({
                    'background-color': '#ffffff20',
                    'backdrop-filter': 'blur(10px)',
                    '-webkit-backdrop-filter': 'blur(10px)',
                    '-moz-backdrop-filter': 'blur(10px)',
                    'height': '60px',
                })
                // $('header img').attr('src', './img/logo1.svg')
        } else {
            $('header').css({
                    'background-color': 'transparent',
                    'backdrop-filter': 'blur(0px)',
                    '-webkit-backdrop-filter': 'blur(0px)',
                    '-moz-backdrop-filter': 'blur(0px)',
                    'height': '100px'
                })
                // $('header img').attr('src', './img/logo2.svg')

        }
    })
    var block1 = $('.sec1').offset().top;
    var logo = $('.kv').offset().top;

    $('.scroller').click(function() {
        $('html,body').animate({ scrollTop: block1 }, 1000)
        return false;
    })
    $('header .logo').click(function() {
        $('html,body').animate({ scrollTop: logo }, 1000)
        return false;
    })
    $('footer .logo').click(function() {
        $('html,body').animate({ scrollTop: logo }, 0)
        return false;
    })

});