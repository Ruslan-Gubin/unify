import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Inputs Page",
  description: "Inputs Page description",
});

export default function InputsPage() {
  return <h1>Inputs</h1>;
}
