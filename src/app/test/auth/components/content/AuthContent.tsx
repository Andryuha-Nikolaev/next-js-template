"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import axiosClient from "@/api/axiosClient";
import RootButton from "@/components/ui/buttons/root/RootButton";

const AuthContent = () => {
	const router = useRouter();

	const login = () => {
		axiosClient
			.post("/login")
			.then(() => {
				router.refresh();
			})
			.catch(() => {});
	};

	const logout = () => {
		axiosClient
			.post("/logout")
			.then(() => {
				router.refresh();
			})
			.catch(() => {});
	};

	const [isA, setIsA] = useState(false);

	return (
		<>
			<h1 style={{ textAlign: "center" }}>AUTH</h1>
			<RootButton onClick={() => setIsA(!isA)}>setIsA</RootButton>
			<h2>{isA ? "a" : "not a"}</h2>

			<RootButton onClick={login}>Login</RootButton>
			<RootButton onClick={logout}>Logout</RootButton>
		</>
	);
};

export default AuthContent;
