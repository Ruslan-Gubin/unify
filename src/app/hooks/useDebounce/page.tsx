import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
"title": "Хук useDebounce - My UI Kit",
    "description": "Документация по хуку useDebounce в My UI Kit. Узнайте, как использовать debounce для оптимизации частых вызовов функций.",
    "keywords": [
        "хук",
        "useDebounce",
        "debounce",
        "оптимизация",
        "документация"
    ]
});

export default async function UseDebouncePage() {
  const codeTs = await readContentFile("src/shared/hooks/useDebounce.ts");
  const debounceFunctionTs = await readContentFile(
    "src/shared/helpers/debounce.ts",
  );

  return (
    <article className="article__page">
      <h1>{"useDebounce"}</h1>
      <InfoBlock
        title="Описание"
        infoList={[
          {
            label: "Предотвращение частых вызовов функций",
            value:
              "Если функция вызывается несколько раз подряд, useDebounce откладывает её выполнение до тех пор, пока не пройдет определенное количество времени (задержка) без новых вызовов.",
          },
          {
            label: "Безопасность памяти",
            value:
              "Хук автоматически очищает таймеры при размонтировании компонента, предотвращая утечки памяти.",
          },
          {
            label: "Оптимизация производительности",
            value:
              "Позволяет избежать ненужных вычислений или API-запросов, что улучшает производительность приложения.",
          },
          {
            value:
              "Хук useDebounce - это кастомный React-хук, который помогает ограничить частоту вызова функций. Он особенно полезен при обработке событий, которые происходят часто, таких как ввод текста в поле, прокрутка или изменение размера окна.",
          },
        ]}
      />

      {typeof codeTs === "string" && (
        <CodeWrapper
          description=""
          fileName="useDebounce.ts"
          title="Hook"
          code={codeTs}
        />
      )}

      {typeof debounceFunctionTs === "string" && (
        <CodeWrapper
          description=""
          fileName="debounce.ts"
          title="Function"
          code={debounceFunctionTs}
        />
      )}
    </article>
  );
}
