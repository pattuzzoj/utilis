export default function omit<T extends Record<string, any>, K extends string>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };

  keys.forEach(key => delete result[key]);
  
  return result;
}