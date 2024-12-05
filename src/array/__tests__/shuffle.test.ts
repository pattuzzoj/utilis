import { shuffle } from "..";

test("Shuffle itens from list", () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.toStrictEqual([1, 2, 3, 4, 5]);
});