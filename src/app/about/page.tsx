"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { MainBody } from "@/components/MainBody/MainBody";
import { Hero } from "@/components/Hero/Hero";
import { Showcase } from "@/components/Showcase/Showcase";
import { Layout } from "@/components/Layout/Layout";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import {
  GithubIcon,
  FigmaIcon,
  WebsiteIcon,
  ArrowIcon,
} from "@/components/Icons";
import { ROUTES } from "@/constants/routes";
import { PROJECTS } from "@/constants/projects";

const Main = styled.div`
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
  const primaryIconColor = isLightTheme
    ? theme.fontColor.fontColor2
    : theme.fontColor.fontColor1;
  const secondaryIconColor = theme.fontColor.fontColor1;

  const renderShowcaseButton = () => {
    return (
      <SecondaryButton
        reverse={"true"}
        buttonIcon={<ArrowIcon fill={secondaryIconColor} />}
        buttonText="View All"
        onClick={() => router.push(ROUTES.PROJECTS, { scroll: false })}
      />
    );
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

  const heroProps = {
    title: "Hey, my name is Vincent!",
    caption:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logoUrl: null,
    imageUrl: null,
    extraNode: null,
  };

  return (
    <Main ref={el}>
      <MainBody
        sectionHeader="About Me"
        rightActionContainer={null}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <Showcase
            sectionHeader="Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
