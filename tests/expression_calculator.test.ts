import { addition } from "../src/expression_calculator"
describe("Basic Operations",()=>{

    test("addition of 2 numbers",()=>{
        expect(addition(2,1)).toBe(3)
    })
})

