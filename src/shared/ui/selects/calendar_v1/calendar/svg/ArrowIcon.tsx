
export const ArrowIcon = (props: { direction: "left" | "right" }) => {
  return (
    <>
      {props.direction === "left" ? (
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arrow icon</title>
          <path
            d="M7 2L1 8L7 14"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>
        </svg>
      ) : (
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arrow icon</title>
          <path
            d="M2 14L8 8L2 2"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
    </>
  );
};
