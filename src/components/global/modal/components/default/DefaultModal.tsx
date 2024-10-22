import parse from "html-react-parser";

import { useModal } from "@/context/modal/ModalProvider";
import ErrorIcon from "@/icons/error/ErrorIcon";
import SuccessIcon from "@/icons/success/SuccessIcon";

import s from "./DefaultModal.module.scss";

const DefaultModal = () => {
	const { modalConfig } = useModal();

	return (
		<div className={s.block}>
			{modalConfig?.type && (
				<div className={s.type}>
					{modalConfig.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
				</div>
			)}
			{modalConfig?.title && <h4>{parse(modalConfig.title)}</h4>}
			{modalConfig?.text && <p>{parse(modalConfig?.text)}</p>}
		</div>
	);
};

export default DefaultModal;
