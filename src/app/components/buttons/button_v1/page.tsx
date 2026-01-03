import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { EmailIcon } from "@/src/shared/svg/EmailIcon";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  "title": "Кнопка v1 - My UI Kit",
    "description": "Документация по первой версии кнопки в My UI Kit. Узнайте, как использовать и настраивать базовую версию кнопки.",
    "keywords": [
        "кнопка",
        "v1",
        "компоненты",
        "UI Kit",
        "документация",
        "React",
        "Next.js"
    ]
});

export default async function ButtonV1Page() {
  const buttonTsx = await readContentFile(
    "src/shared/ui/buttons/button_v1/Button.tsx",
  );

  const buttonModuleCss = await readContentFile(
    "src/shared/ui/buttons/button_v1/Button.module.css",
  );

  return (
    <article className="article__page">
      <h1>Button v1</h1>
      <InfoBlock
        title="Цвета"
        infoList={[
          {
            value:
              "Используйте опцию variantColor, чтобы изменить цвет кнопки. Вы можете задать значение teal, error, green, pink.",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button variantColor="teal" disabled>
          teal
        </Button>
        <Button variantColor="teal">teal</Button>
        <Button variantColor="error">error</Button>
        <Button variantColor="green">green</Button>
        <Button variantColor="pink">pink</Button>
        <Button variantColor="blue">blue</Button>
        <Button>default</Button>
      </div>

      <InfoBlock
        title="Варианты"
        infoList={[
          {
            value:
              "Используйте параметр variant prop, чтобы изменить визуальный стиль кнопки. Вы можете задать значение solid (сплошное изображение), ghost (призрак), outline (контур) или link (ссылка).",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button variant="solid" variantColor="green">
          solid
        </Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variantColor="blue" variant="link">
          link
        </Button>
      </div>

      <InfoBlock
        title="Размеры"
        infoList={[
          {
            value:
              "Используйте опцию size, чтобы изменить размер кнопки. Вы можете задать значение xs, sm, md или lg.",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button size="lg" variant="solid" variantColor="teal">
          <EmailIcon />
          lg/solid/teal
        </Button>
        <Button size="md" variant="solid" variantColor="error">
          <EmailIcon />
          md/solid/error
        </Button>
        <Button size="sm" variant="solid" variantColor="green">
          <EmailIcon />
          sm/solid/green
        </Button>
        <Button size="xs" variant="solid" variantColor="pink">
          <EmailIcon />
          xs/solid/pink
        </Button>
        <Button size="lg" variant="outline" variantColor="teal">
          <EmailIcon />
          lg/outline/teal
        </Button>
        <Button size="md" variant="outline" variantColor="error">
          <EmailIcon />
          md/outline/error
        </Button>
        <Button size="sm" variant="outline" variantColor="green">
          <EmailIcon />
          sm/outline/green
        </Button>
        <Button size="xs" variant="outline" variantColor="pink">
          <EmailIcon />
          xs/outline/pink
        </Button>
        <Button size="lg" variant="ghost" variantColor="pink">
          <EmailIcon />
          lg/ghost/pink
        </Button>
        <Button size="md" variant="ghost" variantColor="error">
          md/ghost/error
        </Button>
        <Button size="sm" variant="link" variantColor="green">
          <EmailIcon />
          sm/link/green
        </Button>
        <Button size="xs" variant="link" variantColor="blue">
          xs/link/pink
        </Button>
      </div>

      {typeof buttonTsx === "string" && (
        <CodeWrapper fileName="Button.tsx" title="TSX" code={buttonTsx} />
      )}

      {typeof buttonModuleCss === "string" && (
        <CodeWrapper
          fileName="Button.module.css"
          title="CSS"
          code={buttonModuleCss}
        />
      )}
    </article>
  );
}
