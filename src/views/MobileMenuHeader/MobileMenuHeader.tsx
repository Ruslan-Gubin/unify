"use client";
import { useEffect, useEffectEvent } from "react";
import { debounce } from "@/src/shared/helpers/debounce";
import { menuAdapter } from "@/src/stores/menu/store/adapter";
import { menuStore } from "@/src/stores/menu/store/store";
import { MobileMenuButton } from "@/src/widget/mobile-menu/mobile-menu-button/MobileMenuButton";
import styles from "./MobileMenuHeader.module.css";

export const MobileMenuHeader = () => {
  const isActiveMenu = menuStore((state) => state.isActiveMenu);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.documentElement.style.setProperty(
        "--header-mobile-menu-transform",
        !isActiveMenu ? "translateX(-100%)" : "translateX(0%)",
      );
    }
  }, [isActiveMenu]);

  const resizeListener = useEffectEvent(() => {
    if (window.innerWidth > 880) {
      if (isActiveMenu) {
        menuAdapter.toggleMenu(false);
      }

      window.document.documentElement.style.setProperty(
        "--header-mobile-menu-transition",
        "transform 0s linear",
      );
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const debounceResizeListener = debounce(resizeListener, 200);

    window.addEventListener("resize", debounceResizeListener);

    return () => {
      window.removeEventListener("resize", debounceResizeListener);
    };
  }, []);

  const handleToggleMenu = () => {
    if (typeof window !== "undefined") {
      menuAdapter.toggleMenu(!isActiveMenu);
    }

    window.document.documentElement.style.setProperty(
      "--header-mobile-menu-transition",
      "transform 0.2s linear",
    );
  };

  return (
    <div className={styles.mobileMenuHeader}>
      <MobileMenuButton
        isActive={isActiveMenu}
        onClick={handleToggleMenu}
        disabled={false}
      />
    </div>
  );
};
