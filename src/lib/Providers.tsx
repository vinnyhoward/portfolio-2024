"use client";

import styled from "styled-components";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StyledComponentsRegistry from "./registry";
import { GlobalStyles } from "@/styles/GlobalStyles";

const ParentLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider>
        <ParentLayout>{props.children}</ParentLayout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
