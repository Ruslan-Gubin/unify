import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
	title: "Canvas Services Types",
	description: "Canvas Services Types definition page",
});

export default async function CanvasTypesPage() {
	const canvasTypesTs = await readContentFile(
		"src/shared/services/canvas/types.ts",
	);

	return (
		<article className="article__page">
			<h1>{"Canvas Services Types"}</h1>
			<InfoBlock
				title="Типы"
				infoList={[
					{
						value: "Определения типов для служб рисования на холсте.",
					},
				]}
			/>

			{typeof canvasTypesTs === "string" && (
				<CodeWrapper
					description="Определения типов для операций рисования на холсте, включая прямые линии, прямоугольники, дуги, текст, изображения и компоненты диаграмм."
					fileName="types.ts"
					title="Canvas Types"
					code={canvasTypesTs}
				/>
			)}
		</article>
	);
}
