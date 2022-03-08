// Declaring the variables that will contain a and b
let firstNumber = []
let secondNumber = []
let afterOperator = false
let selectedOperator = ""
let firstSum = true
let firstInt = 0; 
let secondInt = 0;
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
    }else {
        return alert("That didn't work")
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
}})
// event listeners for the operator buttons

btnMultiply.addEventListener("click", () => {
    afterOperator = true;
    selectedOperator = "*";
})
btnDivide.addEventListener("click", () => {
    afterOperator = true;
    selectedOperator = "/";
})
btnSubtract.addEventListener("click", () => {
    afterOperator = true;
    selectedOperator = "-";
})
btnAdd.addEventListener("click", () => {
    afterOperator = true;
    selectedOperator = "+";
})
btnEquals.addEventListener("click", ()=>{
    // extract the numbers from the arrays and parse as floats
    if (firstSum == true){ //run this if it is the first operation
    let firstNumberJoined = firstNumber.join("")
    let secondNumberJoined = secondNumber.join("")
    firstInt = parseFloat(firstNumberJoined)
    secondInt = parseFloat(secondNumberJoined)
    let operator = selectedOperator
    let a = firstInt
    let b = secondInt
    display.textContent = operate(a,operator,b)
    let result = operate(a,operator,b)   
    firstInt = result; 
    secondInt = 0
    firstSum = false
    console.log(firstInt, secondInt, display.textContent)
    }else if (firstSum == false) { //run this if not the first operation
        let a = firstInt
        secondInt = secondNumber.join("")
        let operator = selectedOperator
        display.textContent = operate(a,operator,b)
        // this bit is not working
    }
})
// First operation is working. Need to sort following operations. ?is the second number an array? Do I need to join the second number again?
// How can I get it to work so 12 + 7  - 5 * 3 - each operator after the first operator (+) returns the sum
// !!The orignial arrays (firstNumber and secondNumber) need to be set back to empty on equals click function
// When afterOperator = true (ie, after the first operation) - the result variable needs to be used in place of firstNumber[] because that array is now empty.
// The secondNumber[] will need to be joined again and then parsed as the new secondInt for operation
// Further operations - each operator click will also need to call operate() function to cumulatively operate 


