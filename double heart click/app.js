const loveMe = document.querySelector(".love-me");
const times = document.querySelector("#times");

let oneClick = 0;
let heartCounter = 0;

loveMe.addEventListener("click", (e) => {
    oneClick++;

    setTimeout(() => {
        oneClick = 0;
    }, 1000);

    if(oneClick > 1 && oneClick < 3){
        heartCounter++;
        times.innerText = heartCounter;
        createHeart(e);
    }else if(oneClick > 2){
        oneClick = 0;
    }
})

function createHeart(e){
    const posX = e.offsetX;
    const posY = e.offsetY;

    loveMe.innerHTML = `<i style="top:${posY}px; left:${posX}px;" class="fa-solid fa-heart"></i>`

    // const heart = document.createElement("i");
    // heart.className = "fa-solid fa-heart";
    // heart.style.top = `${posY}px`;
    // heart.style.left = `${posX}px`;

    // loveMe.append(heart);

    setTimeout(() => loveMe.innerHTML = "", 1000);
}