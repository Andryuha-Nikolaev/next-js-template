import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import { axiosClassic } from "@/api/interceptors";
import FileInput from "@/components/ui/form/inputs/file/FileInput";
import RootInput from "@/components/ui/form/inputs/root/RootInput";
import RootTextarea from "@/components/ui/form/inputs/textarea/RootTextarea";
import RootSelect from "@/components/ui/form/select/root/RootSelect";

import s from "./FeedbackForm.module.scss";
import {
	FIELDS,
	PLACEHOLDERS,
	RULES,
	SELECT_ITEMS,
	type IFeedbackForm,
} from "./schema/schema";

import FormWrapper from "../wrapper/FormWrapper";

const FeedbackForm = () => {
	const methods = useForm<IFeedbackForm>();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<IFeedbackForm> = (values) => {
		const formData = new FormData();

		Object.entries(values).forEach(([key, value]) => {
			if (key === `${FIELDS.FILE}` && value instanceof FileList) {
				for (let i = 0; i < value.length; i++) {
					formData.append(key, value[i]);
				}
			} else if (typeof value === "string" || value instanceof Blob) {
				formData.append(key, value);
			}
		});

		axiosClassic
			.post("feedback", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((data) => console.log(data))
			.catch((e) => console.log(e));
	};

	return (
		<div className={s.block}>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper
						isLoading={isSubmitting}
						title="Обратная связь"
						buttonText="Отправить"
					>
						<RootInput
							name={FIELDS.NAME}
							label={PLACEHOLDERS[FIELDS.NAME]}
							placeholder={PLACEHOLDERS[FIELDS.NAME]}
							options={RULES[FIELDS.NAME]}
						/>
						<RootInput
							name={FIELDS.EMAIL}
							label={PLACEHOLDERS[FIELDS.EMAIL]}
							placeholder={PLACEHOLDERS[FIELDS.EMAIL]}
							options={RULES[FIELDS.EMAIL]}
						/>
						<RootSelect
							name={FIELDS.THEME}
							label="Тема обращения"
							placeholder={PLACEHOLDERS[FIELDS.THEME]}
							items={SELECT_ITEMS}
							options={RULES[FIELDS.THEME]}
						/>
						<RootTextarea
							name={FIELDS.TEXT}
							label={PLACEHOLDERS[FIELDS.TEXT]}
							placeholder={PLACEHOLDERS[FIELDS.TEXT]}
							options={RULES[FIELDS.TEXT]}
						/>
						<FileInput
							name={FIELDS.FILE}
							options={RULES[FIELDS.FILE]}
							multiple
							fileSize="Размер загружаемых файлов должен быть не более 100МБ."
						/>
					</FormWrapper>
				</form>
			</FormProvider>
		</div>
	);
};

export default FeedbackForm;
