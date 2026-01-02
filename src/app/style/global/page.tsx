import type { Metadata } from "next";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { generateMetadata } from "../../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Global CSS Styles",
  description: "Структура стилей для начала проекта.",
});

export default async function StyleGlobalsPage() {
  const codeCss = await readContentFile("src/app/styles/globals.css");

  return (
    <article className="article__page">
      <h1>CSS Global</h1>
      <InfoBlock
        title="Глобальные стили"
        infoList={[
          {
            label: "Переменные",
            value: "инициализация переменных и их использование в проекте.",
          },
          {
            label: "Скролл",
            value: "настраиваем цвет, фон и размер.",
          },
          {
            label: "Медиа запросы",
            value: "легкая адаптация под разные размеры экранов.",
          },
          {
            label: "Переопределение переменных",
            value:
              "меняются цвета фона и текста, адаптируются цвета для блоков кода.",
          },
        ]}
      />
      {typeof codeCss === "string" && (
        <CodeWrapper fileName="reset.css" title="CSS" code={codeCss} />
      )}
    </article>
  );
}
