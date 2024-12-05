import isObject from "./isObject";

export default function isPromise(value: object): boolean {
  return (isObject(value) && "then" in value && "catch" in value) ? true : false;
}