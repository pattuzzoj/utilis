export default function fallback<T>(callback: () => T, value: T): T {
  try {
    const result = callback();

    if (typeof result != "undefined") {
      return callback();
    }

    throw new Error();
  } catch (error) {
    return value;
  }
} 