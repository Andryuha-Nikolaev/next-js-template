export function wrapFiguresInDiv(htmlString: string) {
	let resultHTML = "";
	let currentGroup = "";
	let figureCount = 0; // Счетчик фигур в текущей группе
	let isInFigureGroup = false;

	// Разбиваем строку на части, включая теги <figure> и их содержимое
	const parts = htmlString.split(/(<figure[^>]*>.*?<\/figure>)/g);

	for (const part of parts) {
		const trimmedPart = part.trim();

		if (trimmedPart === "") {
			// Пропускаем пустые строки
			continue;
		}

		if (
			trimmedPart.startsWith("<figure") &&
			trimmedPart.endsWith("</figure>")
		) {
			// Если часть начинается и заканчивается на <figure>, это полноценная фигура
			if (!isInFigureGroup) {
				// Если это начало группы, устанавливаем флаг
				isInFigureGroup = true;
			}
			currentGroup += trimmedPart;
			figureCount++; // Увеличиваем счетчик фигур
		} else {
			// Это не фигура или группа фигур закончилась
			if (isInFigureGroup) {
				// Заканчиваем текущую группу и оборачиваем её с количеством фигур
				resultHTML += `<div class="figure-wrapper" data-length="${figureCount}">${currentGroup}</div>`;
				currentGroup = ""; // Сбрасываем текущую группу
				figureCount = 0; // Сбрасываем счетчик фигур
				isInFigureGroup = false;
			}
			// Добавляем часть, которая не является частью группы фигур
			resultHTML += trimmedPart;
		}
	}

	// Добавляем оставшуюся группу, если она есть
	if (currentGroup) {
		resultHTML += `<div class="figure-wrapper" data-length="${figureCount}">${currentGroup}</div>`;
	}

	return resultHTML;
}
