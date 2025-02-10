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
import {useQueryState} from "nuqs";
import {useState} from "react";

export const themes = [
	{
		value: "vs-dark",
		label: "vs dark",
	},
	{
		value: "vs",
		label: "vs light",
	},
	{
		value: "Dracula",
		label: "dracula",
	},
	{
		value: "GithubDark",
		label: "github dark",
	},
	{
		value: "GithubLight",
		label: "github light",
	},
	{
		value: "CloudsMidnight",
		label: "clouds midnight",
	},
];
export default function ThemeSelector() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useQueryState("theme", {defaultValue: "vs-dark"});

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-fit min-w-[80px] justify-between">
					{value ? themes.find(theme => theme.value === value)?.label : "Select theme"}
					<ChevronsUpDown />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-fit min-w-[80px] p-0">
				<Command>
					<CommandList>
						<CommandEmpty>No theme found.</CommandEmpty>
						<CommandGroup>
							{themes.map(theme => (
								<CommandItem
									key={theme.value}
									value={theme.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}>
									{theme.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
