const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = ["Sunday", "Monday", "Tueasday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode(){
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark")
    
    if(htmlElement.classList.contains("dark")){
        toggle.innerText = "Light Mode"
    }else{
        toggle.innerText = "Dark Mode"
    }
}

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours()
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourElement.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock + scale(minutes, 0, 59, 0, 1)) * 30}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${(minutes + scale(seconds, 0, 59, 0, 1)) * 6}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

    timeElement.innerText = `${hoursForClock < 10 ? "0" + hoursForClock : hoursForClock}:${minutes < 10 ? "0" + minutes : minutes} ${hours < 12 ? "AM" : "PM"}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in1, in2, out1, out2) => {
    return (num - in1) * (out2 - out1) / (in2 - in1) + out1
}

setTime();

setInterval(setTime, 1000)