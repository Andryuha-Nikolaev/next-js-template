import type { ModalId } from "@/context/modal/constants";

export type ModalConfigProps = {
	modalId?: ModalId;
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
	[key in ModalId]: React.ReactNode;
};
