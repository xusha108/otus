import { isOperator } from "./mathOperators";

test("isOperator should return true", () => {
  expect(isOperator("+")).toBeTruthy();
  expect(isOperator("-")).toBeTruthy();
  expect(isOperator("/")).toBeTruthy();
  expect(isOperator("*")).toBeTruthy();
});
