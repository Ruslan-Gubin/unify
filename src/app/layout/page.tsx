import type { Metadata } from "next";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { generateMetadata } from "../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
"title": "Примеры макетов - My UI Kit",
    "description": "Документация по примерам макетов в My UI Kit. Узнайте, как создавать и настраивать различные типы макетов для вашего приложения.",
    "keywords": [
        "макеты",
        "компоновка",
        "дизайн",
        "UI Kit",
        "документация"
    ]
});

export default function LayoutExample() {
  return (
    <article className="article__page">
      <h1>Layout</h1>
      <div
        style={{
          backgroundColor: "lightgray",
          display: "flex",
          width: "100px",
          height: "50px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            width: "20%",
            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            width: "40%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "20%",
              border: "1px solid black",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "white",
              flex: "2",
              height: "80%",
              border: "1px solid black",
            }}
          ></div>
        </div>
      </div>
      <InfoBlock
        title="Что такое Layout?"
        infoList={[
          {
            label: "Layout",
            value:
              "это базовый компонент React-приложения, который определяет общую структуру и расположение элементов на странице. Он служит основой для всех остальных компонентов приложения и обеспечивает единообразное отображение контента.",
          },
        ]}
      />
      <InfoBlock
        title="Преимущества использования"
        infoList={[
          {
            label: "Единообразие дизайна",
            value: "Гарантированное одинаковое отображение на всех страницах",
          },
          {
            label: "Модульность",
            value: "Легкость внесения изменений в отдельные части",
          },
          {
            label: "Производительность",
            value: "Оптимизированная структура кода",
          },
          {
            label: "Удобство поддержки",
            value: "Четкая организация компонентов",
          },
        ]}
      />
      <CodeWrapper
        fileName="layout.tsx"
        title="TSX"
        description="Структура для next.js"
        code={`import Link from "next/link";
import { generateMetadata } from "./core/generateMetadata";
import { Roboto } from "./core/fonts";
import { type Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Ui storage",
  description: "Ui kit storage",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Roboto.className}>
      <body className={styles.layoutWrapper}>
        <aside className={styles.layoutAside}>
          <Link href={"/"}>Home</Link>
          <Link href={"/layout"}>Layout</Link>
          <Link href={"/style/reset"}>Reset style</Link>
        </aside>
        <aside className={styles.layoutAsideContent}>
          <header className={styles.layoutHeader}></header>
          <main className={styles.layoutMain}>{children}</main>
        </aside>
      </body>
    </html>
  );
}`}
      />
      <CodeWrapper
        fileName="layout.module.css"
        title="CSS"
        code={`.layoutWrapper {
  display: flex;
  justify-content: center;
  position: relative;
}

.layoutAside {
  min-width: 280px;
  padding: var(--padding-content-block); /* 24px */
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-right: 1px solid lightgray;

  @media (max-width: 880px) {
    transition: transform 0.3s linear;
    top: var(--header-size-height); /* 60px */
    position: fixed;
    transform: translateX(-100%);
    z-index: 1;
  }
}

.layoutAsideContent {
  width: 100%;
  max-width: 1160px;
  position: relative;
  background-color: white;
  min-height: 100vh;
}

.layoutHeader {
  height: var(--header-size-height); /* 60px */
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid lightgray;
}

.layoutMain {
  padding: var(--padding-main); /* 32px */
}`}
      />
    </article>
  );
}
