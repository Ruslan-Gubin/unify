import type {  Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Input v2",
  description: "Input v2 description",
});

export default function InputV2Page() {
  return <h1>InputV2Page</h1>;
}
