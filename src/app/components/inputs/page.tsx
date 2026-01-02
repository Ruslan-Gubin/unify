import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { Input } from "@/src/shared/ui/inputs/Input_v1/Input";

export const metadata: Metadata = generateMetadata({
  title: "Inputs Page",
  description: "Inputs Page description",
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
          <Input
            placeholder="Standard lg"
            name="Standard lg"
            variant="standard"
            variantSize="lg"
          />
        </li>
        <li style={{ flex: 1 }}>
          <Input
            placeholder="Outlined lg"
            name="Outlined lg"
            variant="outlined"
            variantSize="lg"
          />
        </li>
        <li style={{ flex: 1 }}>
          <Input
            placeholder="Filled lg"
            name="Filled lg"
            variant="filled"
            variantSize="lg"
          />
        </li>
      </ul>
    </article>
  );
}
