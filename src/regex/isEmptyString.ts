export default function isEmptyString(str: string): boolean {
  return /^\s*$/g.test(str);
}