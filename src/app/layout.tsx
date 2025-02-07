
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {NuqsAdapter} from "nuqs/adapters/next";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Code Four",
		default: "Code Four",
	},
	description: "website for developers, by developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NuqsAdapter>
					{children}
				</NuqsAdapter>
			</body>
		</html>
	);
}
