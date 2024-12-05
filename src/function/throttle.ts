export default function throttle(callback: (...args: unknown[]) => void, wait: number = 300): (...args: unknown[]) => void {
  let timerId: number | null;

  return (...args: unknown[]): void => {
    if(!timerId) {
      timerId = setTimeout(() => timerId = null, wait) as unknown as number;
      callback(...args);
    }
  }
}