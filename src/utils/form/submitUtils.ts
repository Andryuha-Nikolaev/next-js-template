export function clearEmptyValues<T extends Record<string, any>>(
	values: T
): Partial<T> {
	const filteredObject = Object.fromEntries(
		Object.entries(values).filter(([, value]) => Boolean(value))
	) as Partial<T>;

	return filteredObject;
}

export function valuesToFormData<T extends Record<string, any>>(
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
		}
	});

	return formData;
}
