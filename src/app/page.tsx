"use client";

import styled from "styled-components";
import { NavBar } from "../components/NavBar/NavBar";
import { MainBody } from "../components/MainBody/MainBody";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Main>
      <NavBar />
      <MainBody />
    </Main>
  );
}
