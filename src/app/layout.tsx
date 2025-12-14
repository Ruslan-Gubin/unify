import { generateMetadata } from "./core/generateMetadata";
import { Roboto } from "./core/fonts";
import { type Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Header } from "../views/Header/Header";
import { LayoutLeftSide } from "../views/LayoutLeftSide/LayoutLeftSide";

export const metadata: Metadata = generateMetadata({
  title: "Ui storage",
  description: "Ui kit storage",
});

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <html lang="en" className={Roboto.className}>
      <body className={styles.layoutWrapper}>
        <aside className={styles.layoutAside}>
          <LayoutLeftSide />
        </aside>
        <aside className={styles.layoutAsideContent}>
          <header className={styles.layoutHeader}>
            <Header />
          </header>
          <main className={styles.layoutMain}>{props.children}</main>
        </aside>
      </body>
    </html>
  );
}
