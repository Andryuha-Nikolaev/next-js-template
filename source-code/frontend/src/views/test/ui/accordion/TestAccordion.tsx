import { Accordion, AccordionItem } from "$features/accordion";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const TestAccordion = () => {
	return (
		<TestPageWrapper title="Accordion">
			<Accordion>
				<AccordionItem question="Почему?" index={0}>
					Потому
				</AccordionItem>
				<AccordionItem question="Второй вопрос" index={1}>
					Прототип нового сервиса — это как структура Прототип нового сервиса —
					это как структура Прототип нового сервиса — это как структура Прототип
					нового сервиса — это как структура Прототип нового сервиса — это как
					структура Прототип нового сервиса — это как структура Прототип нового
					сервиса — это как структура Прототип нового сервиса — это как
					структураПрототип нового сервиса — это как структура
					<TestPageWrapper title="Accordion in accordion">
						{" "}
						<Accordion>
							<AccordionItem index={0} question="Accordion in accordion">
								Прототип нового сервиса — это как структура Прототип нового
								сервиса — это как структура Прототип нового сервиса — это как
								структура Прототип нового сервиса — это как структура Прототип
								нового сервиса — это как структура Прототип нового сервиса — это
								как структура Прототип нового сервиса — это как структура
								Прототип нового сервиса — это как структураПрототип нового
								сервиса — это как структура
							</AccordionItem>
						</Accordion>
					</TestPageWrapper>
				</AccordionItem>
			</Accordion>
		</TestPageWrapper>
	);
};
