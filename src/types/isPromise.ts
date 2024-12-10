import getType from "./getType";

export default function isPromise(value: object): boolean {
  return getType(value) === "promise";
}