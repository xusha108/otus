import readline from "readline-sync";
import { isNum, parser } from "./parser";
import { isOperator, Operator } from "./mathOperators";
import { calculate } from "./calculate";

export function main(): void {
  const enterStr: string = readline.question("Enter math expression: \n");
  const parserStr = parser(enterStr);

  const isValidInput: boolean =
    isNum(parserStr[0]) && isOperator(parserStr[1]) && isNum(parserStr[2]);

  if (isValidInput) {
    const firstNum = parseInt(parserStr[0]);
    const secondNum = parseInt(parserStr[2]);
    const result = calculate(firstNum, parserStr[1] as Operator, secondNum);
    console.log(result);
  } else {
    console.log("Invalid input");
    main();
  }
}
main();
