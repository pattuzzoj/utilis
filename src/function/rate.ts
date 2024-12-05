export default function rate(callback: (...args: unknown[]) => void, limit: number, timeout: number): (...args: unknown[]) => boolean {
  let calls = 0;
  let isResetting = true;

  return (...args: unknown[]): boolean => {
    if (isResetting) {
      isResetting = false;

      setTimeout(() => {
        calls = 0;
        isResetting = true;
      }, timeout);
    }

    if (calls >= limit) {
      return false;
    }

    callback(...args);
    calls++;
    return true;
  }
}