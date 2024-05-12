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

  .title {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    color: ${({ theme }) => theme.fontColor.fontColor1};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
    margin: 0;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      margin-top: 20px;
      text-align: center;
    }
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.fontColor.fontColor4};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.5;
    margin: 20px 0;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      text-align: center;
    }
  }

  .hero__content {
    display: flex;
    flex-direction: row;
    padding: 0 25px;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      padding: 0 10px;
      flex-direction: column-reverse;
    }
  }

  .hero__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      align-items: center;
    }
  }

  .image__container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .hero__image {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.color7};
    margin-left: 15px;
  }

  .extra-node__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 25px;
    color: black;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      padding: 0 10px;
      justify-content: center;
    }

    @media ${({ theme }) => theme.mediaQueries.small} {
      width: 80%;
      display: block;
    }
  }

  .hero__logo {
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.color7};
    margin-bottom: 15px;
  }
`;
