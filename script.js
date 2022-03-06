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
// Targeting the buttons for manipulation
const btnZero = document.querySelector("#0")
const btnOne = document.querySelector("#1")
const btnTwo = document.querySelector("#2")
const btnThree = document.querySelector("#3")
const btnFour = document.querySelector("#4")
const btnFive = document.querySelector("#5")
const btnSix = document.querySelector("#6")
const btnSeven = document.querySelector("#7")
const btnEight = document.querySelector("#8")
const btnNine = document.querySelector("#9")
const btnClear = document.querySelector("#clear")
const btnDot = document.querySelector("#.")
const btnMultiply = document.querySelector("#*")
const btnDivide = document.querySelector("#/")
const btnSubtract = document.querySelector("#-")
const btnAdd = document.querySelector("#+")
const btnEquals = document.querySelector("#=")

// event listeners for each button to change the display and store the value