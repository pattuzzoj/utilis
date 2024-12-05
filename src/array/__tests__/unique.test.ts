import { unique } from "..";

test("Get array with unique values", () => {
  expect(unique([1, 2, 3, 1])).toStrictEqual([1, 2, 3]);
});