import s from "./FileInputRules.module.scss";

interface FileInputRulesProps {
	fileSize?: string;
	fileFormat?: string;
}

const FileInputRules = ({ fileSize, fileFormat }: FileInputRulesProps) => {
	return (
		<div className={s.block}>
			{(fileSize || fileFormat) && (
				<p
					className={s.rules}
				>{`${fileSize ? `${fileSize} ` : ""}${fileFormat ? fileFormat : ""}`}</p>
			)}
		</div>
	);
};

export default FileInputRules;
