export default function pipe<T>(...callbacks: ((value: T) => T)[]) {
  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}