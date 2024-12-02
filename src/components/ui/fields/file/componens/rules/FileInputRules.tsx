import parse from "html-react-parser";

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
				>{`${fileSize ? `${parse(fileSize) as string} ` : ""}${fileFormat ? (parse(fileFormat) as string) : ""}`}</p>
			)}
		</div>
	);
};

export default FileInputRules;
