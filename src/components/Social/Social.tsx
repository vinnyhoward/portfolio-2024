"use client";

import React from "react";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "../Icons";

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.color7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  margin: 24px 0px;

  .section__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .social-media__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .link-icon {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.color1};
    border: 1px solid ${({ theme }) => theme.border.colors.color1};
    margin: 0 7.5px;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface SocialProps {}

export const Social: React.FC<SocialProps> = () => {
  const { theme } = useTheme();
  const primaryIconColor = theme.fontColor.fontColor1;
  const iconSize = 28;
  return (
    <SocialContainer>
      <div className="section__container">
        <SectionHeader sectionHeader="Follow Me" />
      </div>
      <div className="social-media__container">
        <a
          className="link-icon"
          href="https://github.com/vinnyhoward"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            height={iconSize}
            width={iconSize}
            fill={primaryIconColor}
          />
        </a>
        <a
          className="link-icon"
          href="https://www.linkedin.com/in/vinnyhoward/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            height={iconSize}
            width={iconSize}
            fill={primaryIconColor}
          />
        </a>
        <a
          className="link-icon"
          href="https://twitter.com/NiftyDeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            height={iconSize}
            width={iconSize}
            fill={primaryIconColor}
          />
        </a>
        <a
          className="link-icon"
          href="https://www.instagram.com/vinnyyhoward/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            height={iconSize}
            width={iconSize}
            fill={primaryIconColor}
          />
        </a>
      </div>
    </SocialContainer>
  );
};
