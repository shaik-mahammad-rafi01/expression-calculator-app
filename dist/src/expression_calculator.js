"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
exports.subtraction = subtraction;
exports.multiplication = multiplication;
exports.division = division;
exports.modulus = modulus;
exports.powercalculation = powercalculation;
exports.squareroot = squareroot;
exports.factorial = factorial;
exports.mathExpressionCalculator = mathExpressionCalculator;
const mathjs_1 = require("mathjs");
function addition(a, b) {
    return a + b;
}
function subtraction(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
function modulus(x, y) {
    return x % y;
}
function powercalculation(x, y) {
    return x ** y;
}
function squareroot(n) {
    if (n < 0) {
        throw new Error("number must be positive");
    }
    return Math.sqrt(n);
}
function factorial(num) {
    if (num < 0) {
        throw new Error("Number must be positive");
    }
    else if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
function mathExpressionCalculator(expression) {
    try {
        const result = (0, mathjs_1.evaluate)(expression);
        if (typeof result !== 'number') {
            throw new Error("Invalid expression");
        }
        return result;
    }
    catch (err) {
        throw new Error("Invalid input");
    }
}
