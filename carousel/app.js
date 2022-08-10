const imgsEl = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const carouselDiv = document.querySelector(".carousel");

let interval = setInterval(nextImage, 3000);
let transformX = 0;

rightBtn.addEventListener("click", nextImage);
leftBtn.addEventListener("click", prevImage);
carouselDiv.addEventListener("mouseenter", cancelSpin)
carouselDiv.addEventListener("mouseleave", startSpin);

function nextImage(){
    transformX -= 480

    if(transformX <= imgsEl.children.length * -480 ){
        transformX = 0;
    }

    imgsEl.style.transform = `translateX(${transformX}px)`;
};

function prevImage(){
    transformX += 480

    if(transformX > 0){
        transformX = (imgsEl.children.length - 1) * -480;
    }

    imgsEl.style.transform = `translateX(${transformX}px)`;
};

function cancelSpin(){
    clearInterval(interval);
};

function startSpin(){
    interval = setInterval(nextImage, 3000);
};