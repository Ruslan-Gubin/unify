import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
	title: "Canvas Draw Graph",
	description: "Canvas Draw definition page",
});

export default async function CanvasDrawGraphPage() {
	const codeTs = await readContentFile(
		"src/shared/services/canvas/CanvasDrawGraph.ts",
	);

	return (
		<article className="article__page">
			<h1>{"Canvas Draw Graph"}</h1>
			{typeof codeTs === "string" && (
				<CodeWrapper
					description="Класс CanvasDrawGraph предоставляет функциональность для отрисовки графиков на canvas. Включает методы для создания сетки, расчета процентов и высоты значений, а также вспомогательные функции для отображения данных в виде графиков."
					fileName="CanvasDrawGraph.ts"
					title="TS"
					code={codeTs}
				/>
			)}
		</article>
	);
}
