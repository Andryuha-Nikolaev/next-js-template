import TimeIcon from "@/icons/time/TimeIcon";

import s from "./Timer.module.scss";

interface TimerProps {
	endDate: string;
}

const Timer = ({ endDate }: TimerProps) => {
	console.log(endDate);

	return (
		<div className={s.block}>
			<TimeIcon />
			<p className={s.count}>10д 20ч 15м 08с</p>
		</div>
	);
};

export default Timer;
