"use client";

import gsap from "gsap";
import styled from "styled-components";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { StarIcon, CopyIcon } from "@/components/Icons";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { theme } = useTheme();
  const isLightTheme = theme.name === "light";
  const primaryIconColor = isLightTheme
    ? theme.fontFamily.fontColor2
    : theme.fontFamily.fontColor1;
  const secondaryIconColor = isLightTheme
    ? theme.fontFamily.fontColor1
    : theme.fontFamily.fontColor2;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(process.env.NEXT_PUBLIC_EMAIL || "missing email :(")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
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
            buttonText="Copy Email"
            onClick={() => handleCopy()}
          />
        </div>
      </ButtonContainer>
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
      />
    </Main>
  );
}
