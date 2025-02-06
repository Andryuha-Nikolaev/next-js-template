import { useEffect, useState } from "react";

const SHAKE_THRESHOLD = 15; // Порог ускорения для определения встряхивания
const SHAKE_TIMEOUT = 1000; // Время (в мс) для предотвращения множественных срабатываний

const useShakeDetection = () => {
	const [isShaking, setIsShaking] = useState(false);

	useEffect(() => {
		let lastUpdate = 0;
		let lastX = 0;
		let lastY = 0;
		let lastZ = 0;

		const handleMotion = (event: DeviceMotionEvent) => {
			const { x, y, z } = event.acceleration ?? { x: null, y: null, z: null };

			if (x === null || y === null || z === null) {
				console.warn(
					"Устройство не поддерживает получение данных об ускорении."
				);
				return;
			}

			const currentTime = Date.now();

			if (currentTime - lastUpdate > SHAKE_TIMEOUT) {
				const deltaX = Math.abs(x - lastX);
				const deltaY = Math.abs(y - lastY);
				const deltaZ = Math.abs(z - lastZ);

				if (
					deltaX > SHAKE_THRESHOLD ||
					deltaY > SHAKE_THRESHOLD ||
					deltaZ > SHAKE_THRESHOLD
				) {
					setIsShaking(true);
					setTimeout(() => setIsShaking(false), SHAKE_TIMEOUT); // Сброс состояния через время
				}

				lastX = x;
				lastY = y;
				lastZ = z;
				lastUpdate = currentTime;
			}
		};

		window.addEventListener("devicemotion", handleMotion);

		return () => {
			window.removeEventListener("devicemotion", handleMotion);
		};
	}, []);

	return isShaking;
};

const ShakeDetectionComponent = () => {
	const isShaking = useShakeDetection();

	return (
		<div>
			<h1>Детектор встряхивания устройства</h1>
			<p>{isShaking ? "Устройство встряхнуто!" : "Встряхните устройство"}</p>
		</div>
	);
};

export default ShakeDetectionComponent;
