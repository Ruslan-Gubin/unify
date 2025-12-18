import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Services Page",
  description: "Components Page description",
});

export default function ServicesPage() {
  return <h1>Services</h1>;
}
