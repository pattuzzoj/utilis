export default function random(min: number = 0, max: number = 10): number {
  const isInteger = Number.isInteger(min) && Number.isInteger(max);
  const randomValue = Math.random() * (max - min + 1) + min;
  return isInteger ? Math.floor(randomValue) : randomValue;
}
