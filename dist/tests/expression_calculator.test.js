"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_calculator_1 = require("../src/expression_calculator");
const expression_calculator_2 = require("../src/expression_calculator");
const expression_calculator_3 = require("../src/expression_calculator");
const expression_calculator_4 = require("../src/expression_calculator");
describe("Basic Operations", () => {
    test("addition of 2 numbers", () => {
        expect((0, expression_calculator_3.addition)(2, 1)).toBe(3);
    });
    test("add a positive and a negative number", () => {
        expect((0, expression_calculator_3.addition)(5, -2)).toBe(3);
    });
    test("Add 2 negative numbers", () => {
        expect((0, expression_calculator_3.addition)(-2, -4)).toBe(-6);
    });
    test("add decimal numbers", () => {
        expect((0, expression_calculator_3.addition)(2.1, 3.2)).toBeCloseTo(5.3);
    });
    test("add zero and number", () => {
        expect((0, expression_calculator_3.addition)(0, 2)).toBe(2);
    });
    test("add number and zero", () => {
        expect((0, expression_calculator_3.addition)(2, 0)).toBe(2);
    });
    test("subraction of 2 numbers", () => {
        expect((0, expression_calculator_3.subtraction)(3, 1)).toBe(2);
    });
    test("subtract big number from small number", () => {
        expect((0, expression_calculator_3.subtraction)(2, 5)).toBe(-3);
    });
    test("subtraction of decimal numbers", () => {
        expect((0, expression_calculator_3.subtraction)(5.1, 2.1)).toBeCloseTo(3.0);
    });
    test("Multiplication of 2 numbers", () => {
        expect((0, expression_calculator_3.multiplication)(2, 3)).toBe(6);
    });
    test("Division of 2 numbers", () => {
        expect((0, expression_calculator_3.division)(4, 2)).toBe(2);
    });
    test("division by zero", () => {
        expect(() => (0, expression_calculator_3.division)(2, 0)).toThrow("can not divide by zero");
    });
    test("Modulus", () => {
        expect((0, expression_calculator_3.modulus)(5, 2)).toBe(1);
    });
    test("power calculation", () => {
        expect((0, expression_calculator_3.powercalculation)(2, 2)).toBe(4);
    });
});
describe("scientific operaions", () => {
    test('square root of a number', () => {
        expect((0, expression_calculator_2.squareroot)(4)).toBe(2);
    });
    test("square root of 0 is 0", () => {
        expect((0, expression_calculator_2.squareroot)(0)).toBe(0);
    });
    test("show error when calculate negative sqrt", () => {
        expect(() => (0, expression_calculator_2.squareroot)(-12)).toThrow("number must be positive");
    });
    test("factorial of a number", () => {
        expect((0, expression_calculator_1.factorial)(5)).toBe(120);
    });
    test("factorial of 0 should be 1", () => {
        expect((0, expression_calculator_1.factorial)(0)).toBe(1);
    });
    test("factorial of 1 should be 1", () => {
        expect((0, expression_calculator_1.factorial)(1)).toBe(1);
    });
    test("throws error when number is negative", () => {
        expect(() => (0, expression_calculator_1.factorial)(-2)).toThrow("Number must be positive");
    });
});
describe("Expression evaluator test cases", () => {
    test("addiion of numbers", () => {
        expect((0, expression_calculator_4.mathExpressionCalculator)('2+3')).toBe(5);
    });
    test("expression with paranthesis", () => {
        expect((0, expression_calculator_4.mathExpressionCalculator)("10 + (2*4)")).toBe(18);
    });
    test("should throw an error for invalid syntax", () => {
        expect(() => (0, expression_calculator_4.mathExpressionCalculator)("2+*3")).toThrow("Invalid input");
    });
    test("should throw error for invalid expression", () => {
        expect(() => (0, expression_calculator_4.mathExpressionCalculator)("rafi shaik")).toThrow("Invalid input");
    });
});
