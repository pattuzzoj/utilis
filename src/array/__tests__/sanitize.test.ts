import { sanitize } from "..";

test("Sanitize Array", () => {
  expect(sanitize([0, 1, 2, 3, 4, 5, 6], [0, 2, 4, 6])).toStrictEqual([1, 3, 5]);
});