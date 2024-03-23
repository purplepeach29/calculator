const display = document.querySelector(".display")
const allNumbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const equalsBtn = document.querySelector(".equals")
const percentBtn = document.querySelector(".percentage")
const toggleNegBtn = document.querySelector(".toggle-neg")

let operandOne = 0
let operandTwo = undefined
let operator = undefined

function clearAll() {
    display.textContent = 0
    operandOne = undefined
    operandTwo = undefined
    operator = undefined
    bothOperatorsPresent = false
}

function appendTextContent(e) {
    display.textContent = display.textContent + e.target.textContent
}

function getDisplayNumber() {
    return Number(display.textContent)
}