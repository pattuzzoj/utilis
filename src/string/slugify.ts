export default function slugify(str: string, separator: string = '-'): string {
  return str.trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, separator)
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}