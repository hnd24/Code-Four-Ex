"use client";

import {ChevronsUpDown} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import Image from "next/image";
import {useQueryState} from "nuqs";
import {useState} from "react";

export const languages = [
	{
		value: "js",
		label: "javascript",
	},
	{
		value: "ts",
		label: "typescript",
	},
];
export default function LanguageSelector() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useQueryState("language", {defaultValue: "js"});

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-fit min-w-[80px] justify-between">
					{value ? languages.find(language => language.value === value)?.label : "Select language"}
					<ChevronsUpDown />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-fit min-w-[80px] p-0">
				<Command>
					<CommandList>
						<CommandEmpty>No language found.</CommandEmpty>
						<CommandGroup>
							{languages.map(language => (
								<CommandItem
									key={language.value}
									value={language.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}>
									{language.label}

									<Image
										className="ml-auto"
										src={`/${language.label}.png`}
										alt={`/${language.label}`}
										width={20}
										height={20}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
