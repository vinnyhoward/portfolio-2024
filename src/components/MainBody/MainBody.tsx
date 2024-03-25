import React from "react";
import { MainBodyContainer } from "./MainBody.styles";
import { useTheme } from "../../contexts/ThemeContext";
import { Hero } from "../Hero/Hero";
import { ArrowIcon } from "../Icons";

interface MainBodyProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
  heroContainer?: React.ReactNode;
  children?: React.ReactNode;
}

export const MainBody: React.FC<MainBodyProps> = ({
  sectionHeader = "Software Developer",
  rightActionContainer = null,
  heroContainer = null,
  children,
}) => {
  const { theme } = useTheme();
  const iconColor = theme.fontFamily.fontColor3;
  return (
    <MainBodyContainer>
      <div className="title__container">
        <h1>
          <div className="icon__container">
            <ArrowIcon fill={iconColor} />
          </div>
          {sectionHeader}
        </h1>
        <div className="right-action__container">{rightActionContainer}</div>
      </div>
      <div className="hero">{heroContainer}</div>
      <div className="children__container">{children}</div>
    </MainBodyContainer>
  );
};
