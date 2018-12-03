var $remInnerGalControls = $(".remInnerGalControls__slider");

$remInnerGalControls.slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    arrows: true,
    draggable: false,
    speed: 1,
    asNavFor: ".remInnerGalSlider__slider",
    prevArrow: ".remInnerGalControls__btn-prev",
    nextArrow: ".remInnerGalControls__btn-next"
});

var $remInnerGalSlider = $(".remInnerGalSlider__slider");

$remInnerGalSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    draggable: true,
    fade: true,
    asNavFor: ".remInnerGalControls__slider"
});

lightbox.option({
    'disableScrolling': true
})