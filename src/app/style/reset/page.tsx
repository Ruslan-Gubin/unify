import type { Metadata } from "next";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { generateMetadata } from "../../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Resetting CSS Styles",
  description:
    "Эффективный сброс CSS стилей для кроссбраузерной вёрстки. Изучите лучшие практики, получите готовые шаблоны и научитесь создавать универсальные стили для вашего сайта.",
});

export default async function StyleResetPage() {
  const codeCss = await readContentFile("src/app/styles/reset.css");

  return (
    <article className="article__page">
      <h1>CSS Reset</h1>
      <InfoBlock
        title="Что такое CSS Reset?"
        infoList={[
          {
            label: "CSS Reset ",
            value:
              "это набор стилей, который позволяет устранить различия в отображении HTML-элементов между разными браузерами. Он обеспечивает единообразный внешний вид веб-контента путем нейтрализации стилей по умолчанию.",
          },
        ]}
      />
      <InfoBlock
        title="Зачем нужен CSS Reset?"
        infoList={[
          {
            label: "Кроссбраузерная совместимость",
            value:
              "Гарантирует одинаковое отображение элементов во всех браузерах",
          },
          {
            label: "Полный контроль",
            value:
              "Даёт разработчикам возможность создавать стили с чистого листа",
          },
          {
            label: "Оптимизация",
            value:
              "Упрощает процесс разработки за счет стандартизированной базы",
          },
        ]}
      />
      <InfoBlock
        title="Основные преимущества"
        infoList={[
          {
            value: "Устранение различий в стилях по умолчанию.",
          },

          {
            value: "Повышение предсказуемости поведения элементов.",
          },
          {
            value: "Уменьшение времени на настройку базовых стилей.",
          },
          {
            value: "Улучшение процесса поддержки кода.",
          },
        ]}
      />
      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="reset.css"
          title="CSS"
          description="Создайте отдельный файл reset.css"
          code={codeCss}
        />
      )}
      <CodeWrapper
        description="Подключите файл в HTML документе или в layout приложения, убедитесь что reset.css подключается первым в списке стилей"
        fileName="layout.tsx"
        title="Пример использования"
        code={`<link rel="stylesheet" href="css/reset.css">
// или
import "./reset.css";`}
      />
    </article>
  );
}
