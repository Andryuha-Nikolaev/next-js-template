import s from "./Placeholder.module.scss";

interface PlaceholderProps {
	placeholder?: string;
	withAsterisk?: boolean;
	isFilled: boolean;
}

const Placeholder = ({
	isFilled,
	withAsterisk,
	placeholder,
}: PlaceholderProps) => {
	if (!!isFilled || !placeholder) {
		return null;
	}

	return (
		<span className={s.placeholder}>
			{placeholder} {withAsterisk && <span className={s.asterisk}>*</span>}
		</span>
	);
};

export default Placeholder;
