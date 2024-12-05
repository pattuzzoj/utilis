import { getType } from "../types"

export default function isValidDate(date: Date) {
  return getType(date) === "date";
}