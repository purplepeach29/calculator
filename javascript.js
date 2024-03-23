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

function evaluate() {
    /**
     * If evaluate is being called, means that we have two operands and
     * an operator. All it should do it set the display / current number to 
     * what it evaluated to then reset 
     */
        let result;
        let dividedByZero = false
        if (operandTwo && !operandOne) {
            operandOne = 0;
        }
        if (!operandTwo) {
            operandTwo = getDisplayNumber()
        }
        if (operator == "+") {
            result = operandOne + operandTwo
        } else if (operator == "-") {
            result = operandOne - operandTwo
        } else if (operator == "*") {
            result = operandOne * operandTwo
        } else if (operator == "/") {
            if (operandTwo == 0) {
                display.textContent = "Get real."
                dividedByZero = true
            } else {
                result = operandOne / operandTwo
            }
        }
        if (dividedByZero) {
            display.textContent = "Get real."
            operandOne = 0
            operandTwo = undefined
            operator = undefined
        } else {
            display.textContent = result
            operandOne = getDisplayNumber()
        }
}