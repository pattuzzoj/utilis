import { isFalsy } from ".";

export default function isTruthy(value: unknown): boolean {
  return !isFalsy(value);
}