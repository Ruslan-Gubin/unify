import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Сервисы - My UI Kit",
  description:
    "Документация по сервисам в My UI Kit. Узнайте, как использовать встроенные сервисы для работы с API, хранилищем и другими внешними системами.",
  keywords: ['сервисы', 'API', 'хранилище','внешние системы', 'документация'],
});

export default function ServicesPage() {
  return (
    <article className="article__page">
      <h1>Services</h1>
      <Link href={"/services/canvas"}>
        <Button variantColor="blue" variant="link">
          Canvas
        </Button>
      </Link>
    </article>
  );
}
