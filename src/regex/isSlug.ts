export default function isSlug(str: string, separator: string = '-'): boolean {
  const slugRegex = new RegExp(`^[a-z0-9]+(?:${separator}[a-z0-9]+)*$`);
  return slugRegex.test(str);
}
