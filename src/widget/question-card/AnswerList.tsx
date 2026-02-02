type Props = {
  answerList: { id: number; text: string }[];
  onSelectAnswer: (id: number) => void;
  selectedAnswer: number[];
  disabled: boolean;
};

export const AnswerList = ({
  answerList,
  onSelectAnswer,
  selectedAnswer,
  disabled,
}: Props) => {
  return (
    <ol>
      {answerList.map((answer) => (
        <li key={answer.id}>
          <input
            disabled={disabled}
            onChange={() => onSelectAnswer(answer.id)}
            id={`${answer.id}`}
            type="checkbox"
            checked={selectedAnswer.includes(answer.id)}
          />
          <label htmlFor={`${answer.id}`}>{answer.text}</label>
        </li>
      ))}
    </ol>
  );
};
