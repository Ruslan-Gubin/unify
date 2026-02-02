import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Question } from "@/src/widget/question-card/Question";

export const metadata: Metadata = generateMetadata({
  title: "Вопросы - My UI Kit",
  description:
    "Документация по сервисам в My UI Kit. Узнайте, как использовать встроенные сервисы для работы с API, хранилищем и другими внешними системами.",
  keywords: ["Вопросы", "API", "хранилище", "внешние системы", "документация"],
});

export default function ServicesPage() {
  return (
    <article className="article__page">
      <h1>Question</h1>
      <Question />
    </article>
  );
}
