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
        display.textContent = "Good try"
    } else 
    display.textContent = operate(a,operator,b)
    runningResult = operate(a,operator,b)   
    firstInt = runningResult; 
    secondInt = 0
    firstSum = false
    // clear the arrays for the next operation
    firstNumber = [] 
    secondNumber = []
    console.log("first operation performed, firstInt is",firstInt,"secondInt is",secondInt)
    }}
function secondOperation (){
    if (selectedOperator !== null && secondNumber.length !== 0) {
    let a = runningResult
    let secondNumberJoined = secondNumber.join("")
    let b = parseFloat(secondNumberJoined)
    secondNumber =[]
    let operator = selectedOperator
    if (b == 0 && operator == "/") {
        display.textContent = "Good try"
    } else 
    display.textContent = operate(a,operator,b)
    runningResult = operate(a,operator,b)
    console.log(a,b)
}}


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
const display = document.querySelector(".display")
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
}})
btnOne.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("1");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("1")
        display.textContent = secondNumber.join("");
}})
btnTwo.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("2");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("2")
        display.textContent = secondNumber.join("");
}})
btnThree.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("3");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("3")
        display.textContent = secondNumber.join("");
}})
btnFour.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("4");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("4")
        display.textContent = secondNumber.join("");
}})
btnFive.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("5");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("5")
        display.textContent = secondNumber.join("");
}})
btnSix.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("6");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("6")
        display.textContent = secondNumber.join("");
}})
btnSeven.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("7");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("7")
        display.textContent = secondNumber.join("");
}})
btnEight.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("8");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("8")
        display.textContent = secondNumber.join("");
}})
btnNine.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("9");
        display.textContent = firstNumber.join("");
    }else if (afterOperator === true) {
        secondNumber.push("9")
        display.textContent = secondNumber.join("");
}})
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
// need to implement rounding and maximum of 9 input length to fit in display