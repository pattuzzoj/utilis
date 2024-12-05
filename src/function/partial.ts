export default function partial<T>(callback: (...args: unknown[]) => T, ...partial: unknown[]): (...args: unknown[]) => T {
  return (...args: unknown[]): T => callback(...partial, ...args);
}