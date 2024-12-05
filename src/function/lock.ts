export default function lock(callback: (...args: unknown[]) => void): (...args: unknown[]) => void {
  let isLocked = false;

  return (...args: unknown[]): void => {
    if(!isLocked) {
      isLocked = true;
      callback(...args);
      isLocked = false;
    }
  }
}