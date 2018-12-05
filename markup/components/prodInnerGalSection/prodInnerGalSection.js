var $prodInnerGalControls = $(".prodInnerGalControls__slider");

$prodInnerGalControls.slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    arrows: true,
    draggable: false,
    speed: 1,
    asNavFor: ".prodInnerGalSlider__slider",
    prevArrow: ".prodInnerGalControls__btn-prev",
    nextArrow: ".prodInnerGalControls__btn-next"
});

var $prodInnerGalSlider = $(".prodInnerGalSlider__slider");

$prodInnerGalSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    draggable: true,
    fade: true,
    asNavFor: ".prodInnerGalControls__slider"
});

lightbox.option({
    'disableScrolling': true
 })

