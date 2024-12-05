export default function first<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index);
}