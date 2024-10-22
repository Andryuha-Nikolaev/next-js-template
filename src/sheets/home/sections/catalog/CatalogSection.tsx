import SectionLayout from "@/components/layouts/section/SectionLayout";
import ProductSlider from "@/components/ui/sliders/product/ProductSlider";
import routesConstants from "@/constants/routes";
import type { IProduct } from "@/types/product";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const data: IProduct[] = [
	{
		title: "Икона Спас Смоленский. Москва",
		subtitle: "Конец 19 века/начало 20 века",
		image: image1.src,
		created_at: "2024-09-27T13:38:22.000000Z",
		is_auction: false,
		price: 1350000,
		url: "/product1",
		end_date: "",
	},
	{
		title: "Название товара",
		subtitle: "период",
		image: image2.src,
		created_at: "2024-09-25T10:05:07.000000Z",
		is_auction: true,
		price: 100000,
		url: "/product2",
		end_date: "2024-09-27T13:38:50.000000Z",
	},
	{
		title: "Ложка, украшенная двуглавым орлом",
		subtitle: "До 1908 года",
		image: image3.src,
		created_at: "2024-09-27T13:49:47.000000Z",
		is_auction: false,
		price: 300000,
		url: "/product3",
		end_date: "",
	},
	{
		title: "Название товара",
		subtitle: "период",
		image: image4.src,
		created_at: "2024-09-27T13:38:50.000000Z",
		is_auction: true,
		price: 100000,
		url: "/product4",
		end_date: "2024-09-27T13:38:50.000000Z",
	},
	{
		title: "Икона Спас Смоленский. Москва",
		subtitle: "Конец 19 века/начало 20 века",
		image: image1.src,
		created_at: "2024-09-27T13:38:22.000000Z",
		is_auction: false,
		price: 1350000,
		url: "/product1",
		end_date: "",
	},
	{
		title: "Название товара",
		subtitle: "период",
		image: image2.src,
		created_at: "2024-09-25T10:05:07.000000Z",
		is_auction: true,
		price: 100000,
		url: "/product2",
		end_date: "2024-09-27T13:38:50.000000Z",
	},
	{
		title: "Ложка, украшенная двуглавым орлом",
		subtitle: "До 1908 года",
		image: image3.src,
		created_at: "2024-09-27T13:49:47.000000Z",
		is_auction: false,
		price: 300000,
		url: "/product3",
		end_date: "",
	},
	{
		title: "Название товара",
		subtitle: "период",
		image: image4.src,
		created_at: "2024-09-27T13:38:50.000000Z",
		is_auction: true,
		price: 100000,
		url: "/product4",
		end_date: "2024-09-27T13:38:50.000000Z",
	},
];

const CatalogSection = () => {
	return (
		<SectionLayout
			title="Каталог"
			button={{
				text: "Открыть весь каталог",
				link: routesConstants.CATALOG.url,
			}}
		>
			<ProductSlider products={data} autoplay />
		</SectionLayout>
	);
};

export default CatalogSection;
