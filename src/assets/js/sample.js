$(document).ready(function ($) {
    $('#left').simpleScrollFollow({
        min_width: 992,
        limit_elem: $('article')
    });

    $('#right').simpleScrollFollow({
        min_width: 992,
        limit_elem: $('article')
    });

    $('#isolated').simpleScrollFollow({
        min_width: 992,
        limit_elem: $('article')
    });
    $('#isolated #toggle_scroll').click(function () {
        if ($(this).text() == 'click to disable scroll') {
            $('#isolated').simpleScrollFollow('setEnabled', false);
            $(this).text('click to enable scroll');
        } else {
            $('#isolated').simpleScrollFollow('setEnabled', true);
            $(this).text('click to disable scroll');
        }
    });
    $('.selector').click(function () {
        $('.serach-down').slideToggle(300);
    });
$('aside').simpleScrollFollow({
    limit_elem: 'article'
});

////offset() measures how far down the sticky element is from the top of the window
//var stickyTop = $(".sticky").offset().top;
//
////whenever the user scrolls, measure how far we have scrolled
//$(window).scroll(function () {
//    var windowTop = $(window).scrollTop();
//
//    //check to see if we have scrolled past the original location of the sticky element
//    if (windowTop > stickyTop) {
//
//        //if so, change the sticky element to fised positioning
//        $(".sticky").addClass("stuck");
//    } else {
//        $(".sticky").removeClass("stuck");
//    }
//});


/*
var headerHeight = $('.masthead').outerHeight(true); // true value, adds margins to the total height
var footerHeight = $('footer').outerHeight() + 100;
$('#account-overview-container').affix({
    offset: {
        top: headerHeight,
        bottom: footerHeight
    }
}).on('affix.bs.affix', function () { // before affix
    $(this).css({
        
        'width': $(this).outerWidth()  // variable widths
    });
});

var headerHeight = $('.masthead').outerHeight(true); // true value, adds margins to the total height
var footerHeight = $('footer').outerHeight() + 100;
$('#account-overview-containersecond').affix({
    offset: {
        top: headerHeight,
        bottom: footerHeight
    }
}).on('affix.bs.affix', function () { // before affix
    $(this).css({
       
        'width': $(this).outerWidth()  // variable widths
    });
});
*/
//
//(function ($) {
//    $.fn.menumaker = function (options) {
//        var cssmenu = $(this), settings = $.extend({
//            format: "dropdown",
//            sticky: false
//        }, options);
//        return this.each(function () {
//            $(this).find(".button").on('click', function () {
//                $(this).toggleClass('menu-opened');
//                var mainmenu = $(this).next('ul');
//                if (mainmenu.hasClass('open')) {
//                    mainmenu.slideToggle().removeClass('open');
//                } else {
//                    mainmenu.slideToggle().addClass('open');
//                    if (settings.format === "dropdown") {
//                        mainmenu.find('ul').show();
//                    }
//                }
//            });
//            cssmenu.find('li ul').parent().addClass('has-sub');
//            multiTg = function () {
//                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
//                cssmenu.find('.submenu-button').on('click', function () {
//                    $(this).toggleClass('submenu-opened');
//                    if ($(this).siblings('ul').hasClass('open')) {
//                        $(this).siblings('ul').removeClass('open').slideToggle();
//                    } else {
//                        $(this).siblings('ul').addClass('open').slideToggle();
//                    }
//                });
//            };
//            if (settings.format === 'multitoggle')
//                multiTg();
//            else
//                cssmenu.addClass('dropdown');
//            if (settings.sticky === true)
//                cssmenu.css('position', 'fixed');
//            resizeFix = function () {
//                var mediasize = 1000;
//                if ($(window).width() > mediasize) {
//                    cssmenu.find('ul').show();
//                }
//                if ($(window).width() <= mediasize) {
//                    cssmenu.find('ul').hide().removeClass('open');
//                }
//            };
//            resizeFix();
//            return $(window).on('resize', resizeFix);
//        });
//    };
//})(jQuery);
});
//(function ($) {
//    $(document).ready(function () {
//        $("#cssmenu").menumaker({
//            format: "multitoggle"
//        });
//    });
//})(jQuery);
