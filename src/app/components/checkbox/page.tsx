import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { CheckboxWrapper } from "@/src/views/CheckboxWrapper/CheckboxWrapper";

export const metadata: Metadata = generateMetadata({
	title: "Флаг - My UI Kit",
	description:
		"Документация по полям ввода в My UI Kit. Узнайте, как создавать и настраивать различные типы полей ввода с валидацией и стилями.",
	keywords: [
		"поля ввода",
		"компоненты",
		"UI Kit",
		"документация",
		"React",
		"Next.js",
	],
});

export default function CheckboxPage() {
	return (
		<article className="article__page">
			<h1>Checkbox</h1>
			<Link href={"/components/checkbox/checkbox-animate"}>
				<Button variantColor="blue" variant="link">
					{"Checkbox animate"}
				</Button>
			</Link>

			<CheckboxWrapper />
		</article>
	);
}
