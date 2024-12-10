import { isObject } from "../types";

export default function deepFreeze(obj: Record<string, any>): Record<string, any> {
  Object.freeze(obj);

  for (const key in obj) {
    if (isObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}
