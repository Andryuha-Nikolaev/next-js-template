export async function convertFilesArrayUrlToFileList(
	files: string[],
	name: string
): Promise<FileList | null> {
	if (!files.length) {
		return null;
	}

	const dataTransfer = new DataTransfer();

	try {
		const filePromises = files.map(async (imageUrl, index) => {
			try {
				const response = await fetch(imageUrl);
				if (!response.ok) {
					throw new Error(`Failed to fetch image: ${response.status}`);
				}

				const blob = await response.blob();
				const mimeType = response.headers.get("Content-Type") || "image/png";
				const filename = `${name}-${index + 1}.${mimeType.split("/")[1] || "png"}`;

				return new File([blob], filename, { type: mimeType });
			} catch (error) {
				console.error(`Error processing file ${imageUrl}:`, error);
				return null;
			}
		});

		const filesResults = await Promise.all(filePromises);

		filesResults.forEach((file) => {
			if (file) {
				dataTransfer.items.add(file);
			}
		});

		return dataTransfer.files.length > 0 ? dataTransfer.files : null;
	} catch (error) {
		console.error("Error in convertFilesArrayUrlToFileList:", error);
		return null;
	}
}
