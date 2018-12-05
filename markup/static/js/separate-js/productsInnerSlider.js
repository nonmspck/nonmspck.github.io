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
        showThumbnail_1(target.href, target.title);
        return false;
    }

    target = target.parentNode;
    }
    
    function showThumbnail_1(href, title) {
        largeImg_1.src = href;
        largeImg_1.alt = title;
        largeImgLink_1.href = href;
    }

}

var largeImg_2 = document.getElementById('jsLargeImg-2');
var largeImgLink_2 = document.getElementById('jsLargeImgLink-2');

var thumbs_2 = document.getElementById('jsThumbs-2');

thumbs_2.onclick = function(e) {
    var target = e.target;

    for (var count = 0; count < thumbs_2.querySelectorAll("*").length; count ++) {
        thumbs_2.querySelectorAll("*").item(count).classList.remove("prodInnerGalSlider__imgThumbLink-checked")
    }

    while (target != this) {
        if (target.nodeName == 'A') {
            target.classList.add("prodInnerGalSlider__imgThumbLink-checked");
        showThumbnail_2(target.href, target.title);
        return false;
    }

    target = target.parentNode;
    }
    
    function showThumbnail_2(href, title) {
        largeImg_2.src = href;
        largeImg_2.alt = title;
        largeImgLink_2.href = href;
    }

}

var largeImg_3 = document.getElementById('jsLargeImg-3');
var largeImgLink_3 = document.getElementById('jsLargeImgLink-3');

var thumbs_3 = document.getElementById('jsThumbs-3');

thumbs_3.onclick = function(e) {
    var target = e.target;

    for (var count = 0; count < thumbs_3.querySelectorAll("*").length; count ++) {
        thumbs_3.querySelectorAll("*").item(count).classList.remove("prodInnerGalSlider__imgThumbLink-checked")
    }

    while (target != this) {
        if (target.nodeName == 'A') {
            target.classList.add("prodInnerGalSlider__imgThumbLink-checked");
        showThumbnail_3(target.href, target.title);
        return false;
    }

    target = target.parentNode;
    }
    
    function showThumbnail_3(href, title) {
        largeImg_3.src = href;
        largeImg_3.alt = title;
        largeImgLink_3.href = href;
    }

}

var largeImg_4 = document.getElementById('jsLargeImg-4');
var largeImgLink_4 = document.getElementById('jsLargeImgLink-4');

var thumbs_4 = document.getElementById('jsThumbs-4');

thumbs_4.onclick = function(e) {
    var target = e.target;

    for (var count = 0; count < thumbs_4.querySelectorAll("*").length; count ++) {
        thumbs_4.querySelectorAll("*").item(count).classList.remove("prodInnerGalSlider__imgThumbLink-checked")
    }

    while (target != this) {
        if (target.nodeName == 'A') {
            target.classList.add("prodInnerGalSlider__imgThumbLink-checked");
        showThumbnail_4(target.href, target.title);
        return false;
    }

    target = target.parentNode;
    }
    
    function showThumbnail_4(href, title) {
        largeImg_4.src = href;
        largeImg_4.alt = title;
        largeImgLink_4.href = href;
    }

}