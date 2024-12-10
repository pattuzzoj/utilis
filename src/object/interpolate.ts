import { isObject } from "../types";

export default function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (isObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_: string, match: string) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result as T;
}
