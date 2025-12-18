import { CanvasDrawGraph } from "./CanvasDrawGraph";
import type { LineChartProps } from "./types";

export class LineChart extends CanvasDrawGraph {
  readonly colorsList: string[];

  constructor({ colorsList, ...args }: LineChartProps) {
    super(args);
    this.colorsList = colorsList;
  }

  private getLinesCoordinate(data: number[]): { x: number; y: number }[] {
    const stepHorizontal = this.gridWidth / this.rowCount;

    const points = [];

    for (let i = 0; i < data.length; i++) {
      const step = this.lgSpacing + stepHorizontal * i;
      const { currentY } = this.getCurrentY(
        data[i],
        this.maxThreshold,
        this.gridHeight,
      );

      points.push({ x: step, y: currentY + this.smSpacing });
    }

    return points;
  }

  private drawContent() {
    for (let i = 0; i < this.lines.length; i++) {
      const points = this.getLinesCoordinate(this.lines[i]);
      this.canvasDraw.bezierCurvePath({
        points,
        border: { color: this.colorsList[i], width: 1.5 },
      });
      this.baseContext.stroke();

      this.drawCircles(points, this.colorsList[i]);
    }
  }

  private drawCircles(points: { x: number; y: number }[], color: string) {
    for (let j = 0; j < points.length; j++) {
      const { x, y } = points[j];
      this.canvasDraw.arc({
        size: { x, y, radius: 3 },
        fill: { color: color },
        border: { color: color, join: "round", width: 1 },
      });
    }
  }

  public update() {
    this.fillTable();
    this.drawContent();
  }
}
