export default function once<T>(callback: (...args: unknown[]) => T): (...args: unknown[]) => T {
  let called = false;
  let result: T;

  return function(...args: unknown[]): T {
    if(!called) {
      called = true;
      result = callback(...args);
    };

    return result;
  }
}