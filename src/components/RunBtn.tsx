"use client";

import {parseAsBoolean, useQueryState} from "nuqs";
import {Button} from "./ui/button";

export default function RunBtn() {
	const [isRun, setIsRun] = useQueryState("run", parseAsBoolean.withDefault(false));

	return (
		<Button
			onClick={() => {
				setIsRun(true);
			}}
			className="bg-blue-500 text-white">
			Run Code
		</Button>
	);
}
