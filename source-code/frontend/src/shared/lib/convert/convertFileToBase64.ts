const fileToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const base64 = reader.result?.toString() || "";
			resolve(base64);
		};
		reader.onerror = (error) => reject(error);
	});
};

export const convertFileToBase64 = async (file: File) => {
	const base64 = await fileToBase64(file);
	return base64;
};
