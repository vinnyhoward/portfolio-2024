import React from "react";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
import { ArrowIcon } from "../Icons";

const MainBodyContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  width: ${({ theme }) => theme.layout.width};
  border: 1px solid ${({ theme }) => theme.border.color1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 8px 8px;
  min-height: 100vh;

  .title__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    width: 100%;

    h1 {
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.fontFamily.fontColor3};
    }
  }

  .right-action__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

interface MainBodyProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
}

export const MainBody: React.FC<MainBodyProps> = ({
  sectionHeader = "Software Developer",
  rightActionContainer = null,
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
      <p></p>
    </MainBodyContainer>
  );
};
