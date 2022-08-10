const search = document.querySelector(".search");
const input = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});