import type React from "react";
import { useEffect, useState } from "react";

// Расширяем глобальный интерфейс для поддержки iOS
declare global {
	interface DeviceMotionEvent {
		requestPermission?: () => Promise<"granted" | "denied">;
	}
}

const ShakeDetector: React.FC = () => {
	const [permissionGranted, setPermissionGranted] = useState(false);
	const [currentForce, setCurrentForce] = useState<number>(0);
	const [minForce, setMinForce] = useState<number>(Infinity);
	const [maxForce, setMaxForce] = useState<number>(0);
	const [isIOS, setIsIOS] = useState(false);

	useEffect(() => {
		//@ts-ignore
		setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
	}, []);

	// Исправленная функция с правильной типизацией
	const requestPermission = async () => {
		// Для iOS с поддержкой requestPermission\
		//@ts-ignore
		if (isIOS && typeof DeviceMotionEvent.requestPermission === "function") {
			try {
				//@ts-ignore
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
				const status = await DeviceMotionEvent.requestPermission();
				setPermissionGranted(status === "granted");
			} catch (e) {
				console.error("Permission error:", e);
			}
		}
		// Для Android и других браузеров
		else {
			setPermissionGranted(true);
		}
	};

	useEffect(() => {
		if (!permissionGranted) return;

		const handleMotion = (event: DeviceMotionEvent) => {
			const acceleration = event.accelerationIncludingGravity;
			if (!acceleration) return;

			const force = Math.sqrt(
				(acceleration.x || 0) ** 2 +
					(acceleration.y || 0) ** 2 +
					(acceleration.z || 0) ** 2
			);

			setCurrentForce(force);
			setMinForce((prev) => Math.min(prev, force));
			setMaxForce((prev) => Math.max(prev, force));
		};

		window.addEventListener("devicemotion", handleMotion);
		return () => window.removeEventListener("devicemotion", handleMotion);
	}, [permissionGranted]);

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
				</div>
			)}

			<div style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
				{isIOS && !permissionGranted
					? "⚠️ Требуется разрешение для доступа к акселерометру"
					: "Встряхните телефон для измерения силы"}
			</div>
		</div>
	);
};

export default ShakeDetector;
