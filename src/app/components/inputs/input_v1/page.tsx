import { type Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Input v1",
  description: "Input v1 description",
});

export default function InputV1Page() {
  return (
    <>
      <h1>InputV1Page</h1>
    </>
  );
}
