type Props = {
  disabled: boolean;
  isChecked: boolean;
};

export const QuestionAction = ({ disabled, isChecked }: Props) => {
  return (
    <footer>
      <button disabled={disabled} type="submit" >
        {isChecked ? "Дальше" : "Проверить"}
      </button>
    </footer>
  );
};
