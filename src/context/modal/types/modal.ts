import type { MODAL_ID } from "../constants/constants";

export type ModalConfigProps = {
	modalId?: MODAL_ID;
	title?: string;
	text?: string;
	type?: "success" | "error";
	disableOverlayClick?: boolean;
	hiddenCloseButton?: boolean;
	onHideCallback?: () => void;
	children?: React.ReactNode;
} | null;

export type ModalProps = {
	isShown: boolean;
	modalConfig: ModalConfigProps;
	showModal: (config: ModalConfigProps) => void;
	showSuccessModal: (config?: ModalConfigProps) => void;
	showErrorModal: (config?: ModalConfigProps) => void;
	hideModal: () => void;
};

export type ModalComponentsMap = {
	[key in MODAL_ID]: React.ReactNode;
};
