import clsx from "clsx";

import s from "./AutocompleteList.module.scss";

type AutocompleteListProps = {
	items: string[];
	activeIndex: number;
	positionY?: "top" | "bottom";
	itemRefs: React.RefObject<HTMLLIElement[]>;
	onItemSelect: (item: string) => void;
};

export const AutocompleteList = ({
	items,
	activeIndex,
	positionY = "bottom",
	itemRefs,
	onItemSelect,
}: AutocompleteListProps) => {
	if (!items.length) return null;

	return (
		<ul className={clsx(s.list, s.open, s[positionY])}>
			{items.map((item, index) => (
				// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
				<li
					ref={(el) => {
						if (el) {
							(itemRefs.current as HTMLLIElement[])[index] = el;
						}
					}}
					key={index}
					className={clsx(s.item, activeIndex === index && s.active)}
					onMouseDown={(e) => {
						e.preventDefault();
						onItemSelect(item);
					}}
				>
					{item}
				</li>
			))}
		</ul>
	);
};
