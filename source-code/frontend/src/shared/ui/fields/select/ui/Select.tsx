"use client";

import { forwardRef } from "react";

import clsx from "clsx";
import Select, { type GroupBase, type SelectInstance } from "react-select";

import type { SelectProps } from "$shared/ui/fields/select/model/types";

import s from "./Select.module.scss";

import { InputWrapper } from "../../input-wrapper";

export const ReactSelect = forwardRef<
	SelectInstance<unknown, boolean, GroupBase<unknown>>,
	SelectProps
>(
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
