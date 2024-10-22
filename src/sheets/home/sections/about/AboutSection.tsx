import parse from "html-react-parser";
import Image from "next/image";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import HeaderLogoIcon from "@/icons/header-logo/HeaderLogoIcon";

import s from "./AboutSection.module.scss";
import image from "./images/image.jpg";

const data = {
	image: image.src,
	content: `<p>Вот вам яркий пример современных тенденций — внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании прогресса профессионального сообщества!</p>
<br/>
<p>В своём стремлении повысить качество жизни, они забывают, что убеждённость некоторых оппонентов создаёт предпосылки для благоприятных перспектив. Есть над чем задуматься: тщательные исследования конкурентов функционально разнесены на независимые элементы.</p>`,
};

const AboutSection = () => {
	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<div className={s.first}>
						<h2 className={s.title}>О нас</h2>
						<div className={s.content}>{parse(data.content)}</div>
						<div className={s.logo}>
							<HeaderLogoIcon />
						</div>
					</div>
					<div className={s.imageWrap}>
						<Image
							className={s.image}
							src={data.image}
							alt=""
							width={966}
							height={602}
						/>
					</div>
				</div>
			</ContentLayout>
		</div>
	);
};

export default AboutSection;
