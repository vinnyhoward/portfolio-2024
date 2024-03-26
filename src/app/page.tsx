"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";
import { Showcase } from "@/components/Showcase/Showcase";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { Social } from "@/components/Social/Social";
import { Footer } from "@/components/Footer/Footer";
import { StarIcon, CopyIcon, ArrowIcon } from "@/components/Icons";
import { PROJECTS } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .btn {
    margin-right: 7.5px;
  }
`;

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
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
            onClick={() => console.log("clicked")}
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
        reverse
        buttonIcon={<ArrowIcon fill={secondaryIconColor} />}
        buttonText="View All"
        onClick={() => router.push(ROUTES.PROJECTS, { scroll: false })}
      />
    );
  };
  const heroProps = {
    title: "I'm Vince Howard 👋",
    caption:
      "I am a software engineer with a passion for building products that make a difference.",
    imageUrl: "/images/temp_profile.png",
    extraNode: renderButtons(),
  };
  return (
    <Main>
      <MainBody
        sectionHeader="Software Engineer"
        rightActionContainer={<Notification message="Available for work" />}
        heroContainer={<Hero {...heroProps} />}
      >
        <Showcase
          sectionHeader="Projects"
          rightActionContainer={renderShowcaseButton()}
          dataList={PROJECTS}
        />
        <Social />
        <Footer />
      </MainBody>
    </Main>
  );
}
