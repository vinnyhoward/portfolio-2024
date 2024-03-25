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
import { BrandButton } from "../BrandButton/BrandButton";
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
          <BrandButton onClick={() => console.log("clicked")}>
            <div className="icon__container">
              <StarIcon fill={buttonIconColor} />
            </div>
            <div className="btn__text">Hire me</div>
          </BrandButton>
        </div>
      </div>
    </Nav>
  );
};
