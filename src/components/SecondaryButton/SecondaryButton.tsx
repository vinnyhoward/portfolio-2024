import React from "react";
import styled from "styled-components";
interface ButtonStyleProps {
  outline?: boolean;
  reverse?: string;
}

const Button = styled.button<ButtonStyleProps>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.fontColor.fontColor1};
  height: 40px;
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  transition: background-color 0.5s;
  display: flex;
  flex-direction: ${({ reverse }) =>
    Boolean(reverse) ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .icon__container {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  .btn__text {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    color: ${({ theme }) =>
      theme.name === "light"
        ? theme.fontColor.fontColor1
        : theme.fontColor.fontColor1};

    @media ${({ theme }) => theme.mediaQueries.medium} {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;

interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  outline?: boolean;
  reverse?: string;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  onClick,
  buttonText,
  buttonIcon,
  reverse = "false",
}) => {
  return (
    <Button reverse={reverse.toString()} onClick={onClick}>
      <div className="btn__text">{buttonText}</div>
      {buttonIcon ? <div className="icon__container">{buttonIcon}</div> : null}
    </Button>
  );
};
