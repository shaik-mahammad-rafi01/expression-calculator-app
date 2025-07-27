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