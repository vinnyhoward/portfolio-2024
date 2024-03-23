import React from "react";

interface HomeIconProps {
  fill?: string;
  size?: number;
  width?: number;
}

export const HomeIcon: React.FC<HomeIconProps> = ({
  fill = "#25314C",
  size = 24,
  width = 24,
}) => {
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2701 9.06205L13.5881 3.56901C12.6651 2.81001 11.3341 2.81001 10.4111 3.56901L3.73003 9.06205C3.16903 9.52305 2.90203 10.251 3.03203 10.965L4.48711 18.9471C4.70411 20.1351 5.73909 20.9991 6.94609 20.9991H17.052C18.26 20.9991 19.295 20.1351 19.511 18.9471L20.966 10.964C21.098 10.252 20.8311 9.52305 20.2701 9.06205ZM14 17.75H10C9.58605 17.75 9.25005 17.414 9.25005 17C9.25005 16.586 9.58605 16.25 10 16.25H14C14.414 16.25 14.75 16.586 14.75 17C14.75 17.414 14.414 17.75 14 17.75Z"
      />
    </svg>
  );
};
