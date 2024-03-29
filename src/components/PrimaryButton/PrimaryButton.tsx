import React from "react";
import styled from "styled-components";

interface ButtonStyleProps {
  outline?: boolean;
  reverse?: string;
}

const Button = styled.button<ButtonStyleProps>`
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  background-color: ${({ theme }) => theme.colors.color3};
  color: ${({ theme }) => theme.fontColor.fontColor2};
  height: 40px;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  border: none;
  transition: background-color 0.5s;
  display: flex;
  flex-direction: ${({ reverse }) =>
    Boolean(reverse) ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;

  &:hover {
    /* border 1px solid ${({ theme }) => theme.colors.color3}; */
  }

  .icon__container {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ reverse }) => (Boolean(reverse) ? "0 0 0 8px" : "0 8px 0 0")};
  }

  .btn__text {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    color: ${({ theme }) =>
      theme.name === "light"
        ? theme.fontColor.fontColor2
        : theme.fontColor.fontColor1};

    @media ${({ theme }) => theme.mediaQueries.medium} {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;

interface PrimaryButtonProps {
  onClick?: () => void;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  outline?: boolean;
  reverse?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  buttonText,
  buttonIcon,
  reverse = "false",
}) => {
  return (
    <Button reverse={reverse.toString()} onClick={onClick}>
      {buttonIcon ? <div className="icon__container">{buttonIcon}</div> : null}
      <div className="btn__text">{buttonText}</div>
    </Button>
  );
};
