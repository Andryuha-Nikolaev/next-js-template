import s from "./Slide.module.scss";

type SlideProps = {
	id: number;
};

export const Slide = ({ id }: SlideProps) => {
	return (
		<div
			className={s.slide}
			style={{ backgroundColor: id % 2 ? "#608dff" : "#496dcb" }}
		>
			id: {id}
		</div>
	);
};
