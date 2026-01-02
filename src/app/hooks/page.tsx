import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";

export const metadata: Metadata = generateMetadata({
  title: "Hooks Page",
  description: "Hooks Page description",
});

export default function HooksPage() {
  return (
    <article className="article__page">
      <h1>Hooks</h1>
      <Link href={"/hooks/useAnimatedCounter"}>
        <Button variantColor="blue" variant="link">
          {"useAnimatedCounter"}
        </Button>
      </Link>
      <Link href={"/hooks/useWindowSize"}>
        <Button variantColor="blue" variant="link">
          {"useWindowSize"}
        </Button>
      </Link>
      <Link href={"/hooks/useIntersectionObserver"}>
        <Button variantColor="blue" variant="link">
          {"useIntersectionObserver"}
        </Button>
      </Link>
      <Link href={"/hooks/useDebounce"}>
        <Button variantColor="blue" variant="link">
          {"useDebounce"}
        </Button>
      </Link>
    </article>
  );
}
