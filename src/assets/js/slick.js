$(document).ready(function() {
    function e(e) {
        delta = n ? -120 * e.detail : i ? -e.deltaY : e.wheelDelta, 1 != s && (delta <= -o && (s = !0, d !== c - 1 && (d++, r()), t(l)), delta >= o && (s = !0, 0 !== d && d--, a(), t(l)))
    }

    function t(e) {
        setTimeout(function() {
            s = !1
        }, e)
    }

    function r() {
        var e = $(".page").eq(d - 1);
        $currentSlide = $(".page").removeClass("current").eq(d).addClass("current"), e.removeClass("up-scroll").addClass("down-scroll"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='#" + $(".page").eq(d).attr("id") + "'], .main-menu [href='#" + $(".page").eq(d).attr("id") + "']").parent().addClass("current")
    }

    function a() {
        var e = $(".page").eq(d);
        e = $(".page").removeClass("current").eq(d).addClass("current"), e.removeClass("down-scroll").addClass("up-scroll"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='#" + $(".page").eq(d).attr("id") + "'], .main-menu [href='#" + $(".page").eq(d).attr("id") + "']").parent().addClass("current")
    }
    var s = !1,
        n = /Firefox/i.test(navigator.userAgent),
        i = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent),
        o = 30,
        l = 600,
        d = 0,
        c = $(".page").length;
    $(".menu-trigger").click(function() {
        $("body").toggleClass("active-menu")
    }), $(".cats a").click(function() {
        return $(".gallery-cat").removeClass("active"), $(".gallery " + $(this).attr("href")).addClass("active"), $(".cats li").removeClass("current"), $(this).parent().addClass("current"), !1
    }), $("form").submit(function() {
        var e = $(this);
        return e.find(".btn").remove(), e.text("Your message has been successfully sent.").addClass("sent"), !1
    });
    var u = !1;
    if ($(window).width() > 1023 && $(window).height() > 720 && (i || (u = !0)), u) {
        $("body").addClass("load-onescroll");
        var f = n ? "DOMMouseScroll" : "wheel";
        window.addEventListener(f, _.throttle(e, 60), !1), $(".indicate-dots li a, .btn[href*='#'], .main-menu a:not(.external)").click(function() {
            return d = $($(this).attr("href")).index(), $(".page").removeClass("current"), $($(this).attr("href")).removeClass("down-scroll up-scroll").addClass("current"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='" + $(this).attr("href") + "'], .main-menu [href='" + $(this).attr("href") + "']").parent().addClass("current"), $(".page.current").prevAll(".page").removeClass("up-scroll").addClass("down-scroll"), $(".page.current").nextAll(".page").removeClass("down-scroll up-scroll"), !1
        })
    } else $("body").addClass("load-withoutscroll"), $(".btn[href*='#'], .main-menu a:not(.external)").click(function() {
        $("body").removeClass("active-menu");
        var e = 0;
        $(window).width() < 768 && (e = 79);
        var t = $(this);
        return $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - e
        }, 750), !1
    }), $(".indicate-dots").onePageNav({
        scrollChange: function(e) {
            $(".main-menu li").removeClass("current").find('[href="' + e.find("a").attr("href") + '"]').parent().addClass("current")
        },
        changeHash: !0,
        filter: ":not(.external)"
    });
    $(".menu-slider").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".reviews-slider").slick({
        dots: !1,
        infinite: !0,
        centerMode: !0,
        variableWidth: !0,
        adaptiveHeight: !0,
        speed: 400,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>'
    }), $(".chef-slider").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".gallery-cat ul").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        rows: 1,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>',
        responsive: [{
            breakpoint: 1024,
             rows: 1,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 767,
             rows: 1,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
             rows: 1,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $("[data-fancybox]").fancybox({
        buttons: ["close"],
        hash: !1,
        arrows: !0,
        btnTpl: {
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        }
    })
});