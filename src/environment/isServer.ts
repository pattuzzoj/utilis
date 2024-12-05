export default function isServer(): boolean {
  if (typeof global !== "undefined" && typeof process !== "undefined") {
    return true;
  }

  if (typeof Deno !== "undefined") {
    return true;
  }

  if (typeof Bun !== "undefined") {
    return true;
  }

  return false;
}