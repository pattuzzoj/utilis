export default function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}