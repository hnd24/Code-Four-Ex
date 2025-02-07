import Header from "@/components/Header";
import Panel from "@/components/Content";

export default function Home() {
	return (
		<div className="bg-gradient-to-br from-gray-800 to-gray-900 h-screen flex flex-col text-white p-4 gap-4">
			<Header />

			<Panel />
		</div>
	);
}
