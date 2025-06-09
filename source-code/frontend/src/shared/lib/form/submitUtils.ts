export function clearEmptyValues<T extends Record<string, unknown>>(
	values: T
): Partial<T> {
	const filteredObject = Object.fromEntries(
		Object.entries(values).filter(([, value]) => {
			if (Array.isArray(value)) {
				return value.length > 0;
			}
			return Boolean(value);
		})
	) as Partial<T>;

	return filteredObject;
}

export function valuesToFormData<T extends Record<string, unknown>>(
	values: T
): FormData {
	const formData = new FormData();

	Object.entries(clearEmptyValues(values)).forEach(([key, value]) => {
		if (value instanceof FileList) {
			for (let i = 0; i < value.length; i++) {
				formData.append(key, value[i]);
			}
		} else if (typeof value === "string" || value instanceof Blob) {
			formData.append(key, value);
		} else if (value === true) {
			formData.append(key, "true");
		} else if (Array.isArray(value)) {
			formData.append(key, JSON.stringify(value));
		} else if (value instanceof Date) {
			formData.append(key, value.toISOString());
		}
	});

	return formData;
}
