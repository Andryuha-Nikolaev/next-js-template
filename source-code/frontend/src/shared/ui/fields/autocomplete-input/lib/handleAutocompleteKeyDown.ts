import type { KeyboardEvent } from "react";

type HandleKeyDownProps = {
	e: KeyboardEvent<HTMLInputElement>;
	activeIndex: number;
	items: string[];
	onIndexChange: (index: number) => void;
	onItemSelect: (item: string) => void;
};

export const handleAutocompleteKeyDown = ({
	e,
	activeIndex,
	items,
	onIndexChange,
	onItemSelect,
}: HandleKeyDownProps): void => {
	switch (e.code) {
		case "ArrowUp":
			e.preventDefault();
			onIndexChange(activeIndex - 1);
			break;

		case "ArrowDown":
			e.preventDefault();
			onIndexChange(activeIndex + 1);
			break;

		case "Enter":
			if (activeIndex > -1 && items[activeIndex]) {
				e.preventDefault();
				onItemSelect(items[activeIndex]);
			}
			break;

		default:
			break;
	}
};
