export default function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3 || num === 5 || num === 7) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return false;
  }

  const limit = Math.sqrt(num);

  for (let index = 11; index <= limit; index += 2) {
    if (num % index === 0) {
      return false;
    }
  }

  return true;
}