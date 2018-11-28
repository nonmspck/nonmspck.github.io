var $approachDescr = $(".approachDescrSlider");

$approachDescr.slick({
    slidesToScroll: 1,
    slidesToShow: 1.3,
    infinite: false,
    focusOnSelect: true,
    draggable: false,
    asNavFor: ".approachHeadSlider",
    prevArrow: ".approachSliderSection__btn-prev",
    nextArrow: ".approachSliderSection__btn-next",
    responsive: [
        {
            breakpoint: 960,
            settings: {
                centerMode: false,
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

var $approachHead = $(".approachHeadSlider");

$approachHead.slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    asNavFor: ".approachDescrSlider",
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
            }
        }
    ]
});

