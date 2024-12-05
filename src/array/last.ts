export default function last<T>(arr: T[], index: number): T[] {
  return arr.slice(-index);
}