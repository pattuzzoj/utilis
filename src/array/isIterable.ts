export default function isIterable(value: unknown): boolean {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
