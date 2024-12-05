import { swap } from "..";

test("Swap one index for another", () => {
  expect(swap([1, 2, 3], 0, 2)).toStrictEqual([3, 2, 1]);
});