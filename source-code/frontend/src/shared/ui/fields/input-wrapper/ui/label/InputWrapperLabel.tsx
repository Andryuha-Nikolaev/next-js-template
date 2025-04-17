import s from "./InputWrapperLabel.module.scss";

export type InputWrapperLabelProps = {
	id: string | undefined;
	label: string;
	isRequired?: boolean;
};

export default function InputWrapperLabel({
	id,
	label,
	isRequired,
}: InputWrapperLabelProps) {
	return (
		<div className={s.wrap}>
			<label htmlFor={id}>
				{label}
				{isRequired && (
					<>
						{" "}
						<span className={s.asterisk}>*</span>
					</>
				)}
			</label>
		</div>
	);
}
