import React from "react";
import styled from "styled-components";
import { Social } from "@/components/Social/Social";
import { Footer } from "@/components/Footer/Footer";
import { ContactBanner } from "@/components/ContactBanner/ContactBanner";

const Container = styled.div``;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      {children}
      <ContactBanner />
      <Social />
      <Footer />
    </Container>
  );
};
