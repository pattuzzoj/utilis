import { isArray, isObject } from "../types";
import deepClone from "./deepClone";

export default function deepMerge(...values: object[]): object {
  const newValue = isArray(values[0]) ? [] : {};

  for (const obj of values as object[]) {
    for (const key in obj) {
      if(isArray(obj[key]) || isObject(obj[key])) {
        newValue[key] = deepClone(obj[key]);
      } else {
        newValue[key] = obj[key];
      }
    }
  }

  return newValue;
}