import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { ModalWrapper } from "@/src/shared/ui/modals/ModalWrapper/ModalWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Модальное окно - My UI Kit",
  description:
    "Документация по модальному окну в My UI Kit. Узнайте, как создавать и настраивать модальные окна с различными функциями и анимациями.",
  keywords: [
    "модальное окно",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
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
