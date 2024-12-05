export default function frequency<T extends boolean | number | string>(arr: T[]): Record<string, number> {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}