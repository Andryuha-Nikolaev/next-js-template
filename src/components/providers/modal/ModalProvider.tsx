import type React from "react";
import { createContext } from "react";

import useModal from "@/components/global/modal/hooks/useModal";
import Modal from "@/components/global/modal/Modal";
import type { ModalProps } from "@/components/global/modal/types/modal";

const ModalContext = createContext<ModalProps>({
	modalConfig: null,
	hideModal: () => {},
	showModal: () => {},
	isShown: false,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const { showModal, hideModal, modalConfig, isShown } = useModal();

	return (
		<ModalContext.Provider
			value={{ modalConfig, showModal, hideModal, isShown }}
		>
			{children}
			<Modal />
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
