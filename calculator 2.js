let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let screen = document.querySelector("#screen");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// For Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (screen.innerHTML == "0") {
      screen.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    screen.innerHTML += value;
  });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
let allInputs = screen.innerHTML;

screen.innerHTML = evaluate(allInputs).toFixed(4);

console.log(evaluate(allInputs));
})

// Clear all Inputs
clearBtn.addEventListener('click', ()=> {
    screen.innerHTML = "0";
})
