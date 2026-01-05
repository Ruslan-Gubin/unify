import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { PaginationWrapperV1 } from "@/src/views/PaginationWrapper/PaginationWrapperV1";

export const metadata: Metadata = generateMetadata({
  title: "Pagination - My UI Kit",
  description:
    "Документация по компонентам Пагинации в My UI Kit. Узнайте, как создавать и настраивать различные типы select элементов с различными функциями и возможностями.",
  keywords: [
    "pagination",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default function SelectPage() {
  return (
    <article className="article__page">
      <h1>Select</h1>
      <Link href={"/components/pagination/pagination_v1"}>
        <Button variantColor="blue" variant="link">
          Pagination v1
        </Button>
      </Link>
      <PaginationWrapperV1 />
    </article>
  );
}
