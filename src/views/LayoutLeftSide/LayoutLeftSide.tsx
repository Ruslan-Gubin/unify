import type { ReactNode } from "react";
import styles from "./LayoutLeftSide.module.css";
import { NavigateMenu } from "./NavigateMenu/NavigateMenu";
import { CommunityIcon } from "./svg/Community/CommunityIcon";
import { HomeIcon } from "./svg/Home/HomeIcon";
import { LayoutIcon } from "./svg/Layout/LayoutIcon";

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
      href: "/style",
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
      href: "/components",
      icon: "",
      children: [
        {
          label: "Buttons",
          href: "/components/buttons",
          icon: "",
          children: [
            {
              label: "Button v1",
              href: "/components/buttons/button_v1",
              icon: "",
              children: [],
            },
            {
              label: "Button v2",
              href: "/components/buttons/button_v2",
              icon: "",
              children: [],
            },
            {
              label: "Button v3",
              href: "/components/buttons/button_v3",
              icon: "",
              children: [],
            },
          ],
        },
        {
          label: "Inputs",
          href: "/components/inputs",
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
          label: "Charts",
          href: "/components/charts",
          icon: "",
          children: [
            {
              label: "Circle",
              href: "/components/charts/circle",
              icon: "",
              children: [],
            },
            {
              label: "Rainbow",
              href: "/components/charts/rainbow",
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
      label: "Hooks",
      href: "/hooks",
      icon: "",
      children: [
        {
          label: "useAnimatedCounter",
          href: "/hooks/useAnimatedCounter",
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
