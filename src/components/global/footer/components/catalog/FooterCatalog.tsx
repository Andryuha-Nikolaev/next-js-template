import Link from "next/link";

import routesConstants from "@/constants/routes";

import FooterItemWrapper from "../wrapper/FooterItemWrapper";

const FooterCatalog = () => {
	return (
		<FooterItemWrapper title={routesConstants.CATALOG.name}>
			<Link href={`${routesConstants.CATALOG.url}/auction`}>Аукционы</Link>
			<Link href={`${routesConstants.CATALOG.url}/store`}>Магазин</Link>
		</FooterItemWrapper>
	);
};

export default FooterCatalog;
