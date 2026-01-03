import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { ModalWrapper } from "@/src/shared/ui/modals/ModalWrapper/ModalWrapper";

export const metadata: Metadata = generateMetadata({
"title": "Модальное окно v1 - My UI Kit",
    "description": "Документация по первой версии модального окна в My UI Kit. Узнайте, как использовать и настраивать базовую версию модального окна.",
    "keywords": [
        "модальное окно",
        "v1",
        "компоненты",
        "UI Kit",
        "документация",
        "React",
        "Next.js"
    ]
});

export default async function ModalV1Page() {
  const modalTsx = await readContentFile(
    "src/shared/ui/modals/Modal/Modal.tsx",
  );

  const modalCss = await readContentFile(
    "src/shared/ui/modals/Modal/Modal.module.css",
  );

  const exampleTsx = await readContentFile(
    "src/shared/ui/modals/ModalWrapper/ModalWrapper.tsx",
  );

  const exampleCss = await readContentFile(
    "src/shared/ui/modals/ModalWrapper/ModalWrapper.module.css",
  );

  return (
    <article className="article__page">
      <h1>Modal</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            value:
              "active - Управляет видимостью модального окна.При значении true модальное окно отображается.",
          },
          {
            value:
              "handleClose - Функция обратного вызова, которая вызывается при закрытии модального окна (например, при клике снаружи или нажатии ESC).",
          },
          {
            value:
              "classContainer - дополнительное имя CSS класса для стилизации контейнера модального окна.",
          },
        ]}
      />
      <ModalWrapper />

      {typeof modalTsx === "string" && (
        <CodeWrapper fileName="Modal.tsx" title="TSX" code={modalTsx} />
      )}

      {typeof modalCss === "string" && (
        <CodeWrapper fileName="Modal.module.css" title="CSS" code={modalCss} />
      )}

      {typeof exampleTsx === "string" && (
        <CodeWrapper
          fileName="ModalWrapper.tsx"
          title="Применение"
          code={exampleTsx}
        />
      )}

      {typeof exampleCss === "string" && (
        <CodeWrapper
          fileName="ModalWrapper.module.css"
          title="CSS"
          code={exampleCss}
        />
      )}
    </article>
  );
}
