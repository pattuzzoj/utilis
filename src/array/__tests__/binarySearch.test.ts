import { binarySearch } from "..";

test("Search an item using Binary Search", () => {
  expect(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70)).toBe(6);
});