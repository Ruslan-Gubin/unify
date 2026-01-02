import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Services Page",
  description: "Components Page description",
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
