const tagsElement = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)

    if(e.key === "Enter"){
        textarea.value = ""
        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    tagsElement.innerHTML = "";
    tags.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.innerText = tag;
        tagsElement.append(span)
    })
}

function randomSelect(){
    let times = 30;
    
    const interval = setInterval(() => {
        const tags = document.querySelectorAll(".tag");
        const randomTag = tags[Math.floor(Math.random() * tags.length)];

        highlight(randomTag);
        unhighlight(tags, randomTag);

        times -= 1;

        if(times === 0){
            console.log(123);
            clearInterval(interval)
        }
    } ,150);
    
}

function highlight(randomTag){
    randomTag.classList.add("highlight");
}

function unhighlight(tags, randomTag){
    tags.forEach(tag => {
        if(tag !== randomTag){
            tag.classList.remove("highlight");
        }
    })
}