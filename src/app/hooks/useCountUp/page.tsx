import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Hook useCountUp Page",
  description: "Hook useCountUp Page description",
});

export default async function hookUseCountUpPage() {
  const hookUseCountUp = await readContentFile(
    "src/shared/hooks/useCountUp.ts",
  );


  return (
    <article className="article__page">
      <h1>{'useCountUp'}</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "endCount",
            value: "число, до какого значения будет увеличиваться счетчик.",
          },
          {
            label: "timeAnimation",
            value: "время анимации (ms)",
          },
          {
            label: "startCount",
            value: "опционально, принимает число с которого начинается отчет.",
          },
        ]}
      />

      {typeof hookUseCountUp === "string" && (
        <CodeWrapper
          description="Этот хук useCountUp плавно увеличивает число от startCount до endCount за заданное время (timeAnimation). Он автоматически обновляет число с адаптивной скоростью, создавая эффект счетчика, который анимированно поднимается до целевого значения."
          fileName="useCountUp.ts"
          title="Hook"
          code={hookUseCountUp}
        />
      )}
    </article>
  );
}
