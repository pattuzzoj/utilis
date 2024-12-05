export default function rate(callback: (...args: unknown[]) => void, limit: number, interval: number): (...args: unknown[]) => boolean {
  let calls = 0;

  return (...args: unknown[]): boolean => {
    if (calls < limit) {
      if(calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  }
}