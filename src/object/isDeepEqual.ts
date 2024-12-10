import { isArray, isEqualType, isObject } from "../types";
import isEqual from "./isEqual";

export default function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
export default function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
export default function isDeepEqual(value1: any, value2: any): boolean {
  if(!isEqualType(value1, value2) || Object.keys(value1).length !== Object.keys(value2).length) {
    return false;
  }

  for(const key in value1) {
    if(!Object.hasOwn(value2, key)) return false;

    if (isObject(value1) || isArray(value1)) {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else {
      if(!isEqual(value1[key], value2[key])) {
        return false;
      }
    }
  }

  return true;
}