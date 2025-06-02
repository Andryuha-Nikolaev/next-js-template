"use client";

import { forwardRef, useRef, useState } from "react";

import s from "./AutocompleteInput.module.scss";
import { AutocompleteList } from "./list/AutocompleteList";

import { Input } from "../../input";
import { handleAutocompleteKeyDown } from "../lib/handleAutocompleteKeyDown";
import type { AutocompleteInputProps } from "../model/types";

export const AutocompleteInput = forwardRef<
	HTMLInputElement,
	AutocompleteInputProps
>(({ onChange, onInput, onBlur, value, autoCompleteProps, ...props }, ref) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const [isOpen, setIsOpen] = useState(false);
	const itemRefs = useRef<HTMLLIElement[]>([]);

	const filteredItems = autoCompleteProps
		? !autoCompleteProps.offFilterByValue
			? autoCompleteProps.items.filter((item) =>
					item.trim().toLowerCase().includes(String(value).trim().toLowerCase())
				)
			: autoCompleteProps.items
		: [];

	const scrollToActiveItem = (index: number) => {
		if (itemRefs.current[index]) {
			itemRefs.current[index].scrollIntoView({
				behavior: "instant",
				block: "nearest",
			});
		}
	};

	const handleItemChange = (index: number) => {
		if (index >= -1 && index < filteredItems.length) {
			setActiveIndex(index);
			scrollToActiveItem(index > -1 ? index : 0);
		}
	};

	const handleItemSelect = (item: string) => {
		setIsOpen(false);
		onChange?.({
			target: { value: item },
		} as React.ChangeEvent<HTMLInputElement>);
		setActiveIndex(-1);
	};

	const toggleAutoComplete = (value: string) => {
		setIsOpen(value.length > 1);
		handleItemChange(-1);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (filteredItems.length) {
			handleAutocompleteKeyDown({
				e,
				activeIndex,
				items: filteredItems,
				onIndexChange: handleItemChange,
				onItemSelect: handleItemSelect,
			});
		}
	};

	return (
		<div className={s.wrap}>
			<Input
				ref={ref}
				value={value}
				onChange={(e) => {
					toggleAutoComplete(e.target.value);
					onChange?.(e);
				}}
				onInput={(e) => {
					toggleAutoComplete(e.currentTarget.value);
					onInput?.(e);
				}}
				onBlur={(e) => {
					setIsOpen(false);
					onBlur?.(e);
				}}
				onKeyDown={handleKeyDown}
				{...props}
			/>

			{isOpen && (
				<AutocompleteList
					items={filteredItems}
					activeIndex={activeIndex}
					positionY={autoCompleteProps?.positionY}
					itemRefs={itemRefs}
					onItemSelect={handleItemSelect}
					listMaxHeight={autoCompleteProps?.listMaxHeight}
				/>
			)}
		</div>
	);
});

AutocompleteInput.displayName = "AutocompleteInput";
