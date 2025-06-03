import clsx from "clsx";

import s from "./AutocompleteList.module.scss";

type AutocompleteListProps = {
	items: string[];
	activeIndex: number;
	positionY?: "top" | "bottom";
	itemRefs: React.RefObject<HTMLLIElement[]>;
	onItemSelect: (item: string) => void;
	setActiveIndex: (item: number) => void;
	listMaxHeight?: number;
};

export const AutocompleteList = ({
	items,
	activeIndex,
	positionY = "bottom",
	itemRefs,
	onItemSelect,
	setActiveIndex,
	listMaxHeight = 210,
}: AutocompleteListProps) => {
	if (!items.length) return null;

	return (
		<ul
			className={clsx(s.list, s[positionY])}
			style={{ maxHeight: listMaxHeight }}
		>
			{items.map((item, index) => (
				// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
				<li
					ref={(el) => {
						if (el) {
							(itemRefs.current as HTMLLIElement[])[index] = el;
						}
					}}
					key={item}
					className={clsx(s.item, activeIndex === index && s.active)}
					onMouseDown={(e) => {
						e.preventDefault();
						onItemSelect(item);
					}}
					onMouseMove={() => {
						setActiveIndex(index);
					}}
				>
					{item}
				</li>
			))}
		</ul>
	);
};
