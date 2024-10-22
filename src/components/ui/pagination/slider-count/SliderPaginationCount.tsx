import s from "./SliderPaginationCount.module.scss";

interface SliderPaginationCountProps {
	current: number;
	total: number;
}

const SliderPaginationCount = ({
	current,
	total,
}: SliderPaginationCountProps) => {
	return (
		<div className={s.block}>
			<p className={s.current}> {current}</p>
			<p>/</p>
			<p>{total}</p>
		</div>
	);
};

export default SliderPaginationCount;
