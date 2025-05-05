export function checkFilesLength(files: FileList) {
	if (files?.length > 0) {
		return true;
	}
	return false;
}

export function checkFilesTypes(
	value: FileList | string,
	validTypes: string[] = [
		"image/jpeg",
		"image/png",
		"image/jpg",
		// "application/pdf",
		// "application/msword",
		// "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	]
) {
	if (!value || typeof value === "string" || value.length === 0) {
		return true;
	}

	const files = Array.from(value);

	for (const file of files) {
		if (!validTypes.includes(file.type)) {
			return false;
		}
	}

	return true;
}

export function checkFilesSize(value: FileList | string, maxSizeMb: number) {
	if (!value || typeof value === "string" || value.length === 0) {
		return true;
	}

	const files = Array.from(value);

	if (
		files.reduce((sum, file) => sum + file.size, 0) <=
		maxSizeMb * 1024 * 1024
	) {
		return true;
	}
	return false;
}
