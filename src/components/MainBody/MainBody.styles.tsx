import styled from "styled-components";

export const MainBodyContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  width: ${({ theme }) => theme.layout.width};
  border: 1px solid ${({ theme }) => theme.border.colors.color1};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 8px 8px;
  min-height: 100vh;

  .title__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    width: 100%;

    h1 {
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.fontColor.fontColor3};
    }
  }

  .right-action__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .children__container {
    width: 100%;
    padding: 0px 25px;
  }

  .hero {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
