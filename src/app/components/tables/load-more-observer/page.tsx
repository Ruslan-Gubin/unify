import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { Cards } from "@/src/views/Cards/Cards";

export const metadata: Metadata = generateMetadata({
  title: "LoadMoreObserver page",
  description: "LoadMoreObserver page description",
});

export default async function LoadMoreObserverPage() {
  const codeTsx = await readContentFile(
    "src/shared/ui/LoadMoreObserver/LoadMoreObserver.tsx",
  );

  return (
    <article className="article__page">
      <h1>{"LoadMoreObserver"}</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "disabled",
            value: "значение, которое позволяет отключить наблюдение",
          },
          {
            label: "onIntersect",
            value:
              "функция, которая будет вызвана, когда элемент пересекается с областью просмотра",
          },
          {
            value:
              "Этот компонент особенно полезен при реализации бесконечной прокрутки или постраничной загрузки контента, когда необходимо улучшить производительность за счет постепенной загрузки данных по мере необходимости.",
          },
          {
            value:
              "Этот компонент особенно полезен при реализации бесконечной прокрутки или постраничной загрузки контента, когда необходимо улучшить производительность за счет постепенной загрузки данных по мере необходимости.",
          },
        ]}
      />
      {typeof codeTsx === "string" && (
        <CodeWrapper
          fileName="LoadMoreObserver.tsx"
          title="TSX"
          code={codeTsx}
        />
      )}
      <Cards />
    </article>
  );
}
