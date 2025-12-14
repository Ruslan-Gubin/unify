import { type Metadata } from "next";
import { generateMetadata } from "../../core/generateMetadata";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Global CSS Styles",
  description: "Структура стилей для начала проекта.",
});

export default function StyleGlobalsPage() {
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
      <CodeWrapper
        fileName="reset.css"
        title="CSS"
        code={`:root {
  --background-body: #e5e5e5;
  --text-color-main: #171717;
  --background-pre-block: #fdfdfd;
  --color-text-code: var(--text-color-main);
  --border-radius-main: 8px;
  --row-gap-content: 8px;
  --padding-content-block: 24px;
  --gap-info-block: 20px;
  --padding-main: 32px;
  --header-size-height: 60px;
  --font-size-h1: 58px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --spectrum-gray-100: #1d1d1d;
  --media-screen-md: 880px;
  --media-screen-sm: 500px;
}

@media (max-width: 880px) {
  :root {
    --border-radius-main: 6px;
    --padding-content-block: 20px;
    --padding-main: 20px;
  }
}

@media (max-width: 500px) {
  :root {
    --border-radius-main: 4px;
    --padding-content-block: 16px;
    --gap-info-block: 16px;
    --padding-main: 32px;
    --row-gap-content: 6px;
    --padding-main: 16px;
    --font-size-h1: 36px;
    --font-size-h2: 22px;
    --font-size-h3: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-body: #0a0a0a;
    --text-color-main: #ededed;
    --background-pre-block: #1a1b26;
    --color-text-code: white;
  }
}

html,
aside {
  scrollbar-width: thin;
  scrollbar-gutter: stable;
}

body {
  background-color: var(--background-body);
  font-weight: 400;
  color: var(--text-color-main);
}

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

.article__page {
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
}
`}
      />
    </article>
  );
}
