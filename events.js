// // Your code here
document.addEventListener("DOMContentLoaded",()=> {

    const redButton = document.querySelector("#red-input")
    console.log(redButton)
    const foo = event => {
        if (event.target.value === "red") {
            redButton.style.backgroundColor = "red";
        } else {
            // Reset background color if the input value is not "red"
            redButton.style.backgroundColor = "";
        }

    }
    redButton.addEventListener("input",foo)

   
    const documentaddItemButton = document.querySelector("#add-item");
    const fooTwo = () => {
        const documentUlTag = document.querySelector("ul");
        const documnetListaddTextarea = document.querySelector("#list-add");
        if (documnetListaddTextarea.value !== "") {
            const li = document.createElement("li");
            li.textContent = documnetListaddTextarea.value;
            documentUlTag.appendChild(li);
            documnetListaddTextarea.value = "";
        }
    }
    documentaddItemButton.addEventListener("click",fooTwo)


    const documentColorSelect = document.querySelector("#color-select");
    const fooTHree = () => {
        const documentColorSelectSection = documentColorSelect.parentNode;
        documentColorSelectSection.style.backgroundColor = documentColorSelect.value;
    }
    documentColorSelect.addEventListener("change",fooTHree)
   
    const documentRemoveEventListeners = document.querySelector("#remove-listeners");
    documentRemoveEventListeners.addEventListener("click" ,() =>{
        redButton.removeEventListener("input", foo)
        documentaddItemButton.removeEventListener("click", fooTwo)
        documentColorSelect.removeEventListener("change", fooTHree)

    


    })

})