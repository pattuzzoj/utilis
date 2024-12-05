import { chunk } from "..";

test("Chunk list", () => {
  expect(chunk([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
});