"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";
import { Showcase } from "@/components/Showcase/Showcase";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { Layout } from "@/components/Layout/Layout";
import {
  StarIcon,
  CopyIcon,
  ArrowIcon,
  OpenLinkIcon,
} from "@/components/Icons";
import { PROJECTS } from "@/constants/projects";
import { COMPANIES } from "@/constants/companies";
import { ROUTES } from "@/constants/routes";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 4.7rem 0.4rem;
  }
`;

interface Props {}

const Home: React.FC<Props> = () => {
  const el = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const router = useRouter();

  const isLightTheme = theme.name === "light";
  const secondaryIconColor = theme.fontColor.fontColor1;

  const heroProps = {
    title: "My Projects",
    caption:
      "I have worked on a variety of projects ranging from web development to mobile development. Here are some of the projects I have worked on as well as past companies I have worked for",
    imageUrl: null,
    extraNode: null,
  };

  useEffect(() => {
    if (el.current) {
      gsap.fromTo(
        el.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, delay: 0.1 }
      );
    }
  }, []);
  return (
    <Main ref={el}>
      <MainBody
        sectionHeader="My Projects"
        rightActionContainer={null}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <Showcase
            sectionHeader="Projects"
            rightActionContainer={null}
            dataList={PROJECTS}
          />
          <Showcase
            sectionHeader="Past Companies"
            rightActionContainer={null}
            dataList={COMPANIES}
            icon={<OpenLinkIcon fill={secondaryIconColor} />}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
