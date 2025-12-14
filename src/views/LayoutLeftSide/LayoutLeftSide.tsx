import { NavigateMenu } from "./NavigateMenu/NavigateMenu";
import { HomeIcon } from "./svg/Home/HomeIcon";
import { LayoutIcon } from "./svg/Layout/LayoutIcon";
import { CommunityIcon } from "./svg/Community/CommunityIcon";
import styles from "./LayoutLeftSide.module.css";
import type { ReactNode } from "react";

export type NavigateListItem = {
  label: string;
  href: string;
  icon?: ReactNode;
  children: NavigateListItem[];
  isHasLine?: boolean;
};

export const LayoutLeftSide = () => {
  const navigateList: NavigateListItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
      children: [],
    },
    {
      label: "Layout",
      href: "/layout",
      icon: <LayoutIcon />,
      children: [],
      isHasLine: true,
    },
    {
      label: "Style",
      href: "",
      icon: "",
      children: [
        {
          label: "Reset style",
          href: "/style/reset",
          icon: "",
          children: [],
        },
        {
          label: "Global style",
          href: "/style/global",
          icon: "",
          children: [],
        },
      ],
    },
    {
      label: "Components",
      href: "",
      icon: "",
      children: [
        {
          label: "Buttons",
          href: "",
          icon: "",
          children: [
            {
              label: "Button v1",
              href: "/components/button/button_v1",
              icon: "",
              children: [],
            },
            {
              label: "Button v2",
              href: "/components/button/button_v2",
              icon: "",
              children: [],
            },
            {
              label: "Button v3",
              href: "/components/button/button_v3",
              icon: "",
              children: [],
            },
          ],
        },
        {
          label: "Inputs",
          href: "",
          icon: "",
          children: [
            {
              label: "Input v1",
              href: "/components/inputs/input_v1",
              icon: "",
              children: [],
            },
            {
              label: "Input v2",
              href: "/components/inputs/input_v2",
              icon: "",
              children: [],
            },
            {
              label: "Input v3",
              href: "/components/inputs/input_v3",
              icon: "",
              children: [],
            },
          ],
        },
        {
          label: "Navigate menu",
          href: "/components/navigate-menu",
          icon: "",
          children: [],
        },
      ],
    },
    {
      label: "Community",
      href: "/community",
      icon: <CommunityIcon />,
      children: [],
    },
  ];

  return (
    <>
      <div className={styles.navigateLogoContainer}></div>
      <nav className={styles.navigateMenuNav}>
        <NavigateMenu navigateList={navigateList} />
      </nav>
    </>
  );
};
