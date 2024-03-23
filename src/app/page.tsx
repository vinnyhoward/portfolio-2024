"use client";

import styled from "styled-components";
import { NavBar } from "../components/NavBar/NavBar";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
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
    </Main>
  );
}
