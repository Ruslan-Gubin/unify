import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Styles Page",
  description: "Styles Page description",
});

export default function StylesPage() {
  return <h1>Styles</h1>;
}
