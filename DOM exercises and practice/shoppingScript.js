const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", btnClicked);
button.addEventListener("keydown", btnClicked);

function btnClicked () {
    const myItem = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const dlt = document.createElement("button");
    li.appendChild(span);
    li.appendChild(dlt);

    span.textContent = myItem;
    dlt.textContent = "Delete";
    ul.appendChild(li);

    
    dlt.addEventListener("click", () => {
        li.remove();
    })
    input.focus();
}

