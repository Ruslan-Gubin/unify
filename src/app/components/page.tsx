import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
	title: "Компоненты - My UI Kit",
	description:
		"Документация по компонентам в My UI Kit. Узнайте, как использовать и настраивать готовые компоненты для вашего приложения.",
	keywords: ["компоненты", "UI Kit", "документация", "React", "Next.js"],
});

export default function ComponentsPage() {
	return (
		<article className="article__page">
			<h1>Components</h1>
			<Link href={"/components/buttons"}>
				<Button variantColor="blue" variant="link">
					Buttons
				</Button>
			</Link>
			<Link href={"/components/inputs"}>
				<Button variantColor="blue" variant="link">
					Inputs
				</Button>
			</Link>
			<Link href={"/components/select"}>
				<Button variantColor="blue" variant="link">
					Select
				</Button>
			</Link>
			<Link href={"/components/modals"}>
				<Button variantColor="blue" variant="link">
					Modals
				</Button>
			</Link>
			<Link href={"/components/checkbox"}>
				<Button variantColor="blue" variant="link">
					Checkbox
				</Button>
			</Link>
			<Link href={"/components/tables"}>
				<Button variantColor="blue" variant="link">
					Tables
				</Button>
			</Link>
			<Link href={"/components/pagination"}>
				<Button variantColor="blue" variant="link">
					Pagination
				</Button>
			</Link>
			<Link href={"/components/charts"}>
				<Button variantColor="blue" variant="link">
					Charts
				</Button>
			</Link>
			<Link href={"/components/empty-content"}>
				<Button variantColor="blue" variant="link">
					Empty content
				</Button>
			</Link>
			<Link href={"/components/navigate-menu"}>
				<Button variantColor="blue" variant="link">
					Navigate menu
				</Button>
			</Link>
		</article>
	);
}
