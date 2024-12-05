import { isValidDate } from ".";

export default function isWeekend(date: Date): boolean {
  if(!isValidDate(date)) return;

  const day = new Date(date).getDay();

  return 0 === day || day === 6;
}