export default function randomUUID(): string {
  return crypto?.randomUUID();
}