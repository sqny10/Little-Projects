const loadingtext = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");

let load = 0;
let int = setInterval(blurring, 20);

function blurring(){
    load++

    if(load >= 100) {
        clearInterval(int);
        body.style.overflowY = "auto";
    };

    loadingtext.innerText = `${load} %`
    loadingtext.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in1, in2, out1, out2) => {
    return (num - in1) * (out2 - out1) / (in2 - in1) + out1
}

