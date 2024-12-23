import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import Modal from "@/components/global/modal/Modal";
import type { ModalConfigProps, ModalProps } from "@/context/modal/types/modal";
import useChangeQueryParams from "@/hooks/query-params/useChangeQueryParams";

import { MODAL_ID } from "./constants/constants";

const MODAL_QUERY_NAME = "modal";

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
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams.toString());
	const modalQuery = params.get(MODAL_QUERY_NAME);

	const validModalIds = Object.values(MODAL_ID);

	const hideModal = () => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 200);

		if (modalQuery) {
			params.delete(MODAL_QUERY_NAME);
			handleChange(params.toString(), "replace");
		}

		if (modalConfig?.onHideCallback) {
			modalConfig.onHideCallback();
		}
	};

	useEffect(() => {
		if (modalQuery && validModalIds.includes(modalQuery as MODAL_ID)) {
			showModal({ modalId: modalQuery as MODAL_ID });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalQuery]);

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
			<Modal />
		</ModalContext.Provider>
	);
};

export default ModalProvider;
