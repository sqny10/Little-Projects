const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", (e) => {
        panels.forEach(panel => {
            panel.className = "panel"
        });

        e.target.className = "panel active"
        console.log(e.target);
    })
})