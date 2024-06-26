import React from "react";

interface GooglePlayIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

export const GooglePlayIcon: React.FC<GooglePlayIconProps> = ({
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
        d="M10.91 11.9998L4.03003 18.5898V5.4198L10.91 11.9998ZM11.99 10.9598L15.32 7.76978L7.22998 3.32977C6.91998 3.12977 6.51999 3.02979 6.10999 3.02979C5.45999 3.02979 4.85997 3.31978 4.46997 3.76978L11.98 10.9598H11.99ZM11.99 13.0398L4.46002 20.2498C4.85002 20.7198 5.43999 21.0298 6.10999 21.0298C6.51999 21.0298 6.86999 20.9298 7.17999 20.7298L15.37 16.2698L11.99 13.0298V13.0398ZM19.86 10.2598L16.7 8.52979L13.07 11.9998L16.75 15.5198L19.9 13.7998C20.56 13.4598 21.02 12.7698 21.02 12.0298C20.97 11.2898 20.51 10.5998 19.85 10.2598H19.86Z"
        fill={fill}
      />
    </svg>
  );
};
