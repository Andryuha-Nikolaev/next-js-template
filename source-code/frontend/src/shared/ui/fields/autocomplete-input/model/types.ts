import type { InputProps } from "../../input";

export type AutocompleteInputProps = InputProps & {
	autoCompleteProps?: {
		items: string[];
		offFilterByValue?: boolean;
		positionY?: "top" | "bottom";
		listMaxHeight?: number;
	};
};

export type RHFAutocompleteInputProps = Omit<
	AutocompleteInputProps,
	"onChange"
> & {
	name: string;
	onInputChange?: (value: string) => void;
};
