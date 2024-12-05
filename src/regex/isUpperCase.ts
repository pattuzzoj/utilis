export default function isUpperCase(str: string): boolean {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.trim().replace(/\s+/g, ""));
}