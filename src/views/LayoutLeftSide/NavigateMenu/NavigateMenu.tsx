"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getInitSelectMap } from "./helpers";
import styles from "./NavigateMenu.module.css";
import { type NavigateListItem } from "../LayoutLeftSide";
import { BirdSelectIcon } from "./svg/BirdSelectIcon";

type Props = {
  navigateList: NavigateListItem[];
  isChildren?: boolean;
};

export const NavigateMenu = (props: Props) => {
  const pathname = usePathname();
  const [selectedMap, setSelectedMap] = useState(() =>
    getInitSelectMap(props.navigateList, pathname),
  );

  const handleClickSelect = (label: string) => {
    const isHasKey = selectedMap.has(label);
    const isSelect = selectedMap.get(label);
    const value = isHasKey && isSelect ? false : true;

    setSelectedMap((prev) => prev.set(label, value));
  };

  return (
    <nav
      className={
        props.isChildren
          ? `${styles.navigateMenuNav} ${styles.navigateMenuNavChildren}`
          : styles.navigateMenuNav
      }
    >
      <ul className={styles.navigateMenuList}>
        {props.navigateList.map((item) => (
          <li key={item.label} className={styles.navigateMenuItemWrapper}>
            <button
              className={
                pathname === item.href
                  ? `${styles.navigateMenuItem} ${styles.navigateMenuItemActive}`
                  : styles.navigateMenuItem
              }
            >
              <Link
                href={item.href ? item.href : pathname}
                className={
                  pathname === item.href
                    ? `${styles.navigateMenuItemLink} ${styles.navigateMenuItemLinkActive}`
                    : styles.navigateMenuItemLink
                }
                onClick={() =>
                  item.children.length > 0 && handleClickSelect(item.label)
                }
              >
                {item.icon}
                <p>{item.label}</p>
              </Link>
              {item.children.length > 0 && (
                <BirdSelectIcon
                  className={
                    selectedMap.get(item.label)
                      ? styles.navigateMenuItemSvgActive
                      : styles.navigateMenuItemSvg
                  }
                />
              )}
            </button>
            {item.children && selectedMap.get(item.label) && (
              <NavigateMenu navigateList={item.children} isChildren />
            )}
            {item.isHasLine && (
              <div className={styles.navigateMenuItemBottomSeparator}></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
