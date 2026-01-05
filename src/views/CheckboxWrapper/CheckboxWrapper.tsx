"use client";
import { useState } from "react";
import { CheckboxAnimate } from "@/src/shared/ui/checkbox/CheckboxAnimate/CheckboxAnimate";

export const CheckboxWrapper = () => {
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<CheckboxAnimate
			checked={checked}
			onChange={() => setChecked((prev) => !prev)}
		/>
	);
};
