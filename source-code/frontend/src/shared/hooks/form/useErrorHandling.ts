import { useModal } from "@/features/modal/ui/ModalProvider";
import { ErrorTypes } from "@/shared/constants/errorTypes";
import type { HandleErrorResponse } from "@/shared/lib/api/error";

type ShowErrorType<T> = {
	response: HandleErrorResponse | undefined;
	setError?: (
		name: keyof T,
		error: {
			message: string;
		}
	) => void;
	withSuccessModal?: boolean;
	successMessage?: string;
};

const useShowError = () => {
	const { showSuccessModal, showErrorModal } = useModal();

	const showError = <T>({
		response,
		setError,
		withSuccessModal = true,
		successMessage = "Данные успешно отправлены",
	}: ShowErrorType<T>) => {
		if (!response) {
			if (withSuccessModal) {
				showSuccessModal({
					title: successMessage,
				});
			}

			return;
		}

		if (response.errorType === ErrorTypes.VALIDATION && setError) {
			for (const [key, value] of Object.entries(response.fields)) {
				setError(key as keyof T, {
					message: value[0],
				});
			}

			return;
		}

		showErrorModal({
			title: response.message,
		});
	};

	return {
		showError,
	};
};

export default useShowError;
