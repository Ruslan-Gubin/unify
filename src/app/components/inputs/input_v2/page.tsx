import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { Input } from "@/src/shared/ui/inputs/Input_v2/Input";

export const metadata: Metadata = generateMetadata({
  title: "Поле ввода v2 - My UI Kit",
  description:
    "Документация поля ввода в My UI Kit. Узнайте, как использовать и настраивать базовую версию поля ввода.",
  keywords: [
    "поле ввода",
    "v2",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function InputV2Page() {
  const codeTsx = await readContentFile(
    "src/shared/ui/inputs/Input_v2/Input.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/inputs/Input_v2/Input.module.css",
  );

  return (
    <article className="article__page">
      <h1>Input v2</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "label",
            value: "Текст лейбла (подписи) над полем ввода.",
          },
        ]}
      />

      <Input name="title" label="Название" placeholder="Введите название" />

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="Input.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper fileName="Input.module.css" title="CSS" code={codeCss} />
      )}
    </article>
  );
}
