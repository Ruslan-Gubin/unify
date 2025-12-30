import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Input } from "@/src/shared/ui/inputs/Input/Input";

export const metadata: Metadata = generateMetadata({
  title: "Input search",
  description: "Input search description",
});

export default function InputV1Page() {
  return (
    <article className="article__page">
      <h1>Input</h1>
      <Input placeholder="search" value="" />
    </article>
  );
}
