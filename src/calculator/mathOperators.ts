export type ScalarOperationType = (first: number, second: number) => number;

export type Operator = "+" | "-" | "*" | "/";

export function isOperator(op: string): boolean {
  return op === "+" || op === "-" || op === "*" || op === "/";
}
