import { isEmptyString } from "../regex";
import { isArray, isObject } from ".";

export default function isFalsy(value: unknown): boolean {
  if(typeof value === "string") {
    return isEmptyString(value);
  }

  if(isObject(value) || isArray(value)) {
    return Object.keys(value).length === 0;
  }

  return !value;
}