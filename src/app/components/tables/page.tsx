import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Tables Page",
  description: "Tables Page description",
});

export default function TablesPage() {
  return <h1>Tables</h1>;
}
