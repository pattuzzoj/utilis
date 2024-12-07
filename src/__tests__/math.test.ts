import {
  divisors,
  fibonacci,
  isPrime,
  random,
  sum,
  average,
  frequency
} from "../math";

describe("Number Utilities", () => {
  describe("average", () => {
    test("Calculates the average of an array of numbers", () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10, 20, 30])).toBe(20);
      expect(average([0, 0, 0])).toBe(0);
    });
  });

  describe("divisors", () => {
    test("Returns all divisors of a number", () => {
      expect(divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
      expect(divisors(7)).toEqual([1, 7]);
      expect(divisors(1)).toEqual([1]);
    });
  });

  describe("fibonacci", () => {
    test("Returns the nth Fibonacci number", () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(7)).toBe(13);
    });
  });

  describe("frequency", () => {
    test("Calculates the frequency of elements in an array", () => {
      expect(frequency([1, 1, 2, 3, 3, 3])).toEqual({ "1": 2, "2": 1, "3": 3 });
      expect(frequency(["a", "b", "a", "c", "c"])).toEqual({ a: 2, b: 1, c: 2 });
      expect(frequency([true, false, true])).toEqual({ true: 2, false: 1 });
    });
  });

  describe("isPrime", () => {
    test("Checks if a number is prime", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe("random", () => {
    test("Generates a random number between 0 and 1", () => {
      const rand = random();
      expect(rand).toBeGreaterThanOrEqual(0);
      expect(rand).toBeLessThan(1);
    });
  });

  describe("sum", () => {
    test("Calculates the sum of an array of numbers", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([-1, -2, -3])).toBe(-6);
      expect(sum([])).toBe(0);
    });
  });
});