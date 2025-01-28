import parse from "html-react-parser";

import ErrorIcon from "@/components/icons/error/ErrorIcon";
import SuccessIcon from "@/components/icons/success/SuccessIcon";
import { useModal } from "@/features/modal/context/ModalProvider";

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
			<div className={s.content}>
				{modalConfig?.title && <h4>{parse(modalConfig.title)}</h4>}
				{modalConfig?.text && <p>{parse(modalConfig?.text)}</p>}
				{modalConfig?.children && <div>{modalConfig.children}</div>}
			</div>
		</div>
	);
};

export default DefaultModal;
