import { addition , subtraction , multiplication} from "../src/expression_calculator"
describe("Basic Operations",()=>{

    test("addition of 2 numbers",()=>{
        expect(addition(2,1)).toBe(3)
    })
    test("subraction of 2 numbers",()=>{
        expect(subtraction(3,1)).toBe(2)
    })
    test("Multiplication of 2 numbers",()=>{
        expect(multiplication(2,3)).toBe(6)
    })
})

