import { isArray, isObject } from "../types";
import { flattenArray } from "../array";
import flattenObject from "./flattenObject";

export default function flatten(value: object | unknown[]): object | unknown[] {
  if(isObject(value)) {
    return flattenObject(value);
  } else if(isArray(value)) {
    return flattenArray;
  }
}