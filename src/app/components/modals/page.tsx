import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Modals",
  description: "Modal description",
});

export default function ModalPage() {
  return <h1>Modals</h1>;
}

