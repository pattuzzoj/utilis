export default function isBigint(value: unknown): boolean {
  return typeof value === "bigint";
}