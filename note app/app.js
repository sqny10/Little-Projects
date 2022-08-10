const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote("dsfsd"));

function addNewNote(text = ""){
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
        <div class="tools">
            <button class="edit" title="Edit" aria-label="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete" title="Delete" aria-label="Delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>`;

        const editBtn = noteDiv.querySelector(".edit");
        const deleteBtn = noteDiv.querySelector(".delete");
        const main = noteDiv.querySelector(".main");
        const textArea = noteDiv.querySelector("textarea");

        textArea.value = text;
        main.innerText = marked(text);

        deleteBtn.addEventListener("click", () => {
            noteDiv.remove();
        })

        editBtn.addEventListener("click", () => {
            main.classList.toggle("hidden");
            textArea.classList.toggle("hidden");
        })

        document.body.appendChild(noteDiv);
}