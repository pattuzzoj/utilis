export default function isEmpty(value: Record<string, any>): boolean;
export default function isEmpty(value: unknown[]): boolean;
export default function isEmpty(value: any): boolean {
  return Object.keys(value).length === 0;
}