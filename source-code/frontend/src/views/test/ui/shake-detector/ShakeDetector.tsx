/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type React from "react";
import { useEffect, useState } from "react";

// Расширяем глобальные интерфейсы для поддержки iOS
declare global {
	interface DeviceMotionEvent {
		requestPermission?: () => Promise<"granted" | "denied">;
	}
	interface DeviceOrientationEvent {
		requestPermission?: () => Promise<"granted" | "denied">;
	}
}

const ShakeDetector: React.FC = () => {
	const [permissionGranted, setPermissionGranted] = useState(false);
	const [currentForce, setCurrentForce] = useState<number>(0);
	const [minForce, setMinForce] = useState<number>(Infinity);
	const [maxForce, setMaxForce] = useState<number>(0);
	const [isIOS, setIsIOS] = useState(false);

	// Новые состояния для сенсоров
	const [acceleration, setAcceleration] = useState<{
		x: number | null;
		y: number | null;
		z: number | null;
	}>({ x: null, y: null, z: null });

	const [rotation, setRotation] = useState<{
		alpha: number | null;
		beta: number | null;
		gamma: number | null;
	}>({ alpha: null, beta: null, gamma: null });

	useEffect(() => {
		setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
	}, []);

	const requestPermission = async () => {
		try {
			// Запрос разрешения для акселерометра
			// @ts-ignore
			if (isIOS && typeof DeviceMotionEvent.requestPermission === "function") {
				// @ts-ignore
				const motionStatus = await DeviceMotionEvent.requestPermission();
				if (motionStatus !== "granted") return;
			}

			// Запрос разрешения для гироскопа
			if (
				isIOS &&
				// @ts-ignore
				typeof DeviceOrientationEvent.requestPermission === "function"
			) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const orientationStatus =
					// @ts-expect-error
					// eslint-disable-next-line @typescript-eslint/no-unsafe-call
					await DeviceOrientationEvent.requestPermission();
				if (orientationStatus !== "granted") return;
			}

			setPermissionGranted(true);
		} catch (e) {
			console.error("Permission error:", e);
		}
	};

	useEffect(() => {
		if (!permissionGranted) return;

		const handleMotion = (event: DeviceMotionEvent) => {
			// Обработка акселерометра (существующая логика)
			const accelerationWithGravity = event.accelerationIncludingGravity;
			if (accelerationWithGravity) {
				const force = Math.sqrt(
					(accelerationWithGravity.x || 0) ** 2 +
						(accelerationWithGravity.y || 0) ** 2 +
						(accelerationWithGravity.z || 0) ** 2
				);

				setCurrentForce(force);
				setMinForce((prev) => Math.min(prev, force));
				setMaxForce((prev) => Math.max(prev, force));
			}

			// Новые данные: акселерометр (без гравитации)
			setAcceleration({
				x: event.acceleration?.x ?? null,
				y: event.acceleration?.y ?? null,
				z: event.acceleration?.z ?? null,
			});
		};

		// Новый обработчик для гироскопа
		const handleOrientation = (event: DeviceOrientationEvent) => {
			setRotation({
				alpha: event.alpha,
				beta: event.beta,
				gamma: event.gamma,
			});
		};

		window.addEventListener("devicemotion", handleMotion);
		window.addEventListener("deviceorientation", handleOrientation);

		return () => {
			window.removeEventListener("devicemotion", handleMotion);
			window.removeEventListener("deviceorientation", handleOrientation);
		};
	}, [permissionGranted]);

	// Форматирование значений для отображения
	const formatSensorValue = (value: number | null) => {
		return value !== null ? value.toFixed(2) : "N/A";
	};

	return (
		<div
			style={{ fontFamily: "sans-serif", textAlign: "center", padding: "20px" }}
		>
			<h2>Детектор встряхивания</h2>

			{!permissionGranted ? (
				<button onClick={requestPermission}>
					{isIOS ? "Разрешить доступ к датчикам" : "Активировать"}
				</button>
			) : (
				<div>
					{/* Существующая секция */}
					<div style={{ fontSize: "20px", margin: "20px 0" }}>
						Сила: <strong>{currentForce.toFixed(2)} g</strong>
					</div>

					<div
						style={{
							height: "30px",
							background: "linear-gradient(90deg, #4CAF50, #FFC107, #F44336)",
							borderRadius: "15px",
							margin: "20px auto",
							maxWidth: "300px",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								left: `${Math.min(100, (currentForce / 3) * 100)}%`,
								top: "-5px",
								width: "4px",
								height: "40px",
								background: "#000",
								transform: "translateX(-50%)",
							}}
						/>
					</div>

					<div style={{ display: "flex", justifyContent: "space-around" }}>
						<div>
							<small>
								Мин: {minForce !== Infinity ? minForce.toFixed(2) : "0.00"} g
							</small>
						</div>
						<div>
							<small>Макс: {maxForce.toFixed(2)} g</small>
						</div>
					</div>

					{/* Новая секция: данные сенсоров */}
					<div
						style={{
							marginTop: "40px",
							borderTop: "1px solid #eee",
							paddingTop: "20px",
						}}
					>
						<h3>Данные датчиков</h3>

						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
							}}
						>
							<div style={{ margin: "10px", minWidth: "150px" }}>
								<h4>Акселерометр</h4>
								<div>X: {formatSensorValue(acceleration.x)} m/s²</div>
								<div>Y: {formatSensorValue(acceleration.y)} m/s²</div>
								<div>Z: {formatSensorValue(acceleration.z)} m/s²</div>
							</div>

							<div style={{ margin: "10px", minWidth: "150px" }}>
								<h4>Гироскоп</h4>
								<div>Alpha: {formatSensorValue(rotation.alpha)}°</div>
								<div>Beta: {formatSensorValue(rotation.beta)}°</div>
								<div>Gamma: {formatSensorValue(rotation.gamma)}°</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<div style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
				{isIOS && !permissionGranted
					? "⚠️ Требуется разрешение для доступа к датчикам"
					: "Встряхните телефон для измерения силы"}
			</div>
		</div>
	);
};

export default ShakeDetector;
