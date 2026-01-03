import type { Metadata } from "next";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { generateMetadata } from "../../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
    "title": "Навигационное меню - My UI Kit",
    "description": "Документация по навигационному меню в My UI Kit. Узнайте, как создавать и настраивать адаптивные меню для навигации по приложению.",
    "keywords": [
        "навигационное меню",
        "компоненты",
        "UI Kit",
        "документация",
        "React",
        "Next.js"
    ]
});

export default async function NavigateMenuPage() {
  const navigateMenuTsx = await readContentFile(
    "src/views/LayoutLeftSide/NavigateMenu/NavigateMenu.tsx",
  );

  const navigateMenuCss = await readContentFile(
    "src/views/LayoutLeftSide/NavigateMenu/NavigateMenu.module.css",
  );

  const navigateMenuHelpersTs = await readContentFile(
    "src/views/LayoutLeftSide/NavigateMenu/helpers.ts",
  );

  const LayoutLeftSideTsx = await readContentFile(
    "src/views/LayoutLeftSide/LayoutLeftSide.tsx",
  );

  const LayoutLeftSideIcon = await readContentFile(
    "src/views/LayoutLeftSide/svg/Layout/LayoutIcon.tsx",
  );

  return (
    <article className="article__page">
      <h1>Navigate menu</h1>
      <InfoBlock
        title="Меню для навигации по сайту"
        infoList={[
          {
            label: "Настраиваемые параметры",
            value:
              "наименование, путь перехода, иконка (опционально), разделитель (опционально), раскрывающий список.",
          },
          {
            label: "Иерархическая структура",
            value:
              "с поддержкой подкатегорий для создания многоуровневого меню.",
          },
          {
            label: "Визуальные элементы",
            value: "в виде иконок для улучшения восприятия контента.",
          },
          {
            label: "Адаптивная визуализация",
            value: "раскрытых списков с помощью специальных разделителей.",
          },
          {
            label: "Автоматическое определение",
            value:
              "подсветка активного текущего местоположения и открытых вкладок для пользователя на сайте",
          },
        ]}
      />
      <InfoBlock
        title="Удобство использования"
        infoList={[
          {
            value: "Четкая визуализация структуры сайта.",
          },
          {
            value: "Быстрая навигация по разделам.",
          },
          {
            value: "Комфортная работа с большим количеством контента.",
          },
          {
            value: "Понятная индикация текущего положения в системе разделов.",
          },
        ]}
      />
      {typeof navigateMenuTsx === "string" && (
        <CodeWrapper
          fileName="NavigateMenu.tsx"
          title="TSX"
          code={navigateMenuTsx}
        />
      )}
      {typeof navigateMenuCss === "string" && (
        <CodeWrapper
          fileName="NavigateMenu.module.css"
          title="CSS"
          code={navigateMenuCss}
        />
      )}
      {typeof navigateMenuHelpersTs === "string" && (
        <CodeWrapper
          description="Функция getInitSelectMap инициализирует карту активных элементов навигации при монтировании компонента, рекурсивно обходя все пункты меню и определяя текущий активный путь путём сравнения href элементов с текущим pathname."
          fileName="helpers.ts"
          title="TS"
          code={navigateMenuHelpersTs}
        />
      )}
      {typeof LayoutLeftSideTsx === "string" && (
        <CodeWrapper
          fileName="LayoutLeftSide.tsx"
          title="Пример использования"
          code={LayoutLeftSideTsx}
        />
      )}
      {typeof LayoutLeftSideIcon === "string" && (
        <CodeWrapper
          description="Передаем обязательно currentColor для активного пути."
          fileName="LayoutIcon.tsx"
          title="Пример icon"
          code={LayoutLeftSideIcon}
        />
      )}
    </article>
  );
}
