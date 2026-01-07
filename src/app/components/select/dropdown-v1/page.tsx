import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { DropDownWrapperV1 } from "@/src/views/DropDownWrapper/DropDownWrapperV1";

export const metadata: Metadata = generateMetadata({
	title: "Dropdown v1 - My UI Kit",
	description:
		"Компонент Dropdown - это переиспользуемый элемент пользовательского интерфейса, реализующий выпадающий список с возможностью выбора одного из предложенных вариантов. Компонент реализован в соответствии с принципами проекта my-ui-kit, используя нативные CSS-стили и минимальные зависимости.",
	keywords: [
		"dropdown",
		"компоненты",
		"UI Kit",
		"документация",
		"React",
		"Next.js",
	],
});

export default async function WeekCalendarLinePage() {
	const codeTsx = await readContentFile(
		"src/shared/ui/selects/dropdown/Dropdown_v1/Dropdown.tsx",
	);

	const codeCss = await readContentFile(
		"src/shared/ui/selects/dropdown/Dropdown_v1/Dropdown.module.css",
	);

	const codeSvg = await readContentFile(
		"src/shared/ui/selects/dropdown/Dropdown_v1/svg/ArrowIcon.tsx",
	);

	return (
		<article className="article__page">
			<h1>{'Dropdown v1'}</h1>
			<InfoBlock
				title="Описание"
				infoList={[
					{
						value:
							"Компонент Dropdown - это переиспользуемый элемент пользовательского интерфейса, реализующий выпадающий список с возможностью выбора одного из предложенных вариантов. Компонент реализован в соответствии с принципами проекта my-ui-kit, используя нативные CSS-стили и минимальные зависимости.",
					},
				]}
			/>
			<InfoBlock
				title="Структура файлов"
				infoList={[
					{ label: "Dropdown.tsx", value: "Dropdown.tsx" },
					{ label: "Dropdown.module.css", value: "Dropdown.module.css" },
					{ label: "svg/ArrowIcon.tsx", value: "svg/ArrowIcon.tsx" },
				]}
			/>
			<InfoBlock
				title="Структура файлов"
				infoList={[
					{
						label: "options",
						value:
							"{ value: string; label: string }[] - массив опций для выбора, каждая из которых имеет значение и отображаемую метку",
					},
					{
						label: "onChange",
						value:
							"(value: string) => void - функция обратного вызова, вызываемая при выборе опции",
					},
					{ label: "value", value: "string - текущее выбранное значение" },
					{
						label: "width?",
						value:
							"number | string - ширина компонента (необязательный параметр)",
					},
					{
						label: "menuHeight",
						value: "number - высота меню с опциями (необязательный параметр)",
					},
					{
						label: "placeholder?",
						value:
							"текст-заполнитель, отображаемый при отсутствии выбранного значения",
					},
					{
						label: "disabled?",
						value: "флаг, определяющий, отключен ли компонент",
					},
				]}
			/>

			<DropDownWrapperV1 />

			{typeof codeTsx === "string" && (
				<CodeWrapper fileName="Dropdown.tsx" title="TSX" code={codeTsx} />
			)}

			{typeof codeCss === "string" && (
				<CodeWrapper
					fileName="Dropdown.module.css"
					title="CSS"
					code={codeCss}
				/>
			)}

			{typeof codeSvg === "string" && (
				<CodeWrapper fileName="ArrowIcon.tsx" title="SVG" code={codeSvg} />
			)}
		</article>
	);
}
