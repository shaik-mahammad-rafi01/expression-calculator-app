import { evaluate} from "mathjs";

export function addition(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber
}
export function subtraction(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
}
export function multiplication(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
}
export function division(firstNumber: number, secondNumber: number): number {
    if(secondNumber === 0 ){
        throw new Error("can not divide by zero")
    }
    return firstNumber / secondNumber;
    
}
export function modulus(firstNumber: number, secondNumber: number): number {
    return firstNumber % secondNumber;
}
export function powercalculation(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber;
}

export function squareroot(number: number): number {
    if (number < 0) {
        throw new Error("number must be positive");
    }
    return Math.sqrt(number);
}

export function factorial(number: number): number {
    if (number < 0) {
        throw new Error("Number must be positive")
    }
    else if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1)
}

export function mathExpressionCalculator(expression: string): number {
    try {
        const result = evaluate(expression);

        return result;
        
    } catch (err) {
        throw new Error("Invalid expression");
    }
}