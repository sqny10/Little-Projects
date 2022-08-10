const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length - 1){
        currentActive = circles.length;
        next.disabled = true;
    }

    update();

    prev.disabled = false;
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive <= 1){
        currentActive = 1;
        prev.disabled = true;
    }

    update();

    next.disabled = false;
});

function setProgressWidth(){
}

function update(){
    progress.style.width = ((currentActive - 1) * 100 / (circles.length - 1)) + '%';

    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });
}