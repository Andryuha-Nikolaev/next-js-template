import s from "./Typography.module.scss";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const Typography = () => {
	return (
		<div className={s.block}>
			<TestPageWrapper title="Typography">
				<h1>h1 Прототип нового сервиса — это как структура</h1>
				<h2>h2 Прототип нового сервиса — это как структура</h2>
				<h3>h3 Прототип нового сервиса — это как структура</h3>
				<h4>h4 Прототип нового сервиса — это как структура</h4>
				<p>p Прототип нового сервиса — это как структура</p>
				<p className={s.additionalText}>
					p additional Прототип нового сервиса — это как структура
				</p>
				<small>small Прототип нового сервиса — это как структура</small>
				<p className={s.helperText}>
					p helper Прототип нового сервиса — это как структура
				</p>
			</TestPageWrapper>
		</div>
	);
};
