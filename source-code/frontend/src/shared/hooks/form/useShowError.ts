import { useModal } from "$features/modal/ui/ModalProvider";
import { ErrorTypes } from "$shared/constants/errorTypes";
import type { HandleErrorResponse } from "$shared/lib/api/error";

type ShowErrorType<T> = {
	error: HandleErrorResponse | undefined;
	setError?: (
		name: keyof T,
		error: {
			message: string;
		},
		options?: { shouldFocus: boolean }
	) => void;
	withSuccessModal?: boolean;
	successMessage?: string;
};

const useShowError = () => {
	const { showSuccessModal, showErrorModal } = useModal();

	const showError = <T>({
		error,
		setError,
		withSuccessModal = true,
		successMessage = "Данные успешно отправлены",
	}: ShowErrorType<T>) => {
		if (!error) {
			if (withSuccessModal) {
				showSuccessModal({
					title: successMessage,
				});
			}

			return;
		}

		if (error.errorType === ErrorTypes.VALIDATION && setError) {
			for (const [key, value] of Object.entries(error.fields)) {
				setError(
					key as keyof T,
					{
						message: value[0],
					},
					{ shouldFocus: true }
				);
			}

			return;
		}

		showErrorModal({
			title: error.message,
		});
	};

	return {
		showError,
	};
};

export default useShowError;
