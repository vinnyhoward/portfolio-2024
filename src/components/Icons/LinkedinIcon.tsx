import React from "react";

interface LinkedinIconProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const LinkedinIcon: React.FC<LinkedinIconProps> = ({
  fill = "#25314C",
  height = 24,
  width = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.03995 21.0002H3.24995V9.6302H7.03995V21.0002ZM7.41995 5.2102C7.41995 4.0102 6.46996 3.0402 5.26996 3.0002C4.04996 2.9702 3.02995 3.93019 2.99995 5.15019C2.96995 6.37019 3.92995 7.39019 5.14995 7.42019C6.38995 7.43019 7.39995 6.4502 7.41995 5.2102ZM20.9499 14.1302C20.9499 10.5902 18.66 9.51019 16.71 9.51019C15.34 9.47019 14.05 10.1402 13.3 11.2802V9.6402H9.63995V21.0102H13.4299V15.1102C13.4299 15.0502 13.4299 14.9902 13.4299 14.9302C13.4299 14.9302 13.4299 14.9302 13.4299 14.9202C13.3499 13.7102 14.2699 12.6602 15.4799 12.5802C16.4699 12.5802 17.22 13.2202 17.22 15.0202V21.0102H21.0099L20.96 14.1402L20.9499 14.1302Z"
        fill={fill}
      />
    </svg>
  );
};
