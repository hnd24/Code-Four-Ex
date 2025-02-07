"use client";

import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import {OutputType} from "./Content";

export default function Output({output}: {output?: OutputType}) {
	const outputContent = output?.output;
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		output?.stderr ? setIsError(true) : setIsError(false);
	}, [outputContent]);
	return (
		<div
			className={cn(
				"w-full h-full bg-[#1e1e1e]  pl-4 overflow-y-hidden",
				isError ? "text-red-500" : "text-white",
			)}>
			{outputContent ? outputContent : "click run code"}
		</div>
	);
}
