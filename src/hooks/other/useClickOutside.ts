import { useEffect } from "react";

type useClickOutsideProps = {
	elementRefs: React.RefObject<HTMLElement>[];
	isOpen: boolean;
	onClose: () => void;
	onListener?: boolean;
};

const useClickOutside = ({
	elementRefs,
	isOpen,
	onClose,
	onListener = true,
}: useClickOutsideProps) => {
	useEffect(() => {
		if (!onListener) {
			return;
		}

		const handleClickOutside = (event: MouseEvent) => {
			const isClickInsideAnyRef = elementRefs.some((ref) => {
				return ref.current && event.composedPath().includes(ref.current);
			});

			if (isOpen && !isClickInsideAnyRef) {
				onClose();
			}
		};

		document.body.addEventListener("click", handleClickOutside);

		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, [elementRefs, isOpen, onClose, onListener]);
};

export default useClickOutside;
