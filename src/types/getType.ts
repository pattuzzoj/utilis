export default function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}