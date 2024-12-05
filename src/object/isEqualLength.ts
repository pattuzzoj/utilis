import { isArray, isEqualType, isObject, isString } from "../types";

export default function isEqualLength(str1: string, str2: string): boolean;
export default function isEqualLength(arr1: unknown[], arr2: unknown[]): boolean;
export default function isEqualLength(obj1: object, obj2: object): boolean;
export default function isEqualLength(value1: string | unknown[] | object, value2: string | unknown[] | object): boolean {
  if(!isEqualType(value1, value2)) {
    return false;
  }
  
  if(isString(value1)) {

  } else if(isArray(value1) || isObject(value1)) {

  }
}