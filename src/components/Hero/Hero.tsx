import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background-color: red;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.color1};
  }
`;

interface HeroProps {
  title: string;
  caption: string;
  imageUrl: string;
  extraNode?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  caption,
  imageUrl,
  extraNode,
}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
