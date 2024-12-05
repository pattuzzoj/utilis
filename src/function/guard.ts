export default function guard<T, U = T>(
	validator: (value: T) => boolean,
	callback: (value: T) => U,
	fallback: (value: T) => U
): (value: T) => U {
	return (value: T): U => validator(value) ? callback(value) : fallback(value);
}
