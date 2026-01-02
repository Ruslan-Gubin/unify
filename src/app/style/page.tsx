import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Styles Page",
  description: "Styles Page description",
});

export default function StylesPage() {
  return (
    <article className="article__page">
      <h1>Styles</h1>
      <Link href={"/style/reset"}>
        <Button variantColor="blue" variant="link">
          CSS Reset
        </Button>
      </Link>
      <Link href={"/style/global"}>
        <Button variantColor="blue" variant="link">
          Global style
        </Button>
      </Link>
    </article>
  );
}
