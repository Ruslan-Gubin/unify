"use client";
import { useState } from "react";
import { TextAreaResize } from "@/src/shared/ui/inputs/TextAreaResize/TextAreaResize";

export const TextAreaResizeWrapper = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChangeComment = (value: string) => {
    setValue(value);

    if (!error && value.length >= 500) {
      setError("Max length 500");
    }

    if (error && value.length < 500) {
      setError("");
    }
  };

  return (
    <TextAreaResize
      value={value}
      onChange={handleChangeComment}
      name="comment"
      disabled={false}
      error={error}
      label="Комментарий"
    />
  );
};
