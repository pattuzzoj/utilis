import { isObject } from "../types";

export default function flattenObject(value: object, path: string = ''): object {
  let unflatValue = {};

  for (const key in value) {
    if(/.\../.test(key)) {

    } else {
      unflatValue[path ? `${path}.${key}` : key] = value[key];
    }

    if(isObject(value[key])) {
      flatValue = {...flatValue, ...flattenObject(value[key], path ? `${path}.${key}` : key)};
    }
  }

  return flatValue;
}