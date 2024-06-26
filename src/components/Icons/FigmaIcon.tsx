import React from "react";

interface FigmaIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const FigmaIcon: React.FC<FigmaIconProps> = ({
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
        d="M17.5 12C17.5 13.38 16.38 14.5 15 14.5C13.62 14.5 12.5 13.38 12.5 12C12.5 10.62 13.62 9.5 15 9.5C16.38 9.5 17.5 10.62 17.5 12ZM9 15.5C7.62 15.5 6.5 16.62 6.5 18C6.5 19.38 7.62 20.5 9 20.5C10.38 20.5 11.5 19.38 11.5 18V15.5H9ZM15 3.5H12.5V8.5H15C16.38 8.5 17.5 7.38 17.5 6C17.5 4.62 16.38 3.5 15 3.5ZM9 3.5C7.62 3.5 6.5 4.62 6.5 6C6.5 7.38 7.62 8.5 9 8.5H11.5V3.5H9ZM9 9.5C7.62 9.5 6.5 10.62 6.5 12C6.5 13.38 7.62 14.5 9 14.5H11.5V9.5H9Z"
        fill={fill}
      />
    </svg>
  );
};
