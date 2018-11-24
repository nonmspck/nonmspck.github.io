$(document).ready(function () {
    var isMobile = {

        Android: function() {

            return navigator.userAgent.match(/Android/i);

        },

        BlackBerry: function() {

            return navigator.userAgent.match(/BlackBerry/i);

        },

        iOS: function() {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i);

        },

        Opera: function() {

            return navigator.userAgent.match(/Opera Mini/i);

        },

        Windows: function() {

            return navigator.userAgent.match(/IEMobile/i);

        },

        any: function() {

            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

        }

    };

    if (isMobile.any()) {
        $('body').addClass('touch');
    }
});

"use strict";
"use strict";
"use strict";

$(document).ready(function () {
    $(".headerNav__btn-open").click(function (event) {
        event.preventDefault();
        $("html").addClass("disableScrolling");
        $(".headerNav__btn-open").addClass("headerNav__btn-jsHide");
        $(".headerNav__btn-close").removeClass("headerNav__btn-jsHide");
        $(".headerRoof").removeClass("headerRoof-jsHide");
        $(".headerNav__navWrap").removeClass("headerNav__navWrap-jsHide");
        $(".headerNav__overlay").removeClass("headerNav__overlay-jsHide");
    });

    $(".headerNav__btn-close").click(function (event) {
        event.preventDefault();
        $("html").removeClass("disableScrolling");
        $(".headerNav__btn-close").addClass("headerNav__btn-jsHide");
        $(".headerNav__btn-open").removeClass("headerNav__btn-jsHide");
        $(".headerRoof").addClass("headerRoof-jsHide");
        $(".headerNav__navWrap").addClass("headerNav__navWrap-jsHide");
        $(".headerNav__overlay").addClass("headerNav__overlay-jsHide");

        if (!$(".headerNav__subList").hasClass("headerNav__subList-jsHide")) {
            $(".headerNav__subList").addClass("headerNav__subList-jsHide");
            $(".headerNav__navLink-popupStones").removeClass("headerNav__navLink-open");
        }
    });

    $(".headerNav__overlay").click(function (event) {
        event.preventDefault();
        $("html").removeClass("disableScrolling");
        $(".headerNav__btn-close").addClass("headerNav__btn-jsHide");
        $(".headerNav__btn-open").removeClass("headerNav__btn-jsHide");
        $(".headerRoof").addClass("headerRoof-jsHide");
        $(".headerNav__navWrap").addClass("headerNav__navWrap-jsHide");
        $(".headerNav__overlay").addClass("headerNav__overlay-jsHide");

        if (!$(".headerNav__subList").hasClass("headerNav__subList-jsHide")) {
            $(".headerNav__subList").addClass("headerNav__subList-jsHide");
            $(".headerNav__navLink-popupStones").removeClass("headerNav__navLink-open");
        }
    });

    $(".headerNav__navLink-popupStones").click(function (event) {
        event.preventDefault();

        if ($(".headerNav__subList").hasClass("headerNav__subList-jsHide")) {
            $(".headerNav__subList").removeClass("headerNav__subList-jsHide");
            $(".headerNav__navLink-popupStones").addClass("headerNav__navLink-open");
        } else if (!$(".headerNav__subList").hasClass("headerNav__subList-jsHide")) {
            $(".headerNav__subList").addClass("headerNav__subList-jsHide");
            $(".headerNav__navLink-popupStones").removeClass("headerNav__navLink-open");
        }
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.headerRoof').addClass('headerRoof-jsScroll');
        $('.headerNav__logoLink').addClass('headerNav__logoLink-jsScroll');
        $('.headerNav__inner').addClass('headerNav__inner-jsScroll');
        $('.headerNav__overlay').addClass('headerNav__overlay-jsScroll');
        $('.headerNav__navWrap').addClass('headerNav__navWrap-jsScroll');
        $('.headerNav__logoWrap').addClass('headerNav__logoWrap-jsScroll');
        $('body').addClass('bodyJsScroll');
    } else {
        $('.headerRoof').removeClass('headerRoof-jsScroll');
        $('.headerNav__logoLink').removeClass('headerNav__logoLink-jsScroll');
        $('.headerNav__inner').removeClass('headerNav__inner-jsScroll');
        $('.headerNav__overlay').removeClass('headerNav__overlay-jsScroll');
        $('.headerNav__navWrap').removeClass('headerNav__navWrap-jsScroll');
        $('.headerNav__logoWrap').removeClass('headerNav__logoWrap-jsScroll');
        $('body').removeClass('bodyJsScroll');
    }
});
"use strict";