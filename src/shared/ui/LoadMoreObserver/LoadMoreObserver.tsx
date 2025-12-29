import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

type Props = {
  disabled: boolean;
  onIntersect: () => void;
};

export const LoadMoreObserver = ({ disabled, onIntersect }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    target: ref,
    onIntersect,
    threshold: 1,
    disabled,
  });

  return <div ref={ref}></div>;
};
