import styled from "styled-components";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ArrowIcon } from "../Icons";

const SectionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .title__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.fontColor.fontColor3};

      @media ${({ theme }) => theme.mediaQueries.medium} {
        font-size: ${({ theme }) => theme.fontSize.md};
      }
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
`;

interface SectionHeaderProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionHeader,
  rightActionContainer = null,
}) => {
  const { theme } = useTheme();
  const iconColor = theme.fontColor.fontColor3;
  return (
    <SectionHeaderContainer>
      <div className="title__container">
        {sectionHeader ? (
          <h1>
            <div className="icon__container">
              <ArrowIcon fill={iconColor} />
            </div>
            {sectionHeader}
          </h1>
        ) : null}
        <div className="right-action__container">{rightActionContainer}</div>
      </div>
    </SectionHeaderContainer>
  );
};
