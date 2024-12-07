export default function isPrime(num: number): boolean {
  if (num === 1 || num % 2 === 0) {
    return false;
  }

  if (num === 2 || num === 3 || num === 5 || num === 7) {
    return true;
  }

  const limit = Math.sqrt(Math.sqrt(num));

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}