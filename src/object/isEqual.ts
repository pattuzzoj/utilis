import { isArray, isEqualType, isFunction, isObject } from "../types";

export default function isEqual(value1: unknown, value2: unknown): boolean {
  if(!isEqualType(value1, value2)) {
    return false;
  }

  if (isObject(value1) || isArray(value1)) {
    return JSON.stringify(value1) === JSON.stringify(value2);
  } else if (isFunction(value1)) {
    return value1.toString() === value2.toString();
  } else {
    return Object.is(value1, value2);
  }
}