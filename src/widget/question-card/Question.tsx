"use client";
import { type FormEventHandler, useState } from "react";
import { QuestionCard } from "./QuestionCard";

export const Question = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);

  const fetchAnswer = (selectedAnswer: number[]) => {
    return new Promise((res) => {
      console.log(selectedAnswer);
      setTimeout(() => res("success"), 1000);
    });
  };

  const onCheckedAnswer = () => {
    setIsChecked(true);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!isChecked) {
      onCheckedAnswer();
      return;
    }

    setIsLoading(true);

    fetchAnswer(selectedAnswer)
      .then((response) => {
        if (response === "success") {
          // change next question
          setSelectedAnswer([]);
          setIsChecked(false);
          if (isError) {
            setIsError(false);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const onSelectAnswer = (id: number) => {
    if (!isChecked) {
      setSelectedAnswer((prev) =>
        selectedAnswer.includes(id)
          ? prev.filter((el) => el !== id)
          : [...prev, id],
      );
    }
  };

  const questionTipTap = "Вопрос";

  const answerList = [
    { id: 1, text: "Ответ 1" },
    { id: 2, text: "Ответ 2" },
    { id: 3, text: "Ответ 3" },
    { id: 4, text: "Ответ 4" },
  ];

  return (
    <div>
      {isError && <div>Ошибка</div>}
      {isLoading && <div>Загрузка...</div>}
      <QuestionCard
        onSubmit={onSubmit}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
        disabled={isLoading || !selectedAnswer.length}
        questionTipTap={questionTipTap}
        answerList={answerList}
        isChecked={isChecked}
      />
    </div>
  );
};
