import { isObject } from "../types";

export default function flattenObject(value: object, path: string = ''): object {
  let flatValue = {};

  for (const key in value) {
    if(isObject(value[key])) {
      flatValue = {...flatValue, ...flattenObject(value[key], path ? `${path}.${key}` : key)};
    } else {
      flatValue[path ? `${path}.${key}` : key] = value[key];
    }
  }

  return flatValue;
}