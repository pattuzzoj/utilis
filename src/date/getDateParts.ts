import { isValidDate } from ".";

export default function getDateParts(date?: Date) {
  date = isValidDate(date) ? date : new Date();
  
  return {
    milliseconds: date.getMilliseconds(),
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }
}