import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { PaginationWrapperV2 } from "@/src/views/PaginationWrapper/PaginationWrapperV2/PaginationWrapperV2";

export const metadata: Metadata = generateMetadata({
  title: "Pagination v2 - My UI Kit",
  description:
    "Документационная страница для версии компонента пагинации в UI Kit. Она предоставляет информацию о том, как использовать и настраивать базовую версию компонента пагинации, включая пример реализации и исходный код. Страница включает в себя интерактивный пример компонента, отображение параметров (хотя в текущей реализации список параметров пуст), а также исходные коды компонента (TSX и CSS). Это позволяет разработчикам легко понять, как интегрировать и настроить пагинацию в своих приложениях.",
  keywords: [
    "модальное окно",
    "v1",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function PaginationV2Page() {
  const codeTsx = await readContentFile(
    "src/shared/ui/pagination/pagination_v2/Pagination.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/pagination/pagination_v2/Pagination.module.css",
  );

  const helperTs = await readContentFile(
    "src/shared/ui/pagination/pagination_v2/helper.ts",
  );

  const iconSvg = await readContentFile(
    "src/shared/ui/pagination/pagination_v2/svg/ArrowIcon.tsx",
  );

  return (
    <article className="article__page">
      <h1>Pagination v2</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            value:
              "Компонент Pagination - это UI-компонент для навигации по страницам, который позволяет пользователю переключаться между страницами набора данных. Он принимает следующие параметры:",
          },
          {
            label: "total (number)",
            value: "общее количество элементов",
          },
          {
            label: "perPage (number)",
            value: "количество элементов на странице",
          },
          {
            label: "page (number)",
            value: "текущая страница",
          },
          {
            label: "className (string, опционально)",
            value: "дополнительный CSS-класс",
          },
          {
            label: "onChange (function)",
            value:
              "функция обратного вызова, вызываемая при изменении страницы",
          },
          {
            value:
              "Компонент вычисляет количество страниц на основе общего количества элементов и количества элементов на странице. Он отображает кнопки с номерами страниц, включая текущую страницу, а также троеточия (...) для обозначения пропущенных страниц при большом количестве страниц. Кнопка текущей страницы выделяется стилем и неактивна. Компонент использует функцию paginationNumbers для определения, какие номера страниц и в каком порядке отображать, чтобы избежать чрезмерного количества кнопок при большом количестве страниц.",
          },
        ]}
      />
      <PaginationWrapperV2 />
      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="Pagination.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="Pagination.module.css"
          title="CSS"
          code={codeCss}
        />
      )}

      {typeof helperTs === "string" && (
        <CodeWrapper fileName="helper.ts" title="TS" code={helperTs} />
      )}
      
      {typeof iconSvg === "string" && (
        <CodeWrapper fileName="ArrowIcon.tsx" title="TSX" code={iconSvg} />
      )}
    </article>
  );
}
