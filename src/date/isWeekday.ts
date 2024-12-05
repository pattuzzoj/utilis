import { isValidDate, isWeekend } from ".";

export default function isWeekday(date: Date): boolean {
  if(!isValidDate(date)) return;
  
  return !isWeekend(date);
}