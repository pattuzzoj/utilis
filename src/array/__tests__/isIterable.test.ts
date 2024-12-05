import { isIterable } from "..";

test("Check if the object is iterable", () => {
  expect(isIterable([0, 1, 2, 3])).toBe(true);
});