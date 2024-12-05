export default function isAsync(callback: Function): boolean {
  return callback.constructor.name === "AsyncFunction";
}