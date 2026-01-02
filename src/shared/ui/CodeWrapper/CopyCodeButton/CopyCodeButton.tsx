"use client";
import { useEffect, useRef } from "react";
import { CopyIcon } from "@/src/shared/svg/CopyIcon";
import styles from "./CopyCodeButton.module.css";

type Props = {
  code: string;
};

export const CopyCodeButton = (props: Props) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(props.code)
      .then(() => {
        if (svgRef.current) {
          svgRef.current.classList.add(styles.activeCopySvg);
        }
      })
      .catch((error) => {
        console.error(`Text copy error: ${error}`);
      });
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const node = svgRef.current;

    const callbackEndAnimated = () =>
      node.classList.remove(styles.activeCopySvg);

    node.addEventListener("animationend", callbackEndAnimated);

    return () => {
      if (node) {
        node.removeEventListener("animationend", callbackEndAnimated);
      }
    };
  }, []);

  return (
    <button title="copy code" type="button">
      <CopyIcon ref={svgRef} onClick={handleCopyText} />
    </button>
  );
};
