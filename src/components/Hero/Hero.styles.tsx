import styled from "styled-components";

export const HeroContainer = styled.div`
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 40px;
  height: min-content;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0 0 40px;
  position: relative;
  width: 100%;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.fontFamily.fontColor1};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  .hero__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }
`;
