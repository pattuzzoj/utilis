import {
  omit,
  pick,
  isEmpty,
  merge,
  deepClone,
  deepMerge,
  isEqual,
  isDeepEqual,
  flattenObject
} from "../object";

describe("Object Utilities", () => {
  describe("deepClone", () => {
    test("Creates a deep copy of an object or array", () => {
      const obj = { a: 1, b: { c: 2 } };
      const arr = [1, 2, [3, 4]];

      const clonedObj = deepClone(obj);
      const clonedArr = deepClone(arr);

      expect(clonedObj).toEqual(obj);
      expect(clonedArr).toEqual(arr);
      expect(clonedObj).not.toBe(obj);
      expect(clonedArr).not.toBe(arr);
    });
  });

  describe("deepMerge", () => {
    test("Deeply merges multiple objects", () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });
  });

  describe("flattenObject", () => {
    test("Flattens a nested object", () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      const result = flattenObject(obj);

      expect(result).toEqual({ "a": 1, "b.c": 2, "b.d.e": 3 });
    });
  });

  describe("isDeepEqual", () => {
    test("Checks if two objects or arrays are deeply equal", () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      const obj3 = { a: 1, b: { d: 3 } };

      expect(isDeepEqual(obj1, obj2)).toBe(true);
      expect(isDeepEqual(obj1, obj3)).toBe(false);
    });
  });

  describe("isEmpty", () => {
    test("Checks if a value is empty", () => {
      expect(isEmpty("")).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty("text")).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty({ key: "value" })).toBe(false);
    });
  });

  describe("isEqual", () => {
    test("Checks if two values are strictly equal", () => {
      expect(isEqual(1, 1)).toBe(true);
      expect(isEqual("text", "text")).toBe(true);
      expect(isEqual(1, "1")).toBe(false);
      expect(isEqual({ a: 1 }, { a: 1 })).toBe(false); // Reference equality
    });
  });

  describe("merge", () => {
    test("Shallow merges multiple objects", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const result = merge(obj1, obj2);

      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });
  });

  describe("omit", () => {
    test("Omits specific keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = omit(obj, ["b", "c"]);

      expect(result).toEqual({ a: 1 });
    });
  });

  describe("pick", () => {
    test("Picks specific keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = pick(obj, ["b", "c"]);

      expect(result).toEqual({ b: 2, c: 3 });
    });
  });
});