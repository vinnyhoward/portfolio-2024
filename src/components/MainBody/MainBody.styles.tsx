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

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 500px;
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

  .section__container {
    padding: 0px 25px;
    width: 100%;
  }
`;
