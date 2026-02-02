type Props = {
  explanation: string;
};

export const Explanation = ({ explanation }: Props) => {
  return (
    <section>
      <p>{explanation}</p>
    </section>
  );
};
