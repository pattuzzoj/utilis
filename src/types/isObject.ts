import { getType } from "./";

export default function isObject(value: unknown): boolean {
  return getType(value) === "object";
}