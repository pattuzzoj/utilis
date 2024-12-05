export default function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((result: T, key: K) => {
    if(key in obj) {
      result[key] = obj[key];
    }

    return result;
  }, {}) as Pick<T, K>;
}