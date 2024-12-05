import { isArray, isObject } from "../types";

export default function isEmpty(value: string | unknown[] | object): boolean {
  if(typeof value === "string") {
    return value.trim().length === 0;
  } else if(isArray(value) || isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}