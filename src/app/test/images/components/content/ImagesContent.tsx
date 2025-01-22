import Image from "next/image";

import image2 from "./images/test-image-4k-2.jpg";
import image from "./images/test-image-4k.jpg";
import s from "./ImagesContent.module.scss";

const ImagesContent = () => {
	return (
		<div className={s.block}>
			<div className={s.imageWrap}>
				<Image
					alt=""
					src={image2.src}
					fill
					priority
					sizes="(max-width: 1600px) 1920px, 100vw"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<Image
				alt=""
				src={image}
				placeholder="blur"
				className={s.image}
				sizes="(max-width: 1600px) 1920px, 100vw"
				quality={90}
			/>
		</div>
	);
};

export default ImagesContent;
