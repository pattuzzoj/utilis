export default function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}