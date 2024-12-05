export default function flattenArray<T>(arr: (T | T[])[], depth: number = Infinity): FlatArray<T[], typeof Infinity>[] {
  return arr.flat(depth) as FlatArray<T[], typeof Infinity>[];
}