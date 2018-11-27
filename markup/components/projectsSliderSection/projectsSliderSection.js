var $projectsSlider = $(".projectsSlider__inner");

$projectsSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    centerPadding: '112.5px',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: ".projectsSlider__btn-prev",
    nextArrow: ".projectsSlider__btn-next",
    responsive: [
        {
            breakpoint: 960,
            settings: {
                centerPadding: "42.5px"
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: "40px"
            }
        }
    ]
});
