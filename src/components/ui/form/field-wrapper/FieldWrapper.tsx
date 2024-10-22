import type React from "react";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

import s from "./FieldWrapper.module.scss";

import CloseButton from "../../buttons/close/CloseButton";
import Placeholder from "../placeholder/Placeholder";

interface FieldWrapperProps {
	name: string;
	children: React.ReactNode;
	placeholder?: string;
	label?: string;
	isRequired?: boolean;
	withClear?: boolean;
}

const FieldWrapper = ({
	name,
	children,
	placeholder,
	label,
	isRequired,
	withClear,
}: FieldWrapperProps) => {
	const {
		resetField,
		setValue,
		watch,
		formState: { errors },
	} = useFormContext();

	const isFilled = !!watch(name);

	const onReset = () => {
		resetField(name);
		setValue(name, "");
	};

	return (
		<div className={s.block}>
			{label && (
				<p className={s.labelText}>
					{label} {isRequired && <span className={s.asterisk}>*</span>}
				</p>
			)}
			<div className={s.wrap}>
				{placeholder && (
					<Placeholder
						placeholder={placeholder}
						isFilled={!!isFilled}
						withAsterisk={isRequired && !label}
					/>
				)}
				{withClear ? (
					<label className={s.label}>
						{children}
						<span className={s.controls}>
							{withClear && isFilled && (
								<CloseButton className={s.clear} onClick={onReset} />
							)}
						</span>
					</label>
				) : (
					children
				)}

				<ErrorMessage
					errors={errors}
					name={name}
					render={({ message }) => <span className={s.error}>{message}</span>}
				/>
			</div>
		</div>
	);
};

export default FieldWrapper;
