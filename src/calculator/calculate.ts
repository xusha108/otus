import { Operator } from "./mathOperators";

export function calculate(
  firstNum: number,
  operator: Operator,
  secondNum: number
): number {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}
