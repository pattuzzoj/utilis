import { isValidDate } from ".";

export default function adjustToUTC(date: Date) {
  if(!isValidDate(date)) return;
  
  return new Date(date).toUTCString();
}