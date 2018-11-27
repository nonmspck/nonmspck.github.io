var $articlesSlider = $(".revsSlider");

$articlesSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    focusOnSelect: true,
    infinite: false,
    prevArrow: ".revsSliderSection__btn-prev",
    nextArrow: ".revsSliderSection__btn-next"
});
