import { isNull } from "./";

export default function isPrimitive(value: unknown): boolean {
  return isNull(value) || typeof value !== "object" && typeof value !== "function";
}