"use client";
import Link from "next/link";
import {
  HomeIcon,
  ProfileIcon,
  ProjectsIcon,
  DarkIcon,
  LightIcon,
  StarIcon,
} from "../Icons";
import { useTheme } from "../../contexts/ThemeContext";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Nav } from "./NavBar.styles";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme.name === "light";
  const iconColor = theme.fontFamily.fontColor1;
  const buttonIconColor = isLightTheme
    ? theme.fontFamily.fontColor2
    : theme.fontFamily.fontColor1;

  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">
            <HomeIcon fill={iconColor} />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <ProjectsIcon fill={iconColor} />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <ProfileIcon fill={iconColor} />
          </Link>
        </li>
      </ul>

      <div className="interaction-container">
        <li onClick={() => toggleTheme()}>
          {isLightTheme ? (
            <DarkIcon fill={iconColor} />
          ) : (
            <LightIcon fill={iconColor} />
          )}
        </li>
        <div className="btn__container">
          <PrimaryButton
            buttonIcon={<StarIcon fill={buttonIconColor} />}
            buttonText="Hire Me!"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </Nav>
  );
};
