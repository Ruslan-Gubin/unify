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
          ],
        },
        {
          label: "Modals",
          href: "/components/modals",
          icon: "",
          children: [
            {
              label: "Modal v1",
              href: "/components/modals/modal_v1",
              icon: "",
              children: [],
            },
          ],
        },
        {
          label: "Tables",
          href: "/components/tables",
          icon: "",
          children: [
            {
              label: "LoadMoreObserver",
              href: "/components/tables/load-more-observer",
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
            {
              label: "Wave Line",
              href: "/components/charts/wave-line-chart",
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
        {
          label: "useWindowSize",
          href: "/hooks/useWindowSize",
          icon: "",
          children: [],
        },
        {
          label: "useIntersectionObserver",
          href: "/hooks/useIntersectionObserver",
          icon: "",
          children: [],
        },
        {
          label: "useDebounce",
          href: "/hooks/useDebounce",
          icon: "",
          children: [],
        },
      ],
    },
    {
      label: "Services",
      href: "/services",
      icon: "",
      children: [
        {
          label: "Canvas",
          href: "/services/canvas",
          icon: "",
          children: [
            {
              label: "Types",
              href: "/services/canvas/types",
              icon: "",
              children: [],
            },
            {
              label: "Canvas Draw",
              href: "/services/canvas/canvas-draw",
              icon: "",
              children: [],
            },
            {
              label: "Canvas Draw Graph",
              href: "/services/canvas/canvas-draw-graph",
              icon: "",
              children: [],
            },
            {
              label: "Canvas Services",
              href: "/services/canvas/draw-service",
              icon: "",
              children: [],
            },
            {
              label: "Draw Line chart",
              href: "/services/canvas/line-chart",
              icon: "",
              children: [],
            },
            {
              label: "Pie chart draw",
              href: "/services/canvas/pie-chart-draw",
              icon: "",
              children: [],
            },
          ],
        },
      ],
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
