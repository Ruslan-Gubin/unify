"use client";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const ChangeThemeButton = () => {
  const handleChangeTheme = () => {
    if (typeof window !== "undefined") {
      window.document.body.classList.toggle("dark");
    }
  };

  return (
    <Button
      variantColor="teal"
      size="sm"
      variant="solid"
      onClick={handleChangeTheme}
    >
      Theme
    </Button>
  );
};
