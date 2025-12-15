import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Components Page",
  description: "Components Page description",
});

export default function ComponentsPage() {
  return <h1>Components</h1>;
}
