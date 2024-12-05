export default function fallback<T>(callback: () => T, fallback: () => T): T {
  try {
    const result = callback();

    if (typeof result != "undefined") {
      return result;
    }

    throw new Error();
  } catch (error) {
    return fallback();
  }
} 