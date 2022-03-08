// Declaring the variables that will contain a and b
let firstNumber = []
let secondNumber = []
let afterOperator = false
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
}})
btnOne.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("1");
        display.textContent = firstNumber.join("");
}})
btnTwo.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("2");
        display.textContent = firstNumber.join("");
}})
btnThree.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("3");
        display.textContent = firstNumber.join("");
}})
btnFour.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("4");
        display.textContent = firstNumber.join("");
}})
btnFive.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("5");
        display.textContent = firstNumber.join("");
}})
btnSix.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("6");
        display.textContent = firstNumber.join("");
}})
btnSeven.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("7");
        display.textContent = firstNumber.join("");
}})
btnEight.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("8");
        display.textContent = firstNumber.join("");
}})
btnNine.addEventListener("click", () => {
    if (afterOperator === false) {
        firstNumber.push("9");
        display.textContent = firstNumber.join("");
}})