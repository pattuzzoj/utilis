import { isArray, isObject } from "../types";

export default function deepMerge(...values: Record<string, any>[]): Record<string, any>;
export default function deepMerge(...values: unknown[][]): unknown[];
export default function deepMerge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if(isArray(obj[key]) || isObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, isArray(values[0]) ? [] : {});
}

