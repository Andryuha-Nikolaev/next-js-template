export function formatPhoneNumberForMask(phone: string): string {
	if (!/^\d{11}$/.test(phone)) {
		throw new Error("Invalid phone number format. Expected 11 digits.");
	}

	const formattedPhone = phone.replace(
		/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
		"+$1 ($2) $3 $4 $5"
	);

	return formattedPhone;
}
