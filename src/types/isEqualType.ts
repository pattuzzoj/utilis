import getType from "./getType";

export default function isEqualType(value1: unknown, value2: unknown): boolean {
  return getType(value1) === getType(value2);
}