import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.fontColor.fontColor1};
  height: 40px;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  transition: background-color 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .icon__container {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  .btn__text {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    color: ${({ theme }) =>
      theme.name === "light"
        ? theme.fontColor.fontColor1
        : theme.fontColor.fontColor1};
  }
`;

interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  outline?: boolean;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  onClick,
  buttonText,
  buttonIcon,
}) => {
  return (
    <Button onClick={onClick}>
      {buttonIcon ? <div className="icon__container">{buttonIcon}</div> : null}
      <div className="btn__text">{buttonText}</div>
    </Button>
  );
};
