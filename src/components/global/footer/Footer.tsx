import ContentLayout from "@/components/layouts/content/ContentLayout";
import Social from "@/components/ui/social/Social";
import HeaderLogoIcon from "@/icons/header-logo/HeaderLogoIcon";

import FooterBottom from "./components/bottom/FooterBottom";
import FooterCatalog from "./components/catalog/FooterCatalog";
import FooterContacts from "./components/contacts/FooterContacts";
import FooterInfo from "./components/info/FooterInfo";
import s from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.block}>
			<div className={s.content}>
				<ContentLayout>
					<div className={s.contentWrap}>
						<div className={s.grid}>
							<FooterCatalog />
							<FooterInfo />
							<FooterContacts />
							<div className={s.social}>
								<Social background="dark" />
							</div>
						</div>
						<div className={s.logoBlock}>
							<div className={s.logo}>
								<HeaderLogoIcon />
							</div>
							<small className={s.copy}>© 2024 Название компании</small>
						</div>
					</div>
				</ContentLayout>
			</div>

			<ContentLayout>
				<FooterBottom />
			</ContentLayout>
		</footer>
	);
};

export default Footer;
