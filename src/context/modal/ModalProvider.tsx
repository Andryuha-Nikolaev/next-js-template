import type React from "react";
import { createContext, Suspense, useContext, useState } from "react";

import Modal from "@/components/global/modal/Modal";
import type { ModalConfigProps, ModalProps } from "@/context/modal/types/modal";
import useChangeQueryParams from "@/hooks/query-params/useChangeQueryParams";

import { MODAL_QUERY_NAME } from "./constants/constants";

const ModalContext = createContext<ModalProps>({
	modalConfig: null,
	hideModal: () => {},
	showModal: () => {},
	showSuccessModal: () => {},
	showErrorModal: () => {},
	isShown: false,
});

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalConfig, setModalConfig] = useState<ModalConfigProps>(null);
	const [isShown, setIsShown] = useState(false);

	const showModal = (config: ModalConfigProps) => {
		setModalConfig(config);
		setTimeout(() => {
			setIsShown(true);
		}, 10);
	};

	const showSuccessModal = (config?: ModalConfigProps) => {
		showModal({
			title: "Данные успешно отправлены",
			type: "success",
			...config,
		});
	};

	const showErrorModal = (config?: ModalConfigProps) => {
		showModal({
			title: "Упс... Что-то пошло не так",
			type: "error",
			...config,
		});
	};

	const handleChange = useChangeQueryParams();

	const hideModal = () => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 200);

		const params = new URLSearchParams(window.location.search);

		const modalQuery = params.get(MODAL_QUERY_NAME);

		if (modalQuery) {
			params.delete(MODAL_QUERY_NAME);
			handleChange(params.toString(), "replace");
		}

		if (modalConfig?.onHideCallback) {
			modalConfig.onHideCallback();
		}
	};

	return (
		<ModalContext.Provider
			value={{
				modalConfig,
				showModal,
				showSuccessModal,
				showErrorModal,
				hideModal,
				isShown,
			}}
		>
			{children}
			<Suspense>
				<Modal />
			</Suspense>
		</ModalContext.Provider>
	);
};

export default ModalProvider;
