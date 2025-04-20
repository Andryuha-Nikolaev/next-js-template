import Link from "next/link";

import { ModalId, ModalSearchParams } from "@/features/modal";
import { useModal } from "@/features/modal/ui/ModalProvider";
import { RootButton } from "@/shared/ui/buttons/root";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const TestModal = () => {
	const { showModal, showSuccessModal, showErrorModal } = useModal();

	const showDefaultModalWithHideCallback = () => {
		showModal({
			title: "Title ",
			text: "Text",
			onHideCallback() {
				alert("callbaaaaaaaaaaaack");
			},
		});
	};

	const showDefaultModalWithChildren = () => {
		showModal({
			children: <Link href={"/"}>На главную</Link>,
		});
	};

	const showDefaultSuccessModal = () => {
		showSuccessModal({ title: "Данные успешно отправлены" });
	};

	const showDefaultErrorModal = () => {
		showErrorModal({ hiddenCloseButton: true });
	};

	const showFeedbackModal = () => {
		showModal({ modalId: ModalId.FEEDBACK_FORM, disableOverlayClick: true });
	};

	return (
		<TestPageWrapper title="Modal">
			<RootButton
				colorVariant="var3"
				onClick={showDefaultModalWithHideCallback}
			>
				show default modal with hide callback
			</RootButton>
			<RootButton colorVariant="var2" onClick={showDefaultModalWithChildren}>
				show default modal with children
			</RootButton>
			<RootButton colorVariant="var3" onClick={showDefaultSuccessModal}>
				show success modal
			</RootButton>
			<RootButton colorVariant="var3" onClick={showDefaultErrorModal}>
				show error modal hidden close button
			</RootButton>
			<RootButton colorVariant="var3" onClick={showFeedbackModal}>
				show feedback modal disabled overlay click
			</RootButton>
			<RootButton
				colorVariant="var2"
				as={Link}
				href={`/test?${ModalSearchParams.ACTION}=${ModalId.FEEDBACK_FORM}`}
				scroll={false}
			>
				show feedback modal with query
			</RootButton>
		</TestPageWrapper>
	);
};
