"use client";

import styles from "./page.module.css";
import styled from "styled-components";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
`;

export default function Home() {
  return <Main className={styles.main}></Main>;
}
