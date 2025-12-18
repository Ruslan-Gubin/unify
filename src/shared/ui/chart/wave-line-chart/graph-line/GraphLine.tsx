"use client";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/src/shared/hooks/useWindowSize";
import { LineChart } from "@/src/shared/services/canvas/LineChart";
import style from "./GraphLine.module.css";

type Props = {
  statisticLines: number[][];
  colorsList: string[];
};

const GraphLine = ({ statisticLines, colorsList }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width } = useWindowSize();

  const getMaxNumber = (numbers: number[]) => {
    if (numbers.length === 0) {
      return 0;
    }
    return Math.max(...numbers);
  };

  const maxCount = getMaxNumber(statisticLines.flat());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvasRef.current || !width) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 189;

    const drawLineGraph = new LineChart({
      baseContext: context,
      colorGridLines: "#DEE1E6",
      rowCount: 4,
      maxCount,
      lines: statisticLines,
      colorsList,
    });

    const render = () => drawLineGraph.update();

    const animate = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [colorsList, maxCount, statisticLines, width]);

  return <canvas className={style.root} ref={canvasRef}></canvas>;
};

export { GraphLine };
