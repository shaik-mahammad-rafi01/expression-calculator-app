import { re } from "mathjs"
import { addition, subtraction, multiplication, division, modulus, powercalculation } from "../src/expression_calculator"
describe("Basic Operations", () => {

    test("addition of 2 numbers", () => {
        expect(addition(2, 1)).toBe(3)
    })

    test("add a positive and a negative number",()=>{
        expect(addition(5, -2)).toBe(3);
    });

    test("subraction of 2 numbers", () => {
        expect(subtraction(3, 1)).toBe(2)
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

