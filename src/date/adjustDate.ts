import { isValidDate } from "./";

type TimeUnit = "years" | "months" | "days" | "hours" | "minutes" | "seconds" | "milliseconds";

export default function adjustDate(date: Date, amount: number, unit: TimeUnit): Date {
  if(!isValidDate(date)) return;
  
  const adjustedDate = new Date(date);

  switch (unit) {
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    default:
      throw new Error(`Invalid time unit: ${unit}`);
  }

  return adjustedDate;
}
