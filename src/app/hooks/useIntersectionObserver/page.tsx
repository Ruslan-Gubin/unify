import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Hook useIntersectionObserver Page",
  description: "Hook useIntersectionObserver Page description",
});

export default async function UseIntersectionObserverPage() {
  const hooksTs = await readContentFile(
    "src/shared/hooks/useIntersectionObserver.ts",
  );

  return (
    <article className="article__page">
      <h1>{"useIntersectionObserver"}</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "target",
            value:
              "Элемент DOM, за которым нужно наблюдать. Обычно передается через ref.",
          },
          {
            label: "onIntersect",
            value:
              "Функция обратного вызова, которая будет вызвана, когда целевой элемент пересекает область видимости.",
          },
          {
            label: "threshold",
            value:
              "Число или массив чисел, определяющих, при каком проценте видимости элемента должен сработать наблюдатель. По умолчанию 0.",
          },
          {
            label: "root",
            value:
              "Элемент, который используется в качестве области просмотра для проверки пересечения. По умолчанию null (означает область просмотра браузера).",
          },
          {
            label: "rootMargin",
            value:
              "Пространство вокруг области root. Может иметь значения, аналогичные CSS margin. По умолчанию '0%'.",
          },
          {
            label: "disabled",
            value:
              "Флаг, который позволяет отключить наблюдение. По умолчанию false.",
          },
        ]}
      />
      <InfoBlock
        title="Возвращаемое значение"
        infoList={[
          {
            label: "disconnect",
            value: "Функция, которая позволяет вручную отключить наблюдатель.",
          },
          {
            label: "observe",
            value:
              "Функция, которая позволяет вручную начать наблюдение за элементом.",
          },
        ]}
      />
      {typeof hooksTs === "string" && (
        <CodeWrapper
          fileName="useIntersectionObserver.ts"
          title="Hook"
          code={hooksTs}
        />
      )}
    </article>
  );
}
