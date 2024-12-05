export default function guard<T, U = void>(
	condition: (value: T) => boolean,
	callback: (value: T) => U,
  fallback: (value: T) => U
) {
  return (value: T): U => {
    return condition(value) ? callback(value) : fallback?.(value);
	};
}
