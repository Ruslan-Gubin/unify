import { type Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Button v3",
  description: "Button v3 description",
});

export default function ButtonV3Page() {
  return (
    <>
      <h1>ButtonV3Page</h1>
    </>
  );
}
