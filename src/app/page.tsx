import type { Metadata } from "next";
import { NotDataIcon } from "../shared/svg/NotDataIcon/NotDataIcon";
import { EmptyContent } from "../shared/ui/EmptyContent/EmptyContent";
import { InfoBlock } from "../shared/ui/InfoBlock/InfoBlock";
import { generateMetadata } from "./core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "My UI Kit - Сборник переиспользуемых компонентов",
  description:
    "My UI Kit - это коллекция часто используемых UI-компонентов, хуков и рецептов для создания оптимизированного кода с использованием нативного CSS и Canvas API.",
});

export default function Home() {

  return (
    <article className="article__page">
      <h1>My UI Kit</h1>
      <EmptyContent>
        <NotDataIcon />
      </EmptyContent>
      <p>
        Добро пожаловать в My UI Kit - сборник часто используемых
        UI-компонентов, полезных хуков и рецептов для написания
        оптимизированного кода с использованием нативного CSS стиля, без сложных
        решений.
      </p>
      <InfoBlock
        title="Возможности"
        infoList={[
          {
            label: "Компоненты",
            value:
              "Набор переиспользуемых UI-компонентов (кнопки, поля ввода, модальные окна и др.)",
          },
          {
            label: "Хуки",
            value:
              "Полезные React-хуки для управления состоянием и побочными эффектами",
          },
          {
            label: "Стилизация",
            value:
              "Работа с нативным CSS, включая CSS Variables, Container Queries и другие современные возможности",
          },
          {
            label: "Canvas",
            value:
              "Примеры работы с Canvas API для рисования и анимации без внешних библиотек",
          },
          {
            label: "Оптимизация",
            value:
              "Рецепты для написания производительного и оптимизированного кода",
          },
        ]}
      />
      <InfoBlock
        title="Полезные ресурсы"
        infoList={[
          {
            label: "Документация",
            value: "Подробная документация по каждому компоненту и хуку",
          },
          {
            label: "Примеры",
            value:
              "Готовые примеры использования компонентов в различных сценариях",
          },
          {
            label: "Рецепты",
            value: "Практические решения часто встречающихся задач",
          },
          {
            value:
              "My UI Kit создан с целью упростить разработку интерфейсов, предоставив готовые решения для часто встречающихся задач. Все компоненты разработаны с использованием современных технологий и подходов, таких как Next.js 16, React 19, TypeScript и нативный CSS.",
          },
        ]}
      />
    </article>
  );
}
