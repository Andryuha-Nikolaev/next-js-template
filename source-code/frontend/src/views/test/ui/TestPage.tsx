"use client";

import Link from "next/link";

import { ModalId, ModalSearchParams } from "@/features/modal/config/constants";
import { useModal } from "@/features/modal/ui/ModalProvider";
import { TestForm } from "@/features/send-test-form";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { RootButton } from "@/shared/ui/buttons/root";
import { Social } from "@/shared/ui/social";
import { Tooltip } from "@/shared/ui/tooltip";

import { Buttons } from "./buttons/Buttons";
import { Links } from "./links/Links";
import { Typography } from "./typography/Typography";

export const TestPage = () => {
	const { showModal, showSuccessModal, showErrorModal } = useModal();

	const showDefaultModal = () => {
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
		showSuccessModal();
	};

	const showDefaultErrorModal = () => {
		showErrorModal({ hiddenCloseButton: true });
	};

	const showFeedbackModal = () => {
		showModal({ modalId: ModalId.FEEDBACK_FORM, disableOverlayClick: true });
	};

	return (
		<div>
			<Typography />
			<Buttons />
			<Links />
			<h2>Social:</h2>
			<Social />
			<hr style={{ width: "100%" }} />
			<h2>Modal:</h2>
			<RootButton colorVariant="var3" onClick={showDefaultModal}>
				showDefaultModal with hide callback
			</RootButton>
			<RootButton colorVariant="var2" onClick={showDefaultModalWithChildren}>
				show Default Modal With Children
			</RootButton>

			<RootButton colorVariant="var3" onClick={showDefaultSuccessModal}>
				showDefaultSuccessModal
			</RootButton>
			<RootButton colorVariant="var3" onClick={showDefaultErrorModal}>
				showDefaultErrorModal hiddenCloseButton
			</RootButton>
			<RootButton colorVariant="var3" onClick={showFeedbackModal}>
				showFeedbackModal disableOverlayClick
			</RootButton>
			<RootButton
				colorVariant="var2"
				as={Link}
				href={`/test?${ModalSearchParams.ACTION}=feedback-form`}
				scroll={false}
			>
				showFeedbackModal with query
			</RootButton>
			<hr style={{ width: "100%" }} />
			<h2>Tooltips:</h2>
			<Tooltip message="custom tooltip">
				<RootButton as="span">Custom tooltip</RootButton>
			</Tooltip>
			<Tooltip
				position="left"
				mobilePosition="bottom"
				message="success tooltip"
				type="success"
			/>
			<Tooltip message="error tooltip" type="error" position="top" />
			<Tooltip
				message="alert tooltip"
				type="alert"
				onClick={() => alert("tooltip callback")}
				position="bottom"
				mobilePosition="bottom"
			/>
			<Tooltip message="question tooltip" type="question" />
			<hr style={{ width: "100%" }} />
			<h2>Breadcrumbs:</h2>
			<Breadcrumbs
				breadcrumbs={[
					{ name: "Тест", url: "/test" },
					{ name: "Тест1", url: "/test1" },
					{ name: "Тест2", url: "/test2" },
					{
						name: "ТестТестТестТестТестТестТестТестТестТестТестТестТест Тест Тест Тест Тест Тест Тест Тест Тест",
						url: "/test3",
					},
				]}
			/>
			<hr style={{ width: "100%" }} />
			<h2 id="form">Forms:</h2>
			<TestForm />
		</div>
	);
};
