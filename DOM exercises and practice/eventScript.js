// Event Listeners

// element.addEventListener("click", function)

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//     alert('I also love Js');
// }

// buttonTwo.addEventListener("click", alertBtn);

// // Mouse Over
//  const newBackgroundColor = document.querySelector('.box-3');
//  function changeBgColor(e) {
//     // newBackgroundColor.style.backgroundColor = "blue";
//     console.log(e.target.style.background);
//     e.target.style.background = "blue";
//  }

//  newBackgroundColor.addEventListener("click", changeBgColor);
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.classList);
    })
})
