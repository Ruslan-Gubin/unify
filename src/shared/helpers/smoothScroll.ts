export const smoothScroll = (
  node: HTMLElement,
  target: number,
  direction: string = "vertical",
  side: string = "down",
  callback?: () => void,
) => {
  if (typeof window === "undefined" || !node || typeof target !== "number")
    return;
  const currentTarget = Number(target.toFixed());
  const positionTop = node.scrollTop;
  const positionLeft = node.scrollLeft;

  const minPerStep = 16;
  const maxScrollStep = 30;

  const pixelsPerStep = Math.max(
    minPerStep,
    (currentTarget - (direction === "vertical" ? positionTop : positionLeft)) /
    maxScrollStep,
  );

  const nodeHeight = node.offsetHeight;
  const nodeWidth = node.offsetWidth;

  const downOffsetScroll =
    direction === "vertical" &&
    side === "down" &&
    positionTop + nodeHeight > node.scrollHeight;
  const upOffsetScroll =
    direction === "vertical" &&
    side === "up" &&
    positionTop - pixelsPerStep < 0;
  const rightOffsetScroll =
    direction === "horizontal" &&
    side === "right" &&
    positionLeft + nodeWidth > node.scrollWidth;
  const leftOffsetScroll =
    direction === "horizontal" &&
    side === "left" &&
    positionLeft - pixelsPerStep < 0;

  if (upOffsetScroll || leftOffsetScroll) {
    node.scroll(0, 0);

    if (callback) {
      return callback();
    }
  }

  const isSuccessHorizontalScroll =
    (direction === "horizontal" &&
      side === "right" &&
      (positionLeft >= currentTarget || rightOffsetScroll)) ||
    (side === "left" && positionLeft <= currentTarget);

  const isSuccessVerticalScroll =
    (direction === "vertical" &&
      side === "up" &&
      positionTop <= currentTarget) ||
    (side === "down" && (positionTop >= currentTarget || downOffsetScroll));

  if (isSuccessHorizontalScroll || isSuccessVerticalScroll) {
    if (callback) {
      return callback();
    }
  }

  const scrollHorizontal =
    side === "right"
      ? positionLeft + pixelsPerStep > currentTarget
        ? currentTarget
        : positionLeft + pixelsPerStep
      : positionLeft - pixelsPerStep < currentTarget
        ? currentTarget
        : positionLeft - pixelsPerStep;

  const scrollVertical =
    side === "down"
      ? positionTop + pixelsPerStep > currentTarget
        ? currentTarget
        : positionTop + pixelsPerStep
      : positionTop - pixelsPerStep < currentTarget
        ? currentTarget
        : positionTop - pixelsPerStep;

  node.scroll(
    direction === "horizontal" ? scrollHorizontal : 0,
    direction === "vertical" ? scrollVertical : 0,
  );

  window.requestAnimationFrame(() =>
    smoothScroll(node, currentTarget, direction, side, callback),
  );
};

