import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import RunBtn from "./RunBtn";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
	return (
		<Card className="w-full flex bg-gray-900 text-white justify-between">
			<CardHeader className="p-4 flex-col justify-center hidden md:flex">
				<Link href={"/"} className="text-2xl font-bold">
					Code Four
				</Link>
			</CardHeader>
			<CardContent className="p-4 text-black flex gap-4">
				<ThemeSelector />
				<LanguageSelector />
				<RunBtn />
			</CardContent>
		</Card>
	);
}
