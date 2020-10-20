var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'data/1.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'data/2.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'data/3.jpg';

(function nextImage(element = 'img') {
    var img = document.getElementById(element);

        SetTime(imgArray[1].src, 1500);
        SetTime(imgArray[2].src, 3000);
        SetTime(imgArray[0].src, 4500);
        SetTime(imgArray[1].src, 6000);
        SetTime(imgArray[2].src, 7500);
        SetTime(imgArray[0].src, 9000);

        return;
})();

function SetTime(src, time) {
    setTimeout(() => {
        img.src = src;
    }, time);
}
