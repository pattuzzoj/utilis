export default function partialRight<T>(callback: (...args: unknown[]) => T, ...partial: unknown[]): (...args: unknown[]) => T {
  return (...args: unknown[]): T => callback(...args, ...partial);
}