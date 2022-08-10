const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes)
document.addEventListener("DOMContentLoaded", checkboxes);

function checkboxes(){
    boxes.forEach(box => {
        if((box.getBoundingClientRect().top + box.getBoundingClientRect().height + 20) < window.innerHeight){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}