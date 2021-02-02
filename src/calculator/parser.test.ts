import { isNum, parser } from "./parser";

test("isNum should return true", () => {
  expect(isNum("15")).toBeTruthy();
});

test("parser should return true", () => {
  expect(parser("5 + 5")).toStrictEqual(["5", "+", "5"]);
});
