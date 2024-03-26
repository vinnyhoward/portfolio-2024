import React from "react";
import styled from "styled-components";
import { SectionHeader } from "../SectionHeader/SectionHeader";

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  padding: 24px;
`;

interface ShowcaseProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({
  sectionHeader = "Section Header",
  rightActionContainer = null,
}) => {
  return (
    <ShowcaseContainer>
      <SectionHeader
        sectionHeader={sectionHeader}
        rightActionContainer={rightActionContainer}
      />
    </ShowcaseContainer>
  );
};
