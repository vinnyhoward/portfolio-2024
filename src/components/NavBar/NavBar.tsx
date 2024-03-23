import styled from "styled-components";
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

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.01);
  width: 560px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border: 1px solid ${({ theme }) => theme.border.color1};

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    margin: 0 5px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.color2};
    transition: background-color 0.5s;
  }

  .interaction-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;

    div {
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div:hover {
      background-color: ${({ theme }) => theme.color2};
      transition: background-color 0.5s;
      border-radius: 50%;
    }
  }

  .btn__container {
    width: 120px;
    height: 40px;
  }

  .icon__container {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__text {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    color: ${({ theme }) =>
      theme.name === "light"
        ? theme.fontFamily.fontColor2
        : theme.fontFamily.fontColor1};
  }
`;

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
          <HomeIcon fill={iconColor} />
        </li>
        <li>
          <ProfileIcon fill={iconColor} />
        </li>
        <li>
          <ProjectsIcon fill={iconColor} />
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
