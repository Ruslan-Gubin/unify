import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { DropdownSearchWrapper } from "@/src/views/DropdownSearchWrapper/DropdownSearchWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Dropdown search - My UI Kit",
  description:
    "DropdownSearch — это переиспользуемый элемент пользовательского интерфейса, реализующий комбинацию поля ввода с автодополнением и выпадающего списка для поиска и выбора одного значения из предложенных вариантов Компонент разработан в соответствии с принципами проекта my-ui-kit, используя нативные CSS-стили, семантический HTML и минимальные внешние зависимости.",
  keywords: [
    "dropdown",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function DropdownSearchPage() {
  const wrapperTsx = await readContentFile(
    "src/views/DropdownSearchWrapper/DropDownSearchWrapper.tsx",
  );
  const codeTsx = await readContentFile(
    "src/shared/ui/selects/dropdown/Dropdown_v2/DropdownSearch.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/selects/dropdown/Dropdown_v2/DropdownSearch.module.css",
  );

  const codeSvg = await readContentFile(
    "src/shared/ui/selects/dropdown/Dropdown_v2/svg/ArrowIcon.tsx",
  );

  return (
    <article className="article__page">
      <h1>{"Dropdown search"}</h1>
      <InfoBlock
        title="Описание"
        infoList={[
          {
            value:
              "Компонент Dropdown - это переиспользуемый элемент пользовательского интерфейса, реализующий выпадающий список с возможностью выбора одного из предложенных вариантов. Компонент реализован в соответствии с принципами проекта my-ui-kit, используя нативные CSS-стили и минимальные зависимости.",
          },
        ]}
      />
      <InfoBlock
        title="Структура файлов"
        infoList={[
          { label: "DropdownSearch.tsx", value: "DropdownSearch.tsx" },
          {
            label: "DropdownSearch.module.css",
            value: "DropdownSearch.module.css",
          },
          { label: "svg/ArrowIcon.tsx", value: "svg/ArrowIcon.tsx" },
        ]}
      />
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "options",
            value:
              "{ value: string; label: string }[] - массив опций для выбора, каждая из которых имеет значение и отображаемую метку",
          },
          {
            label: "onSelectMenu",
            value:
              "(value: string) => void - функция обратного вызова, вызываемая при выборе опции",
          },
          { label: "value", value: "string - текущее выбранное значение" },
          {
            label: "width?",
            value:
              "number | string - ширина компонента (необязательный параметр)",
          },
          {
            label: "menuHeight",
            value: "number - высота меню с опциями (необязательный параметр)",
          },
          {
            label: "placeholder?",
            value:
              "текст-заполнитель, отображаемый при отсутствии выбранного значения",
          },
          {
            label: "disabled?",
            value: "флаг, определяющий, отключен ли компонент",
          },
          {
            label: "inputValue",
            value: "значение поиска",
          },
          {
            label: "onChangeValue",
            value: "изменить строку поиска",
          },
        ]}
      />

      <DropdownSearchWrapper />

      {typeof wrapperTsx === "string" && (
        <CodeWrapper
          fileName="DropdownSearchWrapper.tsx"
          title="TSX"
          code={wrapperTsx}
        />
      )}

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="DropdownSearch.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="DropdownSearch.module.css"
          title="CSS"
          code={codeCss}
        />
      )}

      {typeof codeSvg === "string" && (
        <CodeWrapper fileName="ArrowIcon.tsx" title="SVG" code={codeSvg} />
      )}
    </article>
  );
}
