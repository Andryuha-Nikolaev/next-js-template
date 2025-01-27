import { useEffect } from "react";

import clsx from "clsx";

import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import CloseButton from "@/components/ui/buttons/close/CloseButton";
import { SearchParamsNames } from "@/constants/searchParams";
import { ModalId } from "@/context/modal/constants";
import { useModal } from "@/context/modal/ModalProvider";
import type { ModalComponentsMap } from "@/context/modal/types";
import useChangeQueryParams from "@/hooks/query-params/useChangeQueryParams";
import useScrollLock from "@/hooks/scroll/useScrollLock";

import DefaultModal from "./components/default/DefaultModal";
import FeedbackModal from "./components/feedback/FeedbackModal";
import s from "./Modal.module.scss";

import Overlay from "../overlay/Overlay";

const Modal = () => {
	const modalContext = useModal();

	if (!modalContext) {
		throw new Error("Modal must be used within a ModalProvider");
	}

	const { modalConfig, hideModal, isShown, showModal } = modalContext;

	const modalId = modalConfig?.modalId || ModalId.DEFAULT;

	useScrollLock(isShown);

	const { params } = useChangeQueryParams();

	const modalQuery = params.get(SearchParamsNames.MODAL_ACTION);

	const validModalIds = Object.values(ModalId);

	useEffect(() => {
		if (modalQuery && validModalIds.includes(modalQuery as ModalId)) {
			showModal({ modalId: modalQuery as ModalId });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalQuery]);

	if (!modalConfig) {
		return null;
	}

	const modalComponents: ModalComponentsMap = {
		[ModalId.DEFAULT]: <DefaultModal />,
		[ModalId.FEEDBACK_FORM]: <FeedbackModal />,
	};

	return (
		<Overlay
			onMouseDown={() => {
				if (!modalConfig.disableOverlayClick) {
					hideModal();
				}
			}}
			isShown={isShown}
		>
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
			<div
				onMouseDown={(e) => e.stopPropagation()}
				onClick={(e) => {
					if (e.target instanceof Element) {
						{
							const link = e.target.closest("a");
							if (link && link?.target !== "_blank") {
								hideModal();
							}
						}
					}
				}}
				className={clsx(s.wrap, s[modalId])}
			>
				<CustomScrollLayout className={s.scroll}>
					<div className={s.content}>
						{!modalConfig.hiddenCloseButton && (
							<div className={s.close}>
								<CloseButton onClick={hideModal} />
							</div>
						)}
						{modalComponents[modalId]}
					</div>
				</CustomScrollLayout>
			</div>
		</Overlay>
	);
};

export default Modal;
