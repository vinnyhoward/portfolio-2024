import React from "react";

interface AppleIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const AppleIcon: React.FC<AppleIconProps> = ({
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
        d="M16.54 12.01C16.54 12.09 16.4 14.47 19 15.7C18.51 17.18 16.85 20.47 14.91 20.49C13.79 20.49 13.13 19.77 11.87 19.77C10.61 19.77 9.85001 20.47 8.85001 20.49C6.93001 20.55 5.08999 16.93 4.57999 15.46C4.19999 14.34 4.01001 13.25 4.01001 12.2C4.01001 8.64001 6.37001 6.88001 8.60001 6.85001C9.68001 6.85001 11.05 7.64001 11.64 7.64001C12.21 7.64001 13.75 6.7 15.17 6.81C16.66 6.93 17.8 7.52001 18.55 8.60001C17.21 9.42001 16.55 10.53 16.56 12.01H16.54ZM14.31 5.41C15.41 4.11 15.31 2.92 15.27 2.5C14.3 2.56 13.18 3.15999 12.54 3.89999C11.84 4.69999 11.42 5.68001 11.51 6.79001C12.56 6.87001 13.52 6.33 14.3 5.41H14.31Z"
        fill={fill}
      />
    </svg>
  );
};
