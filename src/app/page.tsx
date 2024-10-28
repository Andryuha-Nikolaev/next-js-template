import Link from "next/link";

export default function Home() {
	return (
		<div>
			HOME <Link href={"/test"}>TEST</Link>
		</div>
	);
}
