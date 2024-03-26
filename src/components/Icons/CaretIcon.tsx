import React from "react";

interface CaretIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const CaretIcon: React.FC<CaretIconProps> = ({
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
        d="M9.00004 20C8.74404 20 8.48801 19.9021 8.29301 19.7071C7.90201 19.3161 7.90201 18.684 8.29301 18.293L14.586 12L8.29301 5.70707C7.90201 5.31607 7.90201 4.68401 8.29301 4.29301C8.68401 3.90201 9.31607 3.90201 9.70707 4.29301L16.7071 11.293C17.0981 11.684 17.0981 12.3161 16.7071 12.7071L9.70707 19.7071C9.51207 19.9021 9.25604 20 9.00004 20Z"
        fill={fill}
      />
    </svg>
  );
};
