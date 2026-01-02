import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Components Page",
  description: "Components Page description",
});

export default function ComponentsPage() {
  return (
    <article className="article__page">
      <h1>Components</h1>
      <Link href={"/components/buttons"}>
        <Button variantColor="blue" variant="link">
          Buttons
        </Button>
      </Link>
      <Link href={"/components/inputs"}>
        <Button variantColor="blue" variant="link">
          Inputs
        </Button>
      </Link>
      <Link href={"/components/modals"}>
        <Button variantColor="blue" variant="link">
          Modals
        </Button>
      </Link>
      <Link href={"/components/tables"}>
        <Button variantColor="blue" variant="link">
          Tables
        </Button>
      </Link>
      <Link href={"/components/charts"}>
        <Button variantColor="blue" variant="link">
          Charts
        </Button>
      </Link>
      <Link href={"/components/navigate-menu"}>
        <Button variantColor="blue" variant="link">
          Navigate menu
        </Button>
      </Link>
    </article>
  );
}
