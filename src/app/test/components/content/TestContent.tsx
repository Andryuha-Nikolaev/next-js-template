"use client";

import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

import TestForm from "@/components/forms/test/TestForm";
import CloseIcon from "@/components/icons/close/CloseIcon";
import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";
import RootLink from "@/components/ui/links/root/RootLink";
import Social from "@/components/ui/social/Social";
import { MODAL_ID } from "@/context/modal/constants/constants";
import { useModal } from "@/context/modal/ModalProvider";

import s from "./TestContent.module.scss";

const TestContent = () => {
	const router = useRouter();

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
		showModal({ modalId: MODAL_ID.FEEDBACK_FORM, disableOverlayClick: true });
	};

	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<hr style={{ width: "100%" }} />
					<h2>Typography:</h2>
					<h1>h1 Прототип нового сервиса — это как структура</h1>
					<h2>h2 Прототип нового сервиса — это как структура</h2>
					<h3>h3 Прототип нового сервиса — это как структура</h3>
					<h4>h4 Прототип нового сервиса — это как структура</h4>
					<p>p Прототип нового сервиса — это как структура</p>
					<p className={s.additionalText}>
						p additional Прототип нового сервиса — это как структура
					</p>
					<small>small Прототип нового сервиса — это как структура</small>
					<p className={s.helperText}>
						p helper Прототип нового сервиса — это как структура
					</p>
					<hr style={{ width: "100%" }} />
					<h2>Buttons:</h2>
					<RootButton onClick={() => router.push("/")}>
						nextjs-toploader push HOME
					</RootButton>
					<RootButton onClick={() => console.log("aaaaaaaaaaaaaa")}>
						Root Button
					</RootButton>
					<RootButton colorVariant="var2">Root Button var2</RootButton>
					<RootButton colorVariant="var3">Root Button var3</RootButton>
					<RootButton size="sm">Root Button sm</RootButton>
					<RootButton size="md">Root Button md</RootButton>
					<RootButton size="lg">Root Button lg</RootButton>
					<RootButton disabled>Root Button disabled</RootButton>
					<RootButton href={"/"} as={Link}>
						Root Button as Next Link to home
					</RootButton>
					<RootButton isLoading>Root Button Loading</RootButton>
					<RootButton colorVariant="var2" size="sm" isLoading>
						Root Button Loading
					</RootButton>

					<RootButton Icon={<CloseIcon />} colorVariant="var3">
						Root Button With Icon
					</RootButton>
					<RootButton
						Icon={<CloseIcon />}
						iconPosition="right"
						size="sm"
						colorVariant="var2"
					>
						Root Button With Icon Right
					</RootButton>
					<hr style={{ width: "100%" }} />
					<h2>Links:</h2>
					<RootLink as={"button"}>RootLink as=button</RootLink>
					<RootLink href={"/"}>RootLink var1</RootLink>
					<RootLink colorVariant="var2" href={"/"}>
						RootLink var2
					</RootLink>
					<RootLink target="_blank" rel="noreferrer" href="/" as="a">
						RootLink as=a
					</RootLink>
					<hr style={{ width: "100%" }} />
					<h2>Social:</h2>
					<Social />
					<hr style={{ width: "100%" }} />
					<h2>Modal:</h2>
					<RootButton colorVariant="var3" onClick={showDefaultModal}>
						showDefaultModal with hide callback
					</RootButton>
					<RootButton
						colorVariant="var2"
						onClick={showDefaultModalWithChildren}
					>
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
					<hr style={{ width: "100%" }} />
					<h2 id="form">Forms:</h2>
					<TestForm />
				</div>
			</ContentLayout>
		</div>
	);
};

export default TestContent;
