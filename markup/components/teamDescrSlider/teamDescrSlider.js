var $teamSlider = $(".teamSlider");

$teamSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    draggable: false,
    touchMove: false,
    asNavFor: ".headSlider",
    fade: true,
    adaptiveHeight: true
});

var $teamHeadSlider = $(".headSlider");

$teamHeadSlider.slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: false,
    focusOnSelect: true,
    arrows: true,
    asNavFor: ".teamSlider",
    variableWidth: true,
    prevArrow: ".teamDescrSlider__btn-prev",
    nextArrow: ".teamDescrSlider__btn-next",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
            }
        }
    ]
});
