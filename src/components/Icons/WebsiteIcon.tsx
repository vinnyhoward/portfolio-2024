import React from "react";

interface WebsiteIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const WebsiteIcon: React.FC<WebsiteIconProps> = ({
  fill = "#25314C",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 20.0601V12.75H2.25C2.11 12.75 2 12.86 2 13C2 15 3 16 5 16H9V19.25H6.5C6.09 19.25 5.75 19.59 5.75 20C5.75 20.41 6.09 20.75 6.5 20.75H11.55C11.52 20.53 11.5 20.3001 11.5 20.0601ZM17 2H5C3 2 2 3 2 5V11C2 11.14 2.11 11.25 2.25 11.25H11.55C11.81 9.54 13.0499 8.5 14.9299 8.5C14.9299 8.5 19.43 8.5 19.7 8.5C19.91 8.5 20 8.31995 20 8.19995C20 8.07995 20 5 20 5C20 3 19 2 17 2ZM20.071 10H14.928C13.642 10 12.999 10.6469 12.999 11.9419V20.0581C12.999 21.3531 13.642 22 14.928 22H20.071C21.357 22 22 21.3531 22 20.0581V11.9419C22 10.6469 21.357 10 20.071 10ZM17.5 20.5C16.948 20.5 16.5 20.052 16.5 19.5C16.5 18.948 16.948 18.5 17.5 18.5C18.052 18.5 18.5 18.948 18.5 19.5C18.5 20.052 18.052 20.5 17.5 20.5Z"
        fill={fill}
      />
    </svg>
  );
};
