import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Графики - My UI Kit",
  description:
    "Документация по графикам в My UI Kit. Узнайте, как создавать и настраивать различные типы графиков для визуализации данных.",
  keywords: [
    "графики",
    "визуализация данных",
    "Canvas",
    "HTML5",
    "документация",
  ],
});

export default function ChartsPage() {
  return (
    <article className="article__page">
      <h1>Charts</h1>
      <Link href={"/components/charts/circle"}>
        <Button variantColor="blue" variant="link">
          Circle
        </Button>
      </Link>
      <Link href={"/components/charts/rainbow"}>
        <Button variantColor="blue" variant="link">
          Rainbow
        </Button>
      </Link>
      <Link href={"/components/charts/wave-line-chart"}>
        <Button variantColor="blue" variant="link">
          Wave Line
        </Button>
      </Link>
      <Link href={"/components/charts/chart-column"}>
        <Button variantColor="blue" variant="link">
          Chart column
        </Button>
      </Link>
    </article>
  );
}
