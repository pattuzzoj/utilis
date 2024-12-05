import { isValidDate } from ".";

type DateFormat = "DMY" | "MDY" | "YMD";

export default function formatDate(date: Date, format: DateFormat, separator: "/"): string {
  if(!isValidDate(date)) return;
  
  switch (format) {
    case "DMY":
      return date.getDate() + separator + date.getMonth() + separator + date.getFullYear();
    case "MDY":
      return date.getMonth() + separator + date.getDate() + separator + date.getFullYear();
    case "YMD":
      return date.getFullYear() + separator + date.getMonth() + separator + date.getDate();
  }
}