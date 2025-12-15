import type { Metadata } from "next";
import { generateMetadata } from "../core/generateMetadata";

export const metadata: Metadata = generateMetadata({
  title: "Community page",
  description: "Community page description",
});

export default function CommunityPage() {
  return <h1>Community page</h1>;
}
