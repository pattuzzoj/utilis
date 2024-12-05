import { isArray, isObject } from "../types";

export default function deepClone(value: object | unknown[]) {
  const clonedValue = isArray(value) ? [] : {};

  for (const key in value) {
    if(isArray(value[key]) || isObject(value[key])) {
      clonedValue[key] = deepClone(value[key]);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}