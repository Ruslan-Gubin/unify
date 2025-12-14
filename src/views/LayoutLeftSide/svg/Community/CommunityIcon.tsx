export const CommunityIcon = (props: { size?: string; fill?: string }) => {
  return (
    <svg
      width={props.size ? props.size : 18}
      height={props.size ? props.size : 18}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      <defs></defs>
      <title></title>
      <g data-name="79-users" id="_79-users">
        <circle className="cls-1" cx="16" cy="13" r="5"></circle>
        <path className="cls-1" d="M23,28A7,7,0,0,0,9,28Z"></path>
        <path className="cls-1" d="M24,14a5,5,0,1,0-4-8"></path>
        <path className="cls-1" d="M25,24h6a7,7,0,0,0-7-7"></path>
        <path className="cls-1" d="M12,6a5,5,0,1,0-4,8"></path>
        <path className="cls-1" d="M8,17a7,7,0,0,0-7,7H7"></path>
      </g>
    </svg>
  );
};
