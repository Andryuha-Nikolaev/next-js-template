import Hero from "./hero/Hero";
import s from "./Home.module.scss";

export const HomePage = () => {
	return (
		<div className={s.block}>
			<Hero />
		</div>
	);
};
