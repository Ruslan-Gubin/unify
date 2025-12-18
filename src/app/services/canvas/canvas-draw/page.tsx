import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
	title: "Canvas Draw",
	description: "Canvas Draw definition page",
});

export default async function CanvasDrawPage() {
	const codeTs = await readContentFile(
		"src/shared/services/canvas/CanvasDraw.ts",
	);

	return (
		<article className="article__page">
			<h1>{"Canvas Draw"}</h1>
			{typeof codeTs === "string" && (
				<CodeWrapper
					description="Класс CanvasDraw предоставляет базовую функциональность для рисования
  примитивных фигур на HTML5 canvas, включая линии, прямоугольники, дуги,
  текст и изображения с различными стилями заливки и обводки."
					fileName="CanvasDraw.ts"
					title="TS"
					code={codeTs}
				/>
			)}
		</article>
	);
}
