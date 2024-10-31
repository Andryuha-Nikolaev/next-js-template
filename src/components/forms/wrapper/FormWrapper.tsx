import type React from "react";

import parse from "html-react-parser";

import RootButton from "@/components/ui/buttons/root/RootButton";

import s from "./FormWrapper.module.scss";

interface FormWrapperProps {
	children: React.ReactNode;
	title: string;
	buttonText?: string;
	isLoading: boolean;
}

const FormWrapper = ({
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

export default FormWrapper;
