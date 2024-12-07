import {
  compose,
  debounce,
  defer,
  fallback,
  guard,
  identity,
  lock,
  memo,
  noop,
  once,
  parallel,
  partialLeft,
  partialRight,
  pipe,
  rate,
  sleep,
  throttle,
} from "../function";

jest.resetModules();

describe("Function Utility Functions", () => {
  describe("compose", () => {
    test("Composes multiple functions from right to left", () => {
      const add = (x: number) => x + 1;
      const multiply = (x: number) => x * 2;
      const composed = compose(multiply, add);
      expect(composed(2)).toBe(6);
    });
  });

  describe("debounce", () => {
    jest.useFakeTimers();
    test("Delays the execution of a function until after a specified time", () => {
      const start = Date.now();
      let end: number;
      const fn = jest.fn(() => {
        end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(150);
        expect(fn).toHaveBeenCalledTimes(1);
      });
      const debouncedFn = debounce(fn, 100);
      debouncedFn();
      jest.advanceTimersByTime(50);
      debouncedFn();
    });
  });

  describe("defer", () => {
    test("Executes a function asynchronously after the current call stack", (done) => {
      const begin = Date.now();
      let deferredTime;
      defer(() => {
        deferredTime = Date.now();
        expect(end).toBeLessThanOrEqual(deferredTime);
        done();
      });
      const end = Date.now();
      expect(end).toBeGreaterThanOrEqual(begin);
    });
  });

  describe("fallback", () => {
    test("Returns a fallback value if the function throws an error", () => {
      expect(fallback(() => "success", () => "fail")).toBe("success");

      const fn = () => {throw new Error("Test error")};
      expect(fallback(fn, () => "fallback")).toBe("fallback");
    });
  });

  describe("guard", () => {
    test("Executes callback if validator passes, otherwise executes fallback", () => {
      const validator = (x: number) => x > 0;
      const callback = jest.fn((x: number) => x * 2);
      const fallbackFn = jest.fn(() => -1);
      const guarded = guard(validator, callback, fallbackFn);

      expect(guarded(5)).toBe(10);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(fallbackFn).not.toHaveBeenCalled();

      expect(guarded(-5)).toBe(-1);
      expect(fallbackFn).toHaveBeenCalledTimes(1);
    });
  });

  describe("identity", () => {
    test("Returns the input value unchanged", () => {
      expect(identity(42)).toBe(42);
      expect(identity("test")).toBe("test");
    });
  });

  describe("lock", () => {
    test("Ensures a function is only executed once at a time", () => {
      const fn = jest.fn(sleep);
      const lockedFn = lock(fn);
      lockedFn(200);
      jest.advanceTimersByTime(50);
      lockedFn(200);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe("memo", () => {
    const fn = jest.fn((x: number) => x * 2);

    test("Caches the result of a function based on its arguments", () => {
      const memoizedFn = memo(fn);
      expect(memoizedFn(2)).toBe(4);
      expect(memoizedFn(2)).toBe(4);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    test("Caches the result of a function based on its arguments with expires time", () => {
      const memoizedFn = memo(fn, 100);
      expect(memoizedFn(2)).toBe(4);
      jest.advanceTimersByTime(110);
      expect(memoizedFn(2)).toBe(4);
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe("noop", () => {
    test("Performs no operations and returns undefined", () => {
      expect(noop()).toBeUndefined();
    });
  });

  describe("once", () => {
    test("Ensures a function is executed only once", () => {
      const fn = jest.fn();
      const onceFn = once(fn);
      onceFn();
      onceFn();
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe("parallel", () => {
    test("Executes multiple functions concurrently and returns results as an array", async () => {
      const tasks = [() => Promise.resolve(1), () => Promise.resolve(2)];
      expect(await parallel(...tasks)).toStrictEqual([1, 2]);
    });
  });

  describe("partialLeft", () => {
    test("Creates a partially applied function", () => {
      const add = (a: number, b: number) => a + b;
      const partialAdd = partialLeft(add, 2);
      expect(partialAdd(3)).toBe(5);
    });
  });

  describe("partialRight", () => {
    test("Creates a partially applied function with arguments from the right", () => {
      const divide = (a: number, b: number) => a / b;
      const partialDivide = partialRight(divide, 2);
      expect(partialDivide(8)).toBe(4);
    });
  });

  describe("pipe", () => {
    test("Pipes multiple functions from left to right", () => {
      const add = (x: number) => x + 1;
      const multiply = (x: number) => x * 2;
      const piped = pipe(add, multiply);
      expect(piped(2)).toBe(6);
    });
  });

  describe("rate", () => {
    jest.useFakeTimers();
    test("Limits the execution of a function to a specific rate", () => {
      const fn = jest.fn();
      const ratedFn = rate(fn, 1, 200);
      ratedFn();
      ratedFn();
      jest.advanceTimersByTime(200);
      ratedFn();
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe("sleep", () => {
    test("Delays execution for a specified time", () => {
      const start = Date.now();
      sleep(50);
      jest.runAllTimers();
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(50);
    });
  });
  
  describe("throttle", () => {
    jest.useFakeTimers();
    test("Limits the execution of a function to once per specified time interval", () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 100);
      throttledFn();
      throttledFn();
      jest.advanceTimersByTime(50);
      expect(fn).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(50);
      throttledFn();
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});
