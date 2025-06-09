import { ContentLayout } from "$shared/layouts/content-layout";

import s from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>FOOTER</div>
			</ContentLayout>
		</footer>
	);
};
