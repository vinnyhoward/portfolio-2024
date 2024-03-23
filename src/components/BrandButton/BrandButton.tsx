import React from "react";
import styled from "styled-components";

const Button = styled.button`
  /* Add your button styles here */
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const BrandButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default BrandButton;
