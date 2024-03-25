"use client";
import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

interface Props {
  // Define your component props here
}

const Home: React.FC<Props> = () => {
  return <Main></Main>;
};

export default Home;
