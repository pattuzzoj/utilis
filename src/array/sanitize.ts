export default function sanitize<T>(arr: T[], values: T[], replace?: T): T[] {
  return arr.filter((value: T) => {
    if(values.includes(value) && typeof replace != undefined) {
      return replace;
    }
    
    return value;
  });
}