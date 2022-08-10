const counters = document.querySelectorAll(".counter");

document.addEventListener("DOMContentLoaded", getCounters);

function getCounters(){
    
    counters.forEach(counter => {
        let start = 0;
        const target = parseInt(counter.dataset.target)
        const incrementAmount = target / 53

        const interval = setInterval(() => {
            counter.innerText = Math.floor(start);
            start += incrementAmount;

            if(start > target){
                clearInterval(interval);
                counter.innerText = target;
            }
        }, 1)
    })
}