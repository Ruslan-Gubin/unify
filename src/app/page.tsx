import type { Metadata } from "next";
import { generateMetadata } from "./core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Home page",
  description: "Home page description",
});

export default function Home() {
  return (
      <h1>Home</h1>
  );
}
