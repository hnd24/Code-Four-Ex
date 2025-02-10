"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Suspense} from "react";

export default function Home() {
	const queryClient = new QueryClient();

	return (
		<Suspense>
			<QueryClientProvider client={queryClient}>
				<div className="bg-gradient-to-br from-gray-800 to-gray-900 h-screen flex flex-col text-white p-4 gap-4">
					<Header />
					<Content />
				</div>
			</QueryClientProvider>
		</Suspense>
	);
}
