import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.color3};
  color: ${({ theme }) => theme.fontFamily.fontColor2};
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  border: none;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const BrandButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
