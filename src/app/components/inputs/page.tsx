import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { Input as InputV1 } from "@/src/shared/ui/inputs/Input_v1/Input";
import { Input as InputV2 } from "@/src/shared/ui/inputs/Input_v2/Input";

export const metadata: Metadata = generateMetadata({
  title: "Поля ввода - My UI Kit",
  description:
    "Документация по полям ввода в My UI Kit. Узнайте, как создавать и настраивать различные типы полей ввода с валидацией и стилями.",
  keywords: [
    "поля ввода",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default function InputsPage() {
  return (
    <article className="article__page">
      <h1>Inputs</h1>
      <Link href={"/components/inputs/input_v1"}>
        <Button variantColor="blue" variant="link">
          {"Input v1"}
        </Button>
      </Link>
      <ul
        style={{
          display: "flex",
          columnGap: "12px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <li style={{ flex: 1 }}>
          <InputV1
            placeholder="Standard lg"
            name="Standard lg"
            variant="standard"
            variantSize="lg"
          />
        </li>
        <li style={{ flex: 1 }}>
          <InputV1
            placeholder="Outlined lg"
            name="Outlined lg"
            variant="outlined"
            variantSize="lg"
          />
        </li>
        <li style={{ flex: 1 }}>
          <InputV1
            placeholder="Filled lg"
            name="Filled lg"
            variant="filled"
            variantSize="lg"
          />
        </li>
      </ul>
      <Link href={"/components/inputs/input_v2"}>
        <Button variantColor="blue" variant="link">
          {"Input v2"}
        </Button>
      </Link>
      <InputV2 name="title" label="Название" placeholder="Введите название" />
    </article>
  );
}
