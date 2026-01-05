import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { CheckboxWrapper } from "@/src/views/CheckboxWrapper/CheckboxWrapper";

export const metadata: Metadata = generateMetadata({
	title: " - My UI Kit",
	description:
		"Документация поля ввода в My UI Kit. Узнайте, как использовать и настраивать базовую версию поля ввода.",
	keywords: [
		"поле ввода",
		"v2",
		"компоненты",
		"UI Kit",
		"документация",
		"React",
		"Next.js",
	],
});

export default async function CheckboxAnimatePage() {
	const codeTsx = await readContentFile(
		"src/shared/ui/checkbox/CheckboxAnimate/CheckboxAnimate.tsx",
	);

	const codeCss = await readContentFile(
		"src/shared/ui/checkbox/CheckboxAnimate/CheckboxAnimate.module.css",
	);

	return (
		<article className="article__page">
			<h1>{"CheckboxAnimate"}</h1>
			<InfoBlock
				title="Параметры"
				infoList={[
					{
						label: "label",
						value: "Текст лейбла (подписи) над полем ввода.",
					},
				]}
			/>

			<CheckboxWrapper />

			{typeof codeTsx === "string" && (
				<CodeWrapper
					fileName="CheckboxAnimate.tsx"
					title="TSX"
					code={codeTsx}
				/>
			)}

			{typeof codeCss === "string" && (
				<CodeWrapper
					fileName="CheckboxAnimate.module.css"
					title="CSS"
					code={codeCss}
				/>
			)}
		</article>
	);
}
