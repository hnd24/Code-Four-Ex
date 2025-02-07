"use client";

import {cn} from "@/lib/utils";
import {useQueryState} from "nuqs";
import {useEffect, useState} from "react";
import {OutputType} from "./Content";
import Loading from "./Loading";

export default function Output({output}: {output?: OutputType}) {
	const outputContent = output?.output.split("\n");
	const [isError, setIsError] = useState(false);
	const [isRun] = useQueryState("run");
	useEffect(() => {
		output?.stderr ? setIsError(true) : setIsError(false);
	}, [outputContent]);
	return (
		<div
			className={cn("w-full h-full bg-[#1e1e1e]  pl-4 ", isError ? "text-red-500" : "text-white")}>
			{isRun ? (
				<Loading />
			) : (
				<div className="overflow-y-auto max-h-full">
					{outputContent
						? outputContent.map((line, index) => {
								return (
									<div key={index} className="flex">
										{line}
									</div>
								);
						  })
						: "click run code"}
				</div>
			)}
		</div>
	);
}
