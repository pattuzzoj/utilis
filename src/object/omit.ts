export default function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return (Object.keys(obj) as K[]).reduce((result: T, key) => {
    if(!keys.includes(key)) {
      result[key] = obj[key];
    }

    return result;
  }, {}) as Omit<T, K>;
}