export default function freeze(obj: Record<string, any>): Record<string, any> {
  Object.freeze(obj);

  return obj;
}
