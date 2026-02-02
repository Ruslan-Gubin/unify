
type Props = {
  questionTipTap: string;
};

export const QuestionTipTap = ({ questionTipTap }: Props) => {

  const tiptapContent = `
  const editor = useEditor({
    extensions,
    content: ${questionTipTap},
  });


    <Tiptap instance={editor}>
      <Tiptap.Content />
    </Tiptap>
`


  return (
    <section>
      {tiptapContent}
    </section>
  );
};
