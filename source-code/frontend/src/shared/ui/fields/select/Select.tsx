"use client";

import { forwardRef } from "react";

import clsx from "clsx";
import Select from "react-select";

import type { SelectProps } from "@/shared/ui/fields/select/types";

import s from "./Select.module.scss";

import InputWrapper from "../input-wrapper/InputWrapper";

const ReactSelect = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			errorMessage,
			label,
			isRequired,
			isSearchable = false,
			isClearable = true,
			...restProps
		},
		ref
	) => {
		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div
					className={clsx(
						s.wrap,
						restProps.isDisabled && s.disabled,
						errorMessage && "react-select-error"
					)}
				>
					<Select
						noOptionsMessage={() => "Нет опций"}
						className={s.container}
						// @ts-ignore
						ref={ref}
						classNamePrefix="react-select"
						isSearchable={isSearchable}
						isClearable={isClearable}
						{...restProps}
					/>
				</div>
			</InputWrapper>
		);
	}
);

ReactSelect.displayName = "ReactSelect";

export default ReactSelect;
