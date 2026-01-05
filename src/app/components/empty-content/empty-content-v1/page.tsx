import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { NotDataIcon } from "@/src/shared/svg/NotDataIcon/NotDataIcon";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { EmptyContent } from "@/src/shared/ui/EmptyContent/EmptyContent";

export const metadata: Metadata = generateMetadata({
  title: "Данные отсутствуют v1 - My UI Kit",
  description:
    "Документация по компонентам в My UI Kit. Узнайте, как использовать и настраивать готовые компоненты для вашего приложения.",
  keywords: ["компоненты", "UI Kit", "документация", "React", "Next.js"],
});

export default async function EmptyContentV1Page() {
  const codeTsx = await readContentFile(
    "src/shared/ui/EmptyContent/EmptyContent.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/EmptyContent/EmptyContent.module.css",
  );

  return (
    <article className="article__page">
      <h1>{"Empty Content V1"}</h1>
      <EmptyContent>
        <NotDataIcon />
      </EmptyContent>

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="EmptyContent.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="EmptyContent.module.css"
          title="CSS"
          code={codeCss}
        />
      )}
    </article>
  );
}
