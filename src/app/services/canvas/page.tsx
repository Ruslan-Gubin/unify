import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";

export const metadata: Metadata = generateMetadata({
	title: "Canvas Page",
	description: "Canvas Page description",
});

export default function CanvasPage() {
	return <h1>Canvas</h1>;
}
