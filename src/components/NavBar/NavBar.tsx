import styled from "styled-components";
import {
  HomeIcon,
  ProfileIcon,
  ProjectsIcon,
  DarkIcon,
  LightIcon,
} from "../Icons";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.01);
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

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
    background-color: ${({ theme }) => theme.colors.white};
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
    }
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <HomeIcon />
        </li>
        <li>
          <ProfileIcon />
        </li>
        <li>
          <ProjectsIcon />
        </li>
      </ul>

      <div className="interaction-container">
        <div>
          <DarkIcon />
        </div>
        <div>Profile</div>
      </div>
    </Nav>
  );
};
