import React from "react";
import styled from "styled-components";
import { Social } from "@/components/Social/Social";
import { Footer } from "@/components/Footer/Footer";
import { ContactBanner } from "@/components/ContactBanner/ContactBanner";

const Container = styled.div``;

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideContactBanner?: boolean;
  hideSocial?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  hideContactBanner = false,
  hideFooter = false,
  hideSocial = false,
}) => {
  return (
    <Container>
      {children}
      {hideContactBanner ? null : <ContactBanner />}
      {hideSocial ? null : <Social />}
      {hideFooter ? null : <Footer />}
    </Container>
  );
};
