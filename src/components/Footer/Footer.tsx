"use client";

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.color7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  margin: 24px 0px;

  p {
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor.fontColor3};
    margin: 0;
  }
`;

interface FooterProps {
  // Define the props for your component here
}

export const Footer: React.FC<FooterProps> = (props) => {
  // Implement your component logic here

  return (
    <FooterContainer>
      <p>© 2024 Vincent Howard</p>
    </FooterContainer>
  );
};
