"use client";

import type React from "react";
import { createContext, Suspense, useContext, useState } from "react";

import Modal from "@/components/global/modal/Modal";
import { ErrorMessages } from "@/constants/errorMessages";
import { SearchParamsNames } from "@/constants/searchParams";
import type { ModalConfigProps, ModalProps } from "@/context/modal/types";
import useChangeQueryParams from "@/hooks/query-params/useChangeQueryParams";

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
			title: ErrorMessages.UNKNOWN,
			type: "error",
			...config,
		});
	};

	const handleChangeParams = useChangeQueryParams();

	const hideModal = () => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 200);

		const params = new URLSearchParams(window.location.search);
		const modalQuery = params.get(SearchParamsNames.MODAL_ACTION);

		if (modalQuery) {
			params.delete(SearchParamsNames.MODAL_ACTION);
			params.delete(SearchParamsNames.MODAL_TOKEN);
			handleChangeParams(params.toString(), "replace");
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
