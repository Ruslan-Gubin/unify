import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { EmailIcon } from "@/src/shared/svg/EmailIcon";

export const metadata: Metadata = generateMetadata({
  title: "Buttons Page",
  description: "Buttons Page description",
});

export default function ButtonsPage() {
  return (
    <article className="article__page">
      <h1>Buttons</h1>
      <Link href={"/components/buttons/button_v1"}>
        <Button variantColor="blue" variant="link">
          {"button_v1"}
        </Button>
      </Link>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button variantColor="teal" disabled>
          teal
        </Button>
        <Button variantColor="teal">teal</Button>
        <Button variantColor="error">error</Button>
        <Button variantColor="green">green</Button>
        <Button variantColor="pink">pink</Button>
        <Button variantColor="blue">blue</Button>
        <Button>default</Button>

        <Button variant="solid" variantColor="green">
          solid
        </Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variantColor="blue" variant="link">
          link
        </Button>

        <Button size="lg" variant="solid" variantColor="teal">
          <EmailIcon />
          lg/solid/teal
        </Button>
        <Button size="md" variant="solid" variantColor="error">
          <EmailIcon />
          md/solid/error
        </Button>
        <Button size="sm" variant="solid" variantColor="green">
          <EmailIcon />
          sm/solid/green
        </Button>
        <Button size="xs" variant="solid" variantColor="pink">
          <EmailIcon />
          xs/solid/pink
        </Button>
      </div>
    </article>
  );
}
