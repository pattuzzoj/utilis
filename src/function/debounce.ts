export default function debounce(callback: (...args: unknown[]) => void, delay: number = 300): (...args: unknown[]) => void {
  let timerId: number;

  return (...args: unknown[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay) as unknown as number;
  }
}