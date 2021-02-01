import { calculate } from "./calculate";

test("calculate should return correct value", () => {
  expect(calculate(15, "+", 5)).toBe(20);
  expect(calculate(15, "-", 5)).toBe(10);
  expect(calculate(15, "/", 5)).toBe(3);
  expect(calculate(5, "*", 5)).toBe(25);
});
