import {
  after,
  before,
  binarySearch,
  chunk,
  difference,
  first,
  flatten,
  isIterable,
  last,
  rotate,
  sanitize,
  shuffle,
  swap,
  union,
  unique,
} from "../array";

const sampleArray = [0, 1, 2, 3, 4, 5];

describe("Array", () => {
  describe("after", () => {
    test("Returns all elements after the specified index", () => {
      expect(after(sampleArray, 2)).toStrictEqual([3, 4, 5]);
    });
  });

  describe("before", () => {
    test("Returns all elements before the specified index", () => {
      expect(before(sampleArray, 2)).toStrictEqual([0, 1]);
    });
  });

  describe("binarySearch", () => {
    test("Finds the index of a specific element in a sorted array", () => {
      expect(binarySearch(sampleArray, 1)).toBe(1);
    });
  });

  describe("chunk", () => {
    test("Splits an array into smaller arrays of the specified size", () => {
      expect(chunk(sampleArray, 2)).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
    });
  });

  describe("difference", () => {
    test("Returns elements in the first array not present in the second array", () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toStrictEqual([1]);
    });
  });

  describe("first", () => {
    test("Retrieves the first element of the array", () => {
      expect(first(sampleArray)).toStrictEqual([0]);
      expect(first(sampleArray, 2)).toStrictEqual([0, 1]);
    });
  });

  describe("flatten", () => {
    test("Flattens a nested array into a single-level array", () => {
      expect(flatten([1, [2, [3, 4], 5]])).toStrictEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("isIterable", () => {
    test("Checks if a value is iterable", () => {
      expect(isIterable([])).toBe(true);
      expect(isIterable(123)).toBe(false);
    });
  });

  describe("last", () => {
    test("Retrieves the last element of the array", () => {
      expect(last(sampleArray)).toStrictEqual([5]);
      expect(last(sampleArray, 2)).toStrictEqual([4, 5]);
    });
  });

  describe("rotate", () => {
    test("Rotates the array by the specified number of positions", () => {
      expect(rotate(sampleArray, 2)).toStrictEqual([2, 3, 4, 5, 0, 1]);
    });
  });

  describe("sanitize", () => {
    test("Removes falsy values from the array", () => {
      expect(sanitize([0, 1, false, 2, null, 3], [0, false, null])).toStrictEqual([1, 2, 3]);
    });
  });

  describe("shuffle", () => {
    test("Randomly shuffles the elements in the array", () => {
      const shuffled = shuffle([...sampleArray]);
      expect(shuffled).toHaveLength(sampleArray.length);
      expect(shuffled.sort()).toStrictEqual(sampleArray);
    });
  });

  describe("swap", () => {
    test("Swaps two elements in the array", () => {
      expect(swap(sampleArray, 0, 5)).toStrictEqual([5, 1, 2, 3, 4, 0]);
    });
  });

  describe("union", () => {
    test("Combines unique elements from multiple arrays", () => {
      expect(union([1, 2], [2, 3], [3, 4])).toStrictEqual([1, 2, 3, 4]);
    });
  });

  describe("unique", () => {
    test("Returns a new array with duplicate elements removed", () => {
      expect(unique([1, 2, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    });
  });
});
