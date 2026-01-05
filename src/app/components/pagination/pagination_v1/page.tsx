import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { PaginationWrapperV1 } from "@/src/views/PaginationWrapper/PaginationWrapperV1";

export const metadata: Metadata = generateMetadata({
	title: "Pagination v1 - My UI Kit",
	description:
		"Документация по первой версии Пагинации в My UI Kit. Узнайте, как использовать и настраивать базовую версию модального окна.",
	keywords: [
		"модальное окно",
		"v1",
		"компоненты",
		"UI Kit",
		"документация",
		"React",
		"Next.js",
	],
});

export default async function PaginationV1Page() {
	const codeTsx = await readContentFile(
		"src/shared/ui/pagination/pagination_v1/Pagination.tsx",
	);

	const codeCss = await readContentFile(
		"src/shared/ui/pagination/pagination_v1/Pagination.module.css",
	);

	return (
		<article className="article__page">
			<h1>Modal</h1>
			<InfoBlock
				title="Параметры"
				infoList={[
					{
						label: "",
						value: "",
					},
				]}
			/>
			<PaginationWrapperV1 />
			{typeof codeTsx === "string" && (
				<CodeWrapper fileName="Pagination.tsx" title="TSX" code={codeTsx} />
			)}

			{typeof codeCss === "string" && (
				<CodeWrapper fileName="Pagination.module.css" title="CSS" code={codeCss} />
			)}
		</article>
	);
}
