import ContentLayout from "@/components/layouts/content/ContentLayout";

import s from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>FOOTER</div>
			</ContentLayout>
		</footer>
	);
};

export default Footer;
