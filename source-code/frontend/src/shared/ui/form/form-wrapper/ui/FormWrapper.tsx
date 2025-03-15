import parse from "html-react-parser";

import s from "./FormWrapper.module.scss";

import { RootButton } from "../../../buttons/root";
import type { FormWrapperProps } from "../model/types";

export const FormWrapper = ({
	children,
	title,
	buttonText = "Отправить",
	isLoading,
}: FormWrapperProps) => {
	return (
		<div className={s.block}>
			<h3 className={s.title}>{parse(title)}</h3>
			<div className={s.content}>
				<div className={s.fields}>{children}</div>
				<RootButton isLoading={isLoading} className={s.button} type="submit">
					{buttonText}
				</RootButton>
			</div>
		</div>
	);
};
