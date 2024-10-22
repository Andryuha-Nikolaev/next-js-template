"use client";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";
import { MODAL_ID } from "@/context/modal/constants/constants";
import { useModal } from "@/context/modal/ModalProvider";

import s from "./FeedbackSection.module.scss";

const FeedbackSection = () => {
	const { showModal } = useModal();

	const handleClick = () => {
		showModal({
			modalId: MODAL_ID.FEEDBACK_FORM,
		});
	};

	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<h2 className={s.title}>Обратная связь</h2>
					<div className={s.content}>
						<p>
							Для современного мира синтетическое тестирование требует
							определения и уточнения экономической целесообразности принимаемых
							решений. . Приятно, граждане, наблюдать, как активно развиваться.
						</p>
						<RootButton
							className={s.button}
							onClick={handleClick}
							colorVariant="var2"
						>
							Связаться
						</RootButton>
					</div>
				</div>
			</ContentLayout>
		</div>
	);
};

export default FeedbackSection;
