"use client";
import { useState } from "react";
import { Dropdown } from "@/src/shared/ui/selects/dropdown/Dropdown_v1/Dropdown";

export const DropDownWrapperV1 = () => {
	const [select, setSelect] = useState<string>("");

	const options = [
		{ value: "value1", label: "label 1" },
		{ value: "value2", label: "label 2" },
		{ value: "value3", label: "label 3" },
		{ value: "value4", label: "label 4" },
		{ value: "value5", label: "label 5" },
		{ value: "value6", label: "label 6" },
		{ value: "value7", label: "label 7" },
		{ value: "value8", label: "label 8" },
		{ value: "value9", label: "label 9" },
		{ value: "value10", label: "label 10" },
		{ value: "value11", label: "label 11" },
	];

	return (
		<Dropdown
			options={options}
			value={select}
			onChange={setSelect}
			disabled={false}
			width={600}
			menuHeight={200}
			placeholder="Выберите значение"
		/>
	);
};
