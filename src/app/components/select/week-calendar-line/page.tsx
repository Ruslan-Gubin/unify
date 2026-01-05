import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { WeekCalendarLine } from "@/src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine";

export const metadata: Metadata = generateMetadata({
	title: "Week calendar line - My UI Kit",
	description:
		"Документация по компоненту выбора времени (Time Select) в My UI Kit. Узнайте, как создавать и настраивать элементы выбора времени с различными функциями и возможностями.",
	keywords: [
		"select time",
		"v1",
		"компоненты",
		"UI Kit",
		"документация",
		"React",
		"Next.js",
	],
});

export default async function WeekCalendarLinePage() {
	const codeTsx = await readContentFile(
		"src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine.tsx",
	);

	const codeCss = await readContentFile(
		"src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine.module.css",
	);

	const codeSvg = await readContentFile(
		"src/shared/ui/selects/WeekCalendarLine/svg/CalendarArrowIcon.tsx",
	);

	return (
		<article className="article__page">
			<h1>Week calendar line</h1>

			<div style={{ maxWidth: "540px" }}>
				<WeekCalendarLine />
			</div>

			{typeof codeTsx === "string" && (
				<CodeWrapper fileName="SelectTime.tsx" title="TSX" code={codeTsx} />
			)}

			{typeof codeCss === "string" && (
				<CodeWrapper
					fileName="SelectTime.module.css"
					title="CSS"
					code={codeCss}
				/>
			)}

			{typeof codeSvg === "string" && (
				<CodeWrapper fileName="TimeSelectIcon.tsx" title="SVG" code={codeSvg} />
			)}
		</article>
	);
}
