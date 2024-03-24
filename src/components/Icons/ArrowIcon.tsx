import React from "react";

interface ArrowIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
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
        d="M20.7061 12.708L16.707 16.7071C16.512 16.9021 16.256 17 16 17C15.744 17 15.488 16.9021 15.293 16.7071C14.902 16.3161 14.902 15.684 15.293 15.293L17.5859 13H4C3.447 13 3 12.552 3 12C3 11.448 3.447 11 4 11H17.5859L15.293 8.70707C14.902 8.31607 14.902 7.68401 15.293 7.29301C15.684 6.90201 16.316 6.90201 16.707 7.29301L20.7061 11.292C20.7991 11.385 20.8721 11.495 20.9231 11.618C21.0241 11.862 21.0241 12.1381 20.9231 12.3821C20.8721 12.5051 20.7991 12.615 20.7061 12.708Z"
        fill={fill}
      />
    </svg>
  );
};
