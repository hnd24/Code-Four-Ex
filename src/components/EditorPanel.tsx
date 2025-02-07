"use client";

import {useGetOutput} from "@/apis/pistonApi";
import Editor from "@monaco-editor/react";
import {parseAsBoolean, useQueryState} from "nuqs";
import {useEffect, useRef} from "react";
import {OutputType} from "./Content";
import {languages} from "./LanguageSelector";
export default function EditorPanel({
	setOutput,

}: {
	setOutput?: (output: OutputType) => void;
}) {
	const [value] = useQueryState("language");
	const [isRun, setIsRun] = useQueryState("run", parseAsBoolean.withDefault(false));
	const {getOutput, isPending} = useGetOutput();
	const editorRef = useRef<{getValue: () => string} | null>(null);

	function handleEditorDidMount(editor: any, monaco: any) {
		editorRef.current = editor;
	}

	const language = languages.find(l => l.value === value)?.value || "javascript";

	async function runCode() {
		try {
			if (!editorRef.current) {
				return;
			}
			const srcCode = editorRef.current.getValue();
			const output = await getOutput({srcCode, language: value || "js"});
			setOutput?.(output.run);
			console.log("output", output);

			setIsRun(false);
		} catch (error) {
			// console.error(error);
		}
	}

	useEffect(() => {
		if (isRun) {
			runCode();
		}
	}, [isRun]);

	return (
		<div className="w-full h-full">
			<Editor
				className="w-full h-full"
				theme="vs-dark"
				defaultLanguage="javascript"
				language={`${language}`}
				defaultValue="// some code"
				onMount={handleEditorDidMount}
			/>
		</div>
	);
}
