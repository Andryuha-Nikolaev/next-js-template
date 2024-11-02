export function checkFileLength(files: FileList) {
	if (files?.length > 0) {
		return true;
	}
	return false;
}
