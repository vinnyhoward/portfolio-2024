import React from "react";
import { MainBodyContainer } from "./MainBody.styles";
import { SectionHeader } from "../SectionHeader/SectionHeader";

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
  return (
    <MainBodyContainer>
      <div className="section__container">
        <SectionHeader
          sectionHeader={sectionHeader}
          rightActionContainer={rightActionContainer}
        />
      </div>
      <div className="hero">{heroContainer}</div>
      <div className="children__container">{children}</div>
    </MainBodyContainer>
  );
};
