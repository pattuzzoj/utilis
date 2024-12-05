export default function difference<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set(arr1).difference(new Set(arr2))];
}