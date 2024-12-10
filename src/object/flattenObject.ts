import { isObject } from "../types";

export default function flattenObject(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any> {
  let flatObj = {} as any;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = path ? `${path}${separator}${key}` : key;
      if (isObject(obj[key])) {
        Object.assign(flatObj, flattenObject(obj[key], separator, newPath));
      } else {
        flatObj[newPath] = obj[key];
      }
    }
  }

  return flatObj;
}