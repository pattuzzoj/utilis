import { rotate } from "..";

test("Rotate list", () => {
  expect(rotate([0, 1, 2, 3], 2)).toStrictEqual([2, 3, 0, 1]);
});