export default function chunk<T>(arr: T[], size: number): T[][] {
  const chunkedArray = [];

  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }

  return chunkedArray;
}