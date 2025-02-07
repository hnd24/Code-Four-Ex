import {cn} from "@/lib/utils";
import {Loader2} from "lucide-react";

export default function Loading({
	content = "Loading...",
	className,
}: {
	content?: String;
	className?: String;
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-4 h-full w-full items-center justify-center text-white",
				className,
			)}>
			<div className="animate-pulse ease-linear">
				<Loader2 className="size-28 animate-spin " />
			</div>
			<div className="text-2xl font-bold ">{content}</div>
		</div>
	);
}
