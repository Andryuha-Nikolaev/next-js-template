import type React from "react";
import { createContext, useContext, useState } from "react";

import Modal from "@/components/global/modal/Modal";
import type { ModalConfigProps, ModalProps } from "@/context/modal/types/modal";

const ModalContext = createContext<ModalProps>({
	modalConfig: null,
	hideModal: () => {},
	showModal: () => {},
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

	const hideModal = () => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 300);
	};

	return (
		<ModalContext.Provider
			value={{ modalConfig, showModal, hideModal, isShown }}
		>
			{children}
			<Modal />
		</ModalContext.Provider>
	);
};

export default ModalProvider;
