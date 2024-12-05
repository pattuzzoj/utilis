import { sum } from ".";

export default function average(arr: number[]): number {
  return arr.length ? (sum(arr) / arr.length) : 0;
}