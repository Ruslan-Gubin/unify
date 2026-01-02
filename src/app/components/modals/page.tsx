import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { ModalWrapper } from "@/src/shared/ui/modals/ModalWrapper/ModalWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Modals",
  description: "Modal description",
});

export default function ModalPage() {
  return (
    <article className="article__page">
      <h1>Modals</h1>
      <Link href={"/components/modals/modal_v1"}>
        <Button variantColor="blue" variant="link">
          Modal v1
        </Button>
      </Link>
        <ModalWrapper />
    </article>
  );
}
