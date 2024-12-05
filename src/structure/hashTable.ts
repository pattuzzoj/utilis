import { djb2 } from "../crypto";

export default function hashTable<T extends string, U>(size: number) {
  const table: [T, U][] = [];

  return {
    get(key: T) {
      const index = djb2(key);
      const [storedKey, storedValue] = table[index];

      if(storedKey === key) {
        return storedValue;
      }

      return undefined;
    },
    set(key: T, value: U) {
      const index = djb2(key);
      table[index] = [key, value];
    },
    remove(key: T) {
      const index = djb2(key);
      const [storedKey] = table[index];

      if(storedKey === key) {
        table[index] = undefined;

        return true;
      }

      return false;
    }
  }
}