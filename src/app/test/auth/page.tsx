"use client";

import { useRouter } from "next/navigation";

import { axiosClient } from "@/api/interceptors";
import RootButton from "@/components/ui/buttons/root/RootButton";

export default function Auth() {
	const router = useRouter();

	const login = () => {
		axiosClient
			.post("/login")
			.then((data) => {
				router.refresh();

				console.log(data.data);
			})
			.catch(() => {});
	};

	const logout = () => {
		axiosClient
			.post("/logout")
			.then((data) => {
				router.refresh();
				console.log(data.data);
			})
			.catch(() => {});
	};

	return (
		<>
			<h1 style={{ textAlign: "center" }}>AUTH</h1>
			<RootButton onClick={login}>Login</RootButton>
			<RootButton onClick={logout}>Logout</RootButton>
		</>
	);
}
