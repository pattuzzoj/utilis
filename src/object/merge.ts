import { isArray } from "../types";

export default function merge<T extends object>(...values: T[]): T {
  const resultValue = isArray(values[0]) ? [] : {} as T;

  for (const obj of values) {
    for (const key in obj) {
      resultValue[key] = obj[key];
    }
  }

  return resultValue;
}