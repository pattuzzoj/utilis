export default function sanitizeString(str: string, values: string[], replace?: string): string {
  const regex = new RegExp(`${values.join("|")}`, "g");
  return str.replace(regex, replace ?? "").trim();
}