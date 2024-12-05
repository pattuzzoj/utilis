export default function sum(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}