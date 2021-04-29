$(function() {
    $(window).scroll(function() {
        var n = $(window).scrollTop();
        console.log(n);
        if (n >= 150) {
            $('header').css({
                    'background-color': '#ffffff20',
                    'backdrop-filter': 'blur(10px)',
                    '-webkit-backdrop-filter': 'blur(10px)',
                    '-moz-backdrop-filter': 'blur(10px)'
                })
                // $('header img').attr('src', './img/logo1.svg')
        } else {
            $('header').css({
                    'background-color': 'transparent',
                    'backdrop-filter': 'blur(0px)',
                    '-webkit-backdrop-filter': 'blur(0px)',
                    '-moz-backdrop-filter': 'blur(0px)'
                })
                // $('header img').attr('src', './img/logo2.svg')

        }
    })


});