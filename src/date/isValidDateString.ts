export default function isValidDateString(date: string) {
  return new Date(date).toString() === date;
}