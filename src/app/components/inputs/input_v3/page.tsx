import { type Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Input v3",
  description: "Input v3 description",
});

export default function InputV3Page() {
  return (
    <>
      <h1>InputV3Page</h1>
    </>
  );
}
