import { Accordion, AccordionItem } from "@/features/accordion";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const TestAccordion = () => {
	return (
		<TestPageWrapper title="Accordion">
			<Accordion>
				<AccordionItem question="Почему?" index={0}>
					Потому
				</AccordionItem>
				<AccordionItem question="Второй вопрос" index={1}>
					Второй ответ
				</AccordionItem>
			</Accordion>
		</TestPageWrapper>
	);
};
