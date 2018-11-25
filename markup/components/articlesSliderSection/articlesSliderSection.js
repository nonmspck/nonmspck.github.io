var $articlesSlider = $(".articlesSlider__sliderInner");

$articlesSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow: ".articlesSlider__btn-prev",
    nextArrow: ".articlesSlider__btn-next",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
