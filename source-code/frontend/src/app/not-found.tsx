import { ErrorPage } from "$views/error";

export default function NotFound() {
	return (
		<ErrorPage
			code={404}
			title="Что-то пошло не так"
			subtitle="Страница не существует или переехала"
		/>
	);
}
