export default function round(value: number, precision: number) {
  const factor = precision * 10;
  return Math.trunc(value * factor) / factor;
}