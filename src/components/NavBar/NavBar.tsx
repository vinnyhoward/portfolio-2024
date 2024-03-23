import styled from "styled-components";
import {
  HomeIcon,
  ProfileIcon,
  ProjectsIcon,
  DarkIcon,
  LightIcon,
} from "../Icons";
import { useTheme } from "../../contexts/ThemeContext";

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
`;

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme.name === "light";
  return (
    <Nav>
      <ul>
        <li>
          <HomeIcon fill={theme.fontFamily.fontColor1} />
        </li>
        <li>
          <ProfileIcon fill={theme.fontFamily.fontColor1} />
        </li>
        <li>
          <ProjectsIcon fill={theme.fontFamily.fontColor1} />
        </li>
      </ul>

      <div className="interaction-container">
        <li onClick={() => toggleTheme()}>
          {isLightTheme ? (
            <DarkIcon fill={theme.fontFamily.fontColor1} />
          ) : (
            <LightIcon fill={theme.fontFamily.fontColor1} />
          )}
        </li>
        <div>Profile</div>
      </div>
    </Nav>
  );
};
