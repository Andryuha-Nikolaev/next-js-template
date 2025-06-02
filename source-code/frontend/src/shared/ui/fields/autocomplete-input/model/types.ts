import type { InputProps } from "../../input";

export type AutocompleteInputProps = InputProps & {
	autoCompleteProps?: {
		items: string[];
		filterByValue: boolean;
		positionY?: "top" | "bottom";
	};
};

export type RHFAutocompleteInputProps = Omit<
	AutocompleteInputProps,
	"onChange"
> & {
	name: string;
	onInputChange?: (value: string) => void;
};
