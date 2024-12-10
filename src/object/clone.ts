import { isArray } from "../types";

export default function clone<T extends Record<string, any>>(value: T): T;
export default function clone<T extends unknown[]>(value: T): T;
export default function clone<T>(value: T): T {
	const clonedValue = isArray(value) ? [] : {} as any;

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
