import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  width: ${({ theme }) => theme.layout.width};
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border: 1px solid ${({ theme }) => theme.border.color1};
  position: fixed;
  top: 15px;

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
