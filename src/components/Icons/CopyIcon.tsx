import React from "react";

interface CopyIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const CopyIcon: React.FC<CopyIconProps> = ({
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
        d="M9.62012 5.5C7.04012 5.5 5.5 7.04 5.5 9.62V16.675C5.5 16.85 5.3449 16.997 5.1709 16.98C3.7289 16.836 3 15.964 3 14.38V5.62C3 3.88 3.88012 3 5.62012 3H14.3799C15.9639 3 16.836 3.72902 16.98 5.17102C16.998 5.34502 16.851 5.5 16.676 5.5H9.62012ZM18.375 7H17H9.625C7.875 7 7 7.875 7 9.625V17V18.375C7 20.125 7.875 21 9.625 21H18.375C20.125 21 21 20.125 21 18.375V9.625C21 7.875 20.125 7 18.375 7Z"
        fill={fill}
      />
    </svg>
  );
};
