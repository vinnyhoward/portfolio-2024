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
  padding: 6rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 4.7rem 0.4rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .btn {
    margin-right: 15px;
  }
`;

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const el = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const router = useRouter();

  const isLightTheme = theme.name === "light";
  const primaryIconColor = isLightTheme
    ? theme.fontColor.fontColor2
    : theme.fontColor.fontColor1;
  const secondaryIconColor = theme.fontColor.fontColor1;

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard
      .writeText(process.env.NEXT_PUBLIC_EMAIL || "missing email :(")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const renderButtons = () => {
    return (
      <ButtonContainer>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<StarIcon fill={primaryIconColor} />}
            buttonText="Hire Me!"
            onClick={() => router.push(ROUTES.HIRE, { scroll: false })}
          />
        </div>
        <div className="btn">
          <SecondaryButton
            buttonIcon={<CopyIcon fill={secondaryIconColor} />}
            buttonText={isCopied ? "Copied!" : "Copy Email"}
            onClick={() => handleCopy()}
          />
        </div>
      </ButtonContainer>
    );
  };

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
    title: "I'm Vince Howard 👋",
    caption:
      "I am a full-stack developer with a passion for building products that make a difference.",
    imageUrl: "/images/temp_profile.png",
    extraNode: renderButtons(),
  };
  return (
    <Main ref={el}>
      <MainBody
        sectionHeader="Full-Stack Developer"
        rightActionContainer={<Notification message="Unavailable for work" />}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <Showcase
            sectionHeader="Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS}
          />
          <Showcase
            sectionHeader="Past Companies"
            rightActionContainer={renderShowcaseButton()}
            dataList={COMPANIES}
            icon={<OpenLinkIcon fill={secondaryIconColor} />}
          />
        </Layout>
      </MainBody>
    </Main>
  );
}
