"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const expression_calculator_1 = require("../src/expression_calculator");
const prompt = (0, prompt_sync_1.default)();
while (true) {
    console.log("\n Welcome to Ravi's CLI Calculator");
    console.log(`Choose an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
6. Power
7. Square root
8. Factorial
9. Evaluate expression
0. Exit`);
    const choice = prompt("Enter your choice :: ");
    if (choice === '0') {
        console.log("Exiting calculator. Bye!");
        break;
    }
    switch (choice) {
        case "1": {
            const a = parseFloat(prompt("enter first number: "));
            const b = parseFloat(prompt("enter second number: "));
            console.log("Addition result is : ", (0, expression_calculator_1.addition)(a, b));
            break;
        }
        case "2": {
            const a = parseFloat(prompt("Enter first number: "));
            const b = parseFloat(prompt("Enter second number: "));
            console.log("Subtraction result is: ", (0, expression_calculator_1.subtraction)(a, b));
            break;
        }
        case "3": {
            const a = parseFloat(prompt("Enter first number: "));
            const b = parseFloat(prompt("Enter second number: "));
            console.log("multiplication result :", (0, expression_calculator_1.multiplication)(a, b));
            break;
        }
        case "4": {
            const a = parseFloat(prompt("Enter dividend value: "));
            const b = parseFloat(prompt("Enter divisor value: "));
            if (b === 0) {
                console.log("cannot divide by zero");
            }
            else {
                console.log("result:", (0, expression_calculator_1.division)(a, b));
            }
            break;
        }
        case "5": {
            const a = parseFloat(prompt("Enter first number: "));
            const b = parseFloat(prompt("Enter second number: "));
            console.log("result:", (0, expression_calculator_1.modulus)(a, b));
            break;
        }
        case "6": {
            const base = parseFloat(prompt("Enter base: "));
            const exponent = parseFloat(prompt("Enter exponent: "));
            console.log("power result:", (0, expression_calculator_1.powercalculation)(base, exponent));
            break;
        }
        case "7": {
            const n = parseFloat(prompt("Enter number: "));
            if (n < 0) {
                console.log("Number must be positive");
            }
            else {
                console.log("square root value is:", (0, expression_calculator_1.squareroot)(n));
            }
            break;
        }
        case "8": {
            const n = parseInt(prompt("Enter number: "));
            if (n < 0) {
                console.log("Number must be positive");
            }
            else {
                console.log("result:", (0, expression_calculator_1.factorial)(n));
            }
            break;
        }
        case "9": {
            const expression = prompt("Enter a math expression: ");
            const result = (0, expression_calculator_1.mathExpressionCalculator)(expression);
            console.log("Result:", result);
            break;
        }
    }
}
