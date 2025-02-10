"use client";

import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {useIsMobile} from "@/hooks/use-mobile";
import {useState} from "react";
import EditorPanel from "./EditorPanel";
import Output from "./Output";

export type OutputType = {
	code: number;
	stdout: string;
	stderr: string;
	output: string;
	signal: any;
};

export default function Content() {
	const [output, setOutput] = useState<OutputType>({
		code: 0,
		stdout: "",
		stderr: "",
		output: "",
		signal: null,
	});

	const isMobile = useIsMobile();
	return (
		<ResizablePanelGroup
			direction={isMobile ? "vertical" : "horizontal"}
			className="min-h-[200px] w-screen rounded-lg border ">
			<ResizablePanel defaultSize={75}>
				<EditorPanel setOutput={setOutput} />
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={25}>
				<Output output={output}  />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
