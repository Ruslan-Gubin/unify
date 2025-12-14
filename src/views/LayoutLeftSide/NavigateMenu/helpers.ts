import type { NavigateListItem } from "../LayoutLeftSide";

export const findRecursiveActiveHref = (
  navigateList: NavigateListItem[],
  pathname: string,
) => {
  for (let i = 0; i < navigateList.length; i++) {
    const element = navigateList[i];

    if (element.href === pathname) {
      return true;
    }

    if (element.children.length > 0) {
      const isHasActiveHref = findRecursiveActiveHref(
        element.children,
        pathname,
      );
      if (isHasActiveHref) {
        return true;
      }
    }
  }

  return false;
};

export const getInitSelectMap = (
  navigateList: NavigateListItem[],
  pathname: string,
): Map<string, boolean> => {
  const selectMap = new Map();

  for (let i = 0; i < navigateList.length; i++) {
    const element = navigateList[i];

    if (element.href === pathname) {
      break;
    }

    if (element.children.length > 0) {
      const findActiveHref = findRecursiveActiveHref(
        element.children,
        pathname,
      );

      if (findActiveHref) {
        selectMap.set(element.label, true);
        break;
      }
    }
  }

  return selectMap;
};
