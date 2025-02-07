"use client";

import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {useState} from "react";
import EditorPanel from "./EditorPanel";

export default function Panel() {
	const [output, setOutput] = useState("");
	return (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-[200px] w-screen rounded-lg border ">
			<ResizablePanel defaultSize={50}>
				<EditorPanel setOutput={setOutput} />
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={50}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">OutputPanel</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
