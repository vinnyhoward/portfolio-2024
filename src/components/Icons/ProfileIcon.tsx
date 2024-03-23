import React from "react";

interface ProfileIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({
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
        d="M8.00903 6.5C8.00903 4.294 9.80303 2.5 12.009 2.5C14.215 2.5 16.009 4.294 16.009 6.5C16.009 8.706 14.215 10.5 12.009 10.5C9.80303 10.5 8.00903 8.706 8.00903 6.5ZM14 12.5H10C5.94 12.5 4.5 15.473 4.5 18.019C4.5 20.296 5.71105 21.5 8.00305 21.5H15.9969C18.2889 21.5 19.5 20.296 19.5 18.019C19.5 15.473 18.06 12.5 14 12.5Z"
        fill={fill}
      />
    </svg>
  );
};
