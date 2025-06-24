"use client";

import type React from "react";
import {
	createContext,
	Suspense,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

import type { ModalConfigProps, ModalProps } from "$features/modal/model/types";
import Modal from "$features/modal/ui/Modal";
import useChangeQueryParams from "$shared/hooks/query-params/useChangeQueryParams";

import { ModalSearchParams } from "../config/constants";

const ModalContext = createContext<ModalProps>({
	modalConfig: null,
	hideModal: () => {},
	showModal: () => {},
	showSuccessModal: () => {},
	showErrorModal: () => {},
	isShown: false,
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalConfig, setModalConfig] = useState<ModalConfigProps>(null);
	const [isShown, setIsShown] = useState(false);

	const showModal = (config: ModalConfigProps) => {
		setModalConfig(config);
		setTimeout(() => {
			setIsShown(true);
		}, 10);
	};

	const showSuccessModal = (config?: ModalConfigProps) => {
		showModal({
			type: "success",
			...config,
		});
	};

	const showErrorModal = (config?: ModalConfigProps) => {
		showModal({
			type: "error",
			...config,
		});
	};

	const handleChangeParams = useChangeQueryParams();

	const hideModal = useCallback(() => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 200);

		const params = new URLSearchParams(window.location.search);
		const modalQuery = params.get(ModalSearchParams.ACTION);

		if (modalQuery) {
			params.delete(ModalSearchParams.ACTION);
			params.delete(ModalSearchParams.TOKEN);
			handleChangeParams(params.toString(), "replace");
		}

		console.log("aaaaa");

		if (modalConfig?.onHideCallback) {
			modalConfig.onHideCallback();
		}
	}, [handleChangeParams, modalConfig]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isShown) {
				const target = e.target as HTMLElement;
				if (target.blur) {
					target.blur();
				}

				hideModal();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isShown, hideModal]);

	return (
		<ModalContext.Provider
			value={{
				modalConfig,
				showModal,
				showSuccessModal,
				showErrorModal,
				hideModal,
				isShown,
			}}
		>
			{children}
			<Suspense>
				<Modal />
			</Suspense>
		</ModalContext.Provider>
	);
};
