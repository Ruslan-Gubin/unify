import type { FormEventHandler } from "react";
import { AnswerList } from "./AnswerList";
import { Explanation } from "./Explanation";
import { QuestionAction } from "./QuestionAction";
import { QuestionTipTap } from "./QuestionTipTap";

type Props = {
  questionTipTap: string;
  answerList: { id: number; text: string }[];
  onSubmit: FormEventHandler;
  onSelectAnswer: (id: number) => void;
  selectedAnswer: number[];
  disabled: boolean;
  isChecked: boolean;
};

export const QuestionCard = ({
  questionTipTap,
  answerList,
  onSubmit,
  onSelectAnswer,
  selectedAnswer,
  disabled,
  isChecked,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <QuestionTipTap questionTipTap={questionTipTap} />
      <AnswerList
        disabled={isChecked}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
        answerList={answerList}
      />
      {isChecked && <Explanation explanation="explanation" />}
      <QuestionAction isChecked={isChecked} disabled={disabled} />
    </form>
  );
};
