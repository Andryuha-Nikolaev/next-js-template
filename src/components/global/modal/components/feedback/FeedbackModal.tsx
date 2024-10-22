import FeedbackForm from "@/components/forms/feedback/FeedbackForm";

import s from "./FeedbackModal.module.scss";

const FeedbackModal = () => {
	return (
		<div className={s.block}>
			<FeedbackForm />
		</div>
	);
};

export default FeedbackModal;
