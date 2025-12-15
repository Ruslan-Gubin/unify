import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Buttons Page",
  description: "Buttons Page description",
});

export default function ButtonsPage() {
  return <h1>Buttons</h1>;
}
