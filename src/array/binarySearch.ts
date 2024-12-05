export default function binarySearch(
	arr: number[],
	value: number,
	low: number = 0,
	high: number = arr.length - 1
): number {
	let mid: number;

	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);

		if (arr[mid] === value) {
			return mid;
		} else if (value > arr[mid]) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}
