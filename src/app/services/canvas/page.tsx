import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Canvas Page",
  description: "Canvas Page description",
});

export default function CanvasPage() {
  return (
    <article className="article__page">
      <h1>Canvas</h1>
      <Link href={"/services/canvas/types"}>
        <Button variantColor="blue" variant="link">
          Types
        </Button>
      </Link>
      <Link href={"/services/canvas/canvas-draw"}>
        <Button variantColor="blue" variant="link">
          Canvas Draw
        </Button>
      </Link>
      <Link href={"/services/canvas/canvas-draw-graph"}>
        <Button variantColor="blue" variant="link">
Canvas Draw Graph
        </Button>
      </Link>
      <Link href={"/services/canvas/draw-service"}>
        <Button variantColor="blue" variant="link">
Canvas Services
        </Button>
      </Link>
      <Link href={"/services/canvas/line-chart"}>
        <Button variantColor="blue" variant="link">
Draw Line chart
        </Button>
      </Link>
      <Link href={"/services/canvas/pie-chart-draw"}>
        <Button variantColor="blue" variant="link">
Pie chart draw
        </Button>
      </Link>
    </article>
  );
}
