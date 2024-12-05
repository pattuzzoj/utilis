export default function getRandom(str: string): string;
export default function getRandom<T>(arr: T[]): T;
export default function getRandom<T>(arr: string | T[]): string | T {
  return arr[Math.floor(Math.random() * (arr.length))];
}