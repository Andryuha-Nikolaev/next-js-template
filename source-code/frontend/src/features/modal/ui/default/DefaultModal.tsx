import parse from "html-react-parser";

import { useModal } from "$features/modal/ui/ModalProvider";

import s from "./DefaultModal.module.scss";
import ErrorIcon from "./icons/error/ErrorIcon";
import SuccessIcon from "./icons/success/SuccessIcon";

const DefaultModal = () => {
	const { modalConfig } = useModal();

	return (
		<div className={s.block}>
			{modalConfig?.type && (
				<div className={s.type}>
					{modalConfig.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
				</div>
			)}
			<div className={s.content}>
				{modalConfig?.title && <h4>{parse(modalConfig.title)}</h4>}
				{modalConfig?.text && <p>{parse(modalConfig?.text)}</p>}
				{modalConfig?.children && <div>{modalConfig.children}</div>}
			</div>
		</div>
	);
};

export default DefaultModal;
