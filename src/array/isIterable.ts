export default function isIterable(value: Exclude<object, unknown>): boolean {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
