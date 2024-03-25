import styled from "styled-components";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StyledComponentsRegistry from "./registry";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
