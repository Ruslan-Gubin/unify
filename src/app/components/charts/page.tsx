import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Charts Page",
  description: "Charts Page description",
});

export default function ChartsPage() {
  return <h1>Charts</h1>;
}
