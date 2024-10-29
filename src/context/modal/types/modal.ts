import { MODAL_ID } from "../constants/constants";

export type ModalConfigProps = {
	modalId: MODAL_ID;
	title?: string;
	text?: string;
	type?: "success" | "error";
} | null;

export type ModalProps = {
	isShown: boolean;
	modalConfig: ModalConfigProps;
	showModal: (config: ModalConfigProps) => void;
	hideModal: () => void;
};

export type ModalComponentsMap = {
	[key in MODAL_ID]: React.ReactNode;
};
