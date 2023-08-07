// nav change start
var phoneMenu = document.querySelector(".phone-menu")
var navList = document.querySelector("nav")
phoneMenu.onclick = function () {
    console.log(navList.style.display)
    if (navList.style.display == undefined || navList.style.display == '') {
        navList.style.display = 'block'
    } else {
        navList.style.display = ''
    }
}
// nav change end
// carousel change start
var imgArr = ['images/carousel01.jpg', 'images/carousel02.jpg', 'images/carousel03.jpg']
var count = 0;
var carousel = document.getElementById('carousel');
var points = document.getElementById('points');
var points = points.children;
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
for (var i = 0; i < points.length; i++) {
    points[i].index = i;
    points[i].onclick = function () {
        change(this.index);
    }
}
leftBtn.onclick = function () {
    count--;
    if (count == -1) {
        count = imgArr.length - 1;
    }
    change(count);
}
rightBtn.onclick = function () {
    count++;
    if (count == imgArr.length) {
        count = 0;
    }
    change(count);
}

function change(index) {
    count = index;
    carousel.style.backgroundImage = `url(${imgArr[count]})`;
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'normal';
    }
    points[index].className = 'shover';
}
var carouselTime = setInterval("rightBtn.onclick()", 2000);
carousel.onmouseover = function () {
    clearInterval(carouselTime);
}
carousel.onmouseout = function () {
    carouselTime = setInterval("rightBtn.onclick()", 2000);
}
// carousel change end