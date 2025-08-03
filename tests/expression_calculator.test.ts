import { factorial } from "../src/expression_calculator"
import { squareroot } from "../src/expression_calculator"
import { addition, subtraction, multiplication, division, modulus, powercalculation,mathExpressionCalculator } from "../src/expression_calculator"

describe("Basic Operations", () => {

    test("addition of 2 numbers", () => {
        expect(addition(2, 1)).toBe(3)
    })

    test("add a positive and a negative number",()=>{
        expect(addition(5, -2)).toBe(3);
    });
    test("Add 2 negative numbers",()=>{
        expect(addition(-2,-4)).toBe(-6)
    })
    test("add decimal numbers",()=>{
        expect(addition(2.1,3.2)).toBeCloseTo(5.3)
    })
    test("add zero and number",()=>{
        expect(addition(0,2)).toBe(2)
    })
    test("add number and zero",()=>{
        expect(addition(2,0)).toBe(2)
    })
    test("subraction of 2 numbers", () => {
        expect(subtraction(3, 1)).toBe(2)
    })
    test("subtract big number from small number",()=>{
        expect(subtraction(2,5)).toBe(-3)
    })

    test("subtraction of decimal numbers",()=>{
        expect(subtraction(5.1,2.1)).toBeCloseTo(3.0)
    })
    test("Multiplication of 2 numbers", () => {
        expect(multiplication(2, 3)).toBe(6)
    })

    test("Division of 2 numbers", () => {
        expect(division(4, 2)).toBe(2)
    })
    test("division by zero", () => {
        expect(() => division(2, 0)).toThrow("can not divide by zero");
    })
    test("Modulus", () => {
        expect(modulus(5, 2)).toBe(1);
    })
    test("power calculation", () => {
        expect(powercalculation(2, 2)).toBe(4)
    })
})

describe("scientific operaions",()=>{
    test('square root of a number',() =>{
    expect(squareroot(4)).toBe(2);
    });

    test("square root of 0 is 0",()=>{
        expect(squareroot(0)).toBe(0)
    })

    test("show error when calculate negative sqrt",()=>{
        expect(()=>squareroot(-12)).toThrow("number must be positive")
    })

    test("factorial of a number",()=>{
        expect(factorial(5)).toBe(120)
    })

    test("factorial of 0 should be 1",()=>{
        expect(factorial(0)).toBe(1)
    })

    test("factorial of 1 should be 1",()=>{
        expect(factorial(1)).toBe(1)
    })
    test("throws error when number is negative",()=>{
        expect(()=>factorial(-2)).toThrow("Number must be positive")
    })
})

describe("Expression evaluator test cases",()=>{

    test("should return correct output value",()=>{
        expect(mathExpressionCalculator("2+3")).toEqual(5)
    })
    test("invalid expression",()=>{
        expect(()=>mathExpressionCalculator("((9-1)")).toThrow("Invalid expression")
    })
    test("should throw for wrong expression", () => {
        expect(() => mathExpressionCalculator("rafi")).toThrow("Invalid expression");
    });

})