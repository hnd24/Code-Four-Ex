"use client";

import {useGetOutput} from "@/apis/pistonApi";
import CloudsMidnight from "@/themes/CloudsMidnight.json";
import Dracula from "@/themes/Dracula.json";
import GithubDark from "@/themes/GitHubDark.json";
import GithubLight from "@/themes/GithubLight.json";
import {Editor, type Monaco} from "@monaco-editor/react";
import {parseAsBoolean, useQueryState} from "nuqs";
import {useEffect, useRef} from "react";
import {OutputType} from "./Content";
import {languages} from "./LanguageSelector";
import {themes} from "./ThemeSelector";

export default function EditorPanel({setOutput}: {setOutput?: (output: OutputType) => void}) {
	const [languageSelected] = useQueryState("language");
	const [themeSelected] = useQueryState("theme");
	const [isRun, setIsRun] = useQueryState("run", parseAsBoolean.withDefault(false));
	const {getOutput, isPending} = useGetOutput();
	const editorRef = useRef<{getValue: () => string} | null>(null);

	// Gắn editor vào ref
	const handleEditorDidMount = (editor: any, monaco: Monaco) => {
		editorRef.current = editor;
	};

	// Định nghĩa theme Dracula
	const handleBeforeMount = (monaco: Monaco) => {
		monaco.editor.defineTheme("Dracula", {
			...Dracula,
			base: "vs-dark", // Ensure base is a valid BuiltinTheme
		});
		monaco.editor.defineTheme("GithubDark", {
			...GithubDark,
			base: "vs-dark",
		});
		monaco.editor.defineTheme("GithubLight", {
			...GithubLight,
			base: "vs",
		});
		monaco.editor.defineTheme("CloudsMidnight", {
			...CloudsMidnight,
			base: "vs-dark",
		});
	};

	// Xác định ngôn ngữ đang dùng
	const language = languages.find(l => l.value === languageSelected)?.value || "javascript";

	// Xác định theme đang dùng
	const theme = themes.find(t => t.value === themeSelected)?.value || "vs-dark";

	// Hàm chạy code
	async function runCode() {
		try {
			if (!editorRef.current) {
				return;
			}
			const srcCode = editorRef.current.getValue();
			const output = await getOutput({srcCode, language: languageSelected || "js"});
			setOutput?.(output.run);
			console.log("output", output);

			setIsRun(false);
		} catch (error) {
			console.error("Error running code:", error);
		}
	}

	// Chạy code khi `isRun` thay đổi
	useEffect(() => {
		if (isRun) {
			runCode();
		}
	}, [isRun]);

	return (
		<div className="w-full h-full">
			<Editor
				className="w-full h-full"
				theme={theme} // Sử dụng theme Dracula
				defaultLanguage="javascript"
				language={language}
				defaultValue="// some code"
				beforeMount={handleBeforeMount} // Gọi trước khi mount để định nghĩa theme
				onMount={handleEditorDidMount} // Gọi khi mount để lưu editor vào ref
			/>
		</div>
	);
}
