import { CloseButton } from "@/shared/ui/buttons/close";

import s from "./FileInputPreview.module.scss";

type FileInputPreviewProps = {
	previews: {
		image: string;
		name: string;
		size: number;
	}[];
	onDeleteFile: (name: string) => void;
	withPreview?: boolean;
};

const FileInputPreview = ({
	previews,
	withPreview,
	onDeleteFile,
}: FileInputPreviewProps) => {
	if (!previews.length) {
		return null;
	}

	return (
		<div className={s.previewBlock}>
			{previews.map((item) => (
				<div className={s.previewItem} key={item.name}>
					{withPreview && (
						// eslint-disable-next-line @next/next/no-img-element
						<img className={s.previewImage} src={item.image} alt="" />
					)}

					<div className={s.previewName}>
						<p className={s.fileName}>
							{item.name}{" "}
							{item.size / 1024 / 1024 >= 1
								? Number((item.size / 1024 / 1024).toFixed(2)) + " МБ"
								: Math.round(item.size / 1024) + " КБ"}
						</p>
						<CloseButton
							className={s.reset}
							onClick={() => onDeleteFile(item.name)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default FileInputPreview;
