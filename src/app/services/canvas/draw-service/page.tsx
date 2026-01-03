import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
  "title": "Сервисы Canvas - My UI Kit",
    "description": "Документация по сервисам Canvas в My UI Kit. Узнайте, как использовать встроенные сервисы для работы с Canvas, включая буферизацию и офлайн-рендеринг.",
    "keywords": [
        "Canvas",
        "сервисы",
        "буферизация",
        "офлайн-рендеринг",
        "HTML5",
        "документация"
    ]
});

export default async function CanvasServicesPage() {
  const codeTs = await readContentFile(
    "src/shared/services/canvas/DrawService.ts",
  );

  return (
    <article className="article__page">
      <h1>{"Canvas services"}</h1>
      {typeof codeTs === "string" && (
        <CodeWrapper
          description="Сервис для работы с 2D-канвой: конвертация градусов в радианы, отрисовка
  заливки и границ фигур"
          fileName="CanvasDrawGraph.ts"
          title="TS"
          code={codeTs}
        />
      )}
    </article>
  );
}
