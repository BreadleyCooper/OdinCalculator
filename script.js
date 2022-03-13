// Declaring the variables
//empty arrays that will hold the first and second integers
let firstNumber = [] 
let secondNumber = []
let afterOperator = false
let selectedOperator = null
let firstSum = true
let firstInt = null; 
let secondInt = null;
let runningResult = null;
const display = document.querySelector(".display");
// a function to prevent the display spilling over*not working
function checkDisplayLength () {
    let displayValue = display.textContent 
    if (displayValue.length > 9) {
    display.textContent = displayValue.substring(0,9)
}}

function disableDotBtn () {
    btnDot.disabled = true;
}
function enableDotBtn () {
    btnDot.disabled = false
}
function firstOperation () {
     //run this if it is the first operation
    if (secondNumber.length !== 0) {
    let firstNumberJoined = firstNumber.join("")
    let secondNumberJoined = secondNumber.join("")
    firstInt = parseFloat(firstNumberJoined)
    secondInt = parseFloat(secondNumberJoined)
    let operator = selectedOperator
    let a = firstInt
    let b = secondInt
    if (b == 0 && operator == "/") {
        display.textContent = "Good try";
        runningResult = null;
        firstInt = null
        secondInt = null
        firstNumber = []
        secondNumber = []
        firstSum = true
        afterOperator = false
        selectedOperator = null
    } else 
    display.textContent = operate(a,operator,b)
    runningResult = operate(a,operator,b)   
    firstInt = runningResult; 
    secondInt = 0
    firstSum = false
    // clear the arrays for the next operation
    firstNumber = [] 
    secondNumber = []
    }
    checkDisplayLength ()
}
function secondOperation (){
    if (selectedOperator !== null && secondNumber.length !== 0) {
    let a = runningResult
    let secondNumberJoined = secondNumber.join("")
    let b = parseFloat(secondNumberJoined)
    secondNumber =[]
    let operator = selectedOperator
    if (b == 0 && operator == "/") {
        display.textContent = "Good try";
        runningResult = null;
        firstInt = null
        secondInt = null
        firstNumber = []
        secondNumber = []
        firstSum = true
        afterOperator = false
        selectedOperator = null
    } else 
    display.textContent = operate(a,operator,b)
    runningResult = operate(a,operator,b)
}
checkDisplayLength ()
}


// declaring operator functions
function add(a,b){
    return a + b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
// declaring the operate function
function operate(a, operator, b){
    if (operator == "+") {
        return add(a,b)
    }else if (operator == "-"){
        return subtract(a,b)
    }else if (operator == "*") {
        return multiply(a,b)
    }else if (operator == "/") {
        return divide(a,b)
}}
// Targeting the display div for manipluation

// Targeting the buttons for manipulation
const btnZero = document.querySelector("#zero")
const btnOne = document.querySelector("#one")
const btnTwo = document.querySelector("#two")
const btnThree = document.querySelector("#three")
const btnFour = document.querySelector("#four")
const btnFive = document.querySelector("#five")
const btnSix = document.querySelector("#six")
const btnSeven = document.querySelector("#seven")
const btnEight = document.querySelector("#eight")
const btnNine = document.querySelector("#nine")
const btnClear = document.querySelector("#clear")
const btnDot = document.querySelector("#dot")
const btnMultiply = document.querySelector("#multiply")
const btnDivide = document.querySelector("#divide")
const btnSubtract = document.querySelector("#subtract")
const btnAdd = document.querySelector("#add")
const btnEquals = document.querySelector("#equals")

// event listeners for each button to change the display and store the value in the firstNumber and secondNumber variables
display.textContent = "0";


btnZero.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("0");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("0")
        display.textContent = secondNumber.join("");  
}checkDisplayLength ()
})
btnOne.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("1");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("1")
        display.textContent = secondNumber.join("");
}
checkDisplayLength ()})
btnTwo.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("2");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("2")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnThree.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("3");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("3")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnFour.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("4");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("4")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnFive.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("5");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("5")
        display.textContent = secondNumber.join("");
}
checkDisplayLength ()})
btnSix.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("6");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("6")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnSeven.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("7");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("7")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnEight.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("8");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("8")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnNine.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("9");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("9")
        display.textContent = secondNumber.join("");
}checkDisplayLength ()
})
btnDot.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push(".");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push(".")
        display.textContent = secondNumber.join("");
    }
    disableDotBtn ();
})
// event listeners for the operator buttons

btnMultiply.addEventListener("click", () => {
    if(afterOperator == true) {
        if (runningResult == null) {
            firstOperation()
        } else secondOperation()
    }
    afterOperator = true;
    selectedOperator = "*";
    enableDotBtn();
})
btnDivide.addEventListener("click", () => {
    if(afterOperator == true) {
        if (runningResult == null) {
            firstOperation()
        } else secondOperation()
    }
    afterOperator = true;
    selectedOperator = "/";
    enableDotBtn()
})
btnSubtract.addEventListener("click", () => {
    if(afterOperator == true) {
        if (runningResult == null) {
            firstOperation()
        } else secondOperation()
    }
    afterOperator = true;
    selectedOperator = "-";
    enableDotBtn();
})
btnAdd.addEventListener("click", () => {
    if(afterOperator == true) {
        if (runningResult == null) {
            firstOperation()
        } else secondOperation()
    }
    afterOperator = true;
    selectedOperator = "+";
    enableDotBtn();
})
btnEquals.addEventListener("click", ()=>{
    enableDotBtn();
    if (firstSum == true) {
        firstOperation();
    }else if (firstSum == false) { 
        secondOperation()
    }
})
btnClear.addEventListener("click", () =>{
    runningResult = null;
    display.textContent = "0"
    firstInt = null
    secondInt = null
    firstNumber = []
    secondNumber = []
    firstSum = true
    afterOperator = false
    selectedOperator = null
})
if (display.textContent.length > 9) {
    display.textContent = display.substring(0,8)
}
// need to implement rounding and maximum of 9 input length to fit in display