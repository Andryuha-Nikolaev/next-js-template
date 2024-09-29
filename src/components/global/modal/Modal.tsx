import { useContext } from "react";

import { ModalContext } from "@/components/providers/modal/ModalProvider";
import CloseButton from "@/components/ui/buttons/close/CloseButton";
import useScrollLock from "@/hooks/scroll/useScrollLock";

import DefaultModal from "./components/default/DefaultModal";
import FeedbackModal from "./components/feedback/FeedbackModal";
import { MODAL_ID } from "./constants/constants";
import s from "./Modal.module.scss";
import type { ModalComponentsMap } from "./types/modal";

import Overlay from "../overlay/Overlay";

const Modal = () => {
	const modalContext = useContext(ModalContext);

	if (!modalContext) {
		throw new Error("Modal must be used within a ModalProvider");
	}

	const { modalConfig, hideModal, isShown } = modalContext;

	useScrollLock(isShown);

	if (!modalConfig) {
		return null;
	}

	const modalComponents: ModalComponentsMap = {
		[MODAL_ID.DEFAULT]: <DefaultModal />,
		[MODAL_ID.FEEDBACK_FORM]: <FeedbackModal />,
	};

	return (
		<Overlay onMouseDown={hideModal} isShown={isShown}>
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div onMouseDown={(e) => e.stopPropagation()} className={s.wrap}>
				<div className={s.close}>
					<CloseButton onClick={hideModal} />
				</div>

				<h2 className={s.title}>{modalConfig.title}</h2>
				<div className={s.content}>{modalComponents[modalConfig.modalId]}</div>
			</div>
		</Overlay>
	);
};

export default Modal;
