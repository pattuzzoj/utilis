import { isArray, isObject } from '../types';

export default function deepClone<T extends Record<string, any>>(value: T): T;
export default function deepClone<T extends unknown[]>(value: T): T;
export default function deepClone<T>(value: T): T {
  const clonedValue = isArray(value) ? [] : {} as any;

  for (const key in value) {
    if (isArray(value[key]) || isObject(value[key])) {
      clonedValue[key] = deepClone(value[key] as any);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}