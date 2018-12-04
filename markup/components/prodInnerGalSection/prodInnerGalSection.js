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

var largeImg_1 = document.getElementById('jsLargeImg-1');
var largeImgLink_1 = document.getElementById('jsLargeImgLink-1');

var thumbs_1 = document.getElementById('jsThumbs-1');

thumbs_1.onclick = function(e) {
    var target = e.target;

    for (var count = 0; count < thumbs_1.querySelectorAll("*").length; count ++) {
        thumbs_1.querySelectorAll("*").item(count).classList.remove("prodInnerGalSlider__imgThumbLink-checked")
    }

    while (target != this) {
        if (target.nodeName == 'A') {
            target.classList.add("prodInnerGalSlider__imgThumbLink-checked");
        showThumbnail(target.href, target.title);
        return false;
    }

    target = target.parentNode;
    }

}

function showThumbnail(href, title) {
    largeImg_1.src = href;
    largeImg_1.alt = title;
    largeImgLink_1.href = href;
}