import { isValidDate } from ".";

export default function adjustTimezone(date: Date, timezoneOffset: number): Date {
  if(!isValidDate(date)) return;
  
  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  const adjustedTime = new Date(date.getTime() + offsetDifference * 60 * 1000);
  return adjustedTime;
}
