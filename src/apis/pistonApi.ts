import {useMutation} from "@tanstack/react-query";
import axios from "axios";
const API = axios.create({
	baseURL: "https://emkc.org/api/v2/piston",
});

export const pistonApi = async ({srcCode, language}: {srcCode: string; language: string}) => {
	const response = await API.post("/execute", {
		"language": language,
		"version": "18.15.0",
		"files": [
			{
				"name": `run.${language}`,
				"content": srcCode,
			},
		],
	});
	return response.data;
};

export const useGetOutput = () => {
	const getOutputRequest = async ({srcCode, language}: {srcCode: string; language: string}) => {
		const response = await API.post("/execute", {
			language,
			version: "18.15.0",
			files: [
				{
					name: `run.${language}`,
					content: srcCode,
				},
			],
		});
		return response.data;
	};

	const {mutateAsync: getOutput, isPending} = useMutation({
		mutationFn: getOutputRequest,
	});

	return {getOutput, isPending};
};
