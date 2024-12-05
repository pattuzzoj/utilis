import { djb2 } from "../crypto";

export default function memo(callback: (...args: unknown[]) => unknown, cacheTimeout?: number): (...args: unknown[]) => unknown {
  const cache = new Map();

  return (...args: unknown[]): unknown => {
    const key = djb2(JSON.stringify(args));

    if(!cache.has(key)) {
      cache.set(key, callback(...args));

      if(cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }
    
    return cache.get(key);
  }
}