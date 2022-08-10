const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decrementBtn = document.getElementById("decrease");
const incrementtBtn = document.getElementById("increase");
const sizeText = document.getElementById("size");
const colorPick = document.getElementById("color");
const clearBtn = document.getElementById("clear");

let size = 20;
let color = "rgb(0, 0, 0)";
let isPressed = false;
let x;
let y;
colorPick.value = color;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

decrementBtn.addEventListener("click", () => {
    size--;

    if(size < 1){
        size = 1
    }

    sizeText.innerText = size;
})

incrementtBtn.addEventListener("click", () => {
    size++;

    if (size > 50){
        size = 50
    }

    sizeText.innerText = size;
})

colorPick.addEventListener("change", () => {
    color = colorPick.value;
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

