import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
"title": "Рисование на Canvas - My UI Kit",
    "description": "Документация по рисованию на Canvas в My UI Kit. Узнайте, как создавать и управлять элементами рисования на Canvas.",
    "keywords": [
        "Canvas",
        "рисование",
        "HTML5",
        "документация"
    ]
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
