"use client";

import { forwardRef } from "react";

import Select from "react-select";

import type { SelectProps } from "@/types/form/select";

import s from "./Select.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const ReactSelect = forwardRef<HTMLDivElement, SelectProps>(
	(
		{ errorMessage, label, isRequired, isSearchable = false, ...restProps },
		ref
	) => {
		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<Select
					className={s.container}
					// @ts-ignore
					ref={ref}
					classNamePrefix="react-select"
					isSearchable={isSearchable}
					{...restProps}
				/>
			</InputWrapper>
		);
	}
);

ReactSelect.displayName = "ReactSelect";

export default ReactSelect;
