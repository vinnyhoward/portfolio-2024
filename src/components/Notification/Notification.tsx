import React from "react";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";

const NotificationContainer = styled.div`
  background-color: rgba(40, 199, 128, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: ${({ theme }) => theme.fontFamily.fontColor3};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  font-weight: 500;
  border: 1px solid rgba(3, 151, 84, 0.1);

  p {
    margin: 0;
    color: rgba(3, 151, 84, 1);
  }

  .dot {
    height: 7.5px;
    width: 7.5px;
    background-color: rgba(3, 151, 84, 1);
    border-radius: 50%;
    margin-right: 8px;
  }

  .dot {
    animation: expandingDot 1s infinite;
  }

  @keyframes expandingDot {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

interface NotificationProps {
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ message }) => {
  const { theme } = useTheme();
  return (
    <NotificationContainer>
      <div className="dot" />
      <p>{message}</p>
    </NotificationContainer>
  );
};
