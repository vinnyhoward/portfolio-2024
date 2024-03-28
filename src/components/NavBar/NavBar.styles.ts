import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  width: ${({ theme }) => theme.layout.width};
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0 15px;
  }
  border: 1px solid ${({ theme }) => theme.border.colors.color1};
  position: fixed;
  top: 15px;
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    top: 7.5px;
    width: 97%;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  li:hover {
    /* background-color: ${({ theme }) => theme.colors.color2};
    transition: background-color 0.5s; */
  }

  .interaction-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;

    div:hover {
      /* background-color: ${({ theme }) => theme.colors.color2};
      transition: background-color 0.5s;
      border-radius: 50%; */
    }

    .btn__container {
      margin-left: 10px;
    }
  }
`;
