import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
"title": "Хук useWindowSize - My UI Kit",
    "description": "Документация по хуку useWindowSize в My UI Kit. Узнайте, как отслеживать размеры окна браузера и реагировать на их изменения.",
    "keywords": [
        "хук",
        "useWindowSize",
        "размер окна",
        "браузер",
        "документация"
    ]
});

export default async function UseWindowSizePage() {
  const hookUseWindowSize = await readContentFile(
    "src/shared/hooks/useWindowSize.ts",
  );

  return (
    <article className="article__page">
      <h1>{"useWindowSize"}</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "ms",
            value: "Необязательный параметр. Количество миллисекунд для debounce изменения размера окна. По умолчанию 300.",
          },
        ]}
      />
      <InfoBlock
        title="Возвращаемое значение"
        infoList={[
          {
            label: "width",
            value: "Ширина окна браузера.",
          },
          {
            label: "height",
            value: "Высота окна браузера.",
          },
        ]}
      />

      {typeof hookUseWindowSize === "string" && (
        <CodeWrapper
          description=""
          fileName="useWindowSize.ts"
          title="Hook"
          code={hookUseWindowSize}
        />
      )}
    </article>
  );
}
