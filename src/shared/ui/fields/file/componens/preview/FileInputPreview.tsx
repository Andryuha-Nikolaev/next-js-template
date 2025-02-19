import CloseButton from "@/shared/ui/buttons/close/CloseButton";

import s from "./FileInputPreview.module.scss";

interface FileInputPreviewProps {
	previews: {
		image: string;
		name: string;
		size: number;
	}[];
	onDeleteFile: (name: string) => void;
	withPreview?: boolean;
}

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
			{previews.map((item, i) => (
				<div className={s.previewItem} key={i}>
					{withPreview && (
						// eslint-disable-next-line @next/next/no-img-element
						<img className={s.previewImage} src={item.image} alt="" />
					)}

					<div className={s.previewName}>
						<p className={s.fileName}>
							{item.name}{" "}
							{Math.round(item.size / 1024 / 1024) > 1
								? Math.round(item.size / 1024 / 1024) + " Мб"
								: Math.round(item.size / 1024) + " Кб"}
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
