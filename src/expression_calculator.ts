export function addition(a:number,b:number){
    return a+b
}
export function subtraction(x:number, y:number):number{
    return x - y;
}
export function multiplication(x:number,y:number):number{
    return x*y;
}
export function division(x:number,y:number):number{
    return x/y;
}
export function modulus(x:number,y:number):number{
    return x % y;
}
export function powercalculation(x:number, y:number):number{
    return x**y;
}

export function squareroot(n: number): number {
  if (n < 0) {
    throw new Error("number must be positive");
  }
  return Math.sqrt(n);
}

export function factorial(num:number):number{
    if(num < 0){
        throw new Error("Number must be positive")
    }
    else if(num === 0 || num ===1 ){
        return 1;
    }
    return num * factorial(num-1)
}