$(function() {
    var n = $(window).scrollTop();

    if (n >= 150) {
        collapsMenu();
    }
    $(window).scroll(function() {
        var n = $(window).scrollTop();
        console.log(n);
        if (n >= 150) {
            collapsMenu();
        } else {
            expendMenu();
        }
    })
    var block1 = $('.sec1').offset().top;
    var logo = $('.kv').offset().top;
    var footer = $('footer').offset().top;

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

    $('.service').click(function() {
        $('html,body').animate({ scrollTop: block1 }, 1000)
        return false;
    })
    $('.contact').click(function() {
        $('html,body').animate({ scrollTop: footer }, 1000)
        return false;
    })

});

function collapsMenu() {
    $('header').css({
        'background-color': '#ffffff20',
        'backdrop-filter': 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)',
        '-moz-backdrop-filter': 'blur(10px)',
        'height': '60px',
    })
}

function expendMenu() {
    $('header').css({
        'background-color': 'transparent',
        'backdrop-filter': 'blur(0px)',
        '-webkit-backdrop-filter': 'blur(0px)',
        '-moz-backdrop-filter': 'blur(0px)',
        'height': '100px'
    })
}