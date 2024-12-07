import { sum } from ".";

export default function average(values: number[]): number {
  return values.length ? (sum(values) / values.length) : 0;
}