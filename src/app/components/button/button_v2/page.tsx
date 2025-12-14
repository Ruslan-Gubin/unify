import { type Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Button v2",
  description: "Button v2 description",
});

export default function ButtonV2Page() {
  return (
    <>
      <h1>ButtonV2Page</h1>
    </>
  );
}
