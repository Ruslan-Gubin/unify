import type { Metadata } from "next";
import Link from "next/link";
import { NotDataIcon } from "@/src/shared/svg/NotDataIcon/NotDataIcon";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { EmptyContent } from "@/src/shared/ui/EmptyContent/EmptyContent";
import { generateMetadata } from "../../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Данные отсутствуют - My UI Kit",
  description:
    "Документация по компонентам в My UI Kit. Узнайте, как использовать и настраивать готовые компоненты для вашего приложения.",
  keywords: ["компоненты", "UI Kit", "документация", "React", "Next.js"],
});

export default function EmptyContentPage() {
  return (
    <article className="article__page">
      <h1>{"Empty Content"}</h1>
      <Link href={"/components/empty-content/empty-content-v1"}>
        <Button variantColor="blue" variant="link">
          Empty content v1
        </Button>
      </Link>

      <EmptyContent>
        <NotDataIcon />
      </EmptyContent>
    </article>
  );
}
