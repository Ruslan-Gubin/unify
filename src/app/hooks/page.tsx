import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Hooks Page",
  description: "Hooks Page description",
});

export default function HooksPage() {
  return <h1>Hooks</h1>;
}
