import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Tables Page",
  description: "Tables Page description",
});

export default function TablesPage() {
  return (
    <article className="article__page">
      <h1>Tables</h1>
      <Link href={"/components/tables/load-more-observer"}>
        <Button variantColor="blue" variant="link">
          {"LoadMoreObserver"}
        </Button>
      </Link>
    </article>
  );
}
