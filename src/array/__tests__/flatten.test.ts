import { flatten } from "..";

test("Flatten array", () => {
  expect(flatten([0, 1, [2, 3], 4, 5, [6, [7]]])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7]);
});