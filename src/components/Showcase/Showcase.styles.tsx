import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  padding: 24px;
  width: 100%;
  margin-top: 24px;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 24px 12px;
  }

  .showcase__list {
    width: 100%;
    margin-top: 24px;
  }

  .showcase__item {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.color1};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
    box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
    border: 1px solid ${({ theme }) => theme.border.colors.color1};
    margin-bottom: 12px;
  }

  .showcase__title {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor.fontColor1};
    margin: 0;
  }

  .showcase__tech-stack {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor.fontColor1};
    margin: 0;
    margin-top: 8px;
  }

  .showcase-image__container {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      margin-right: 10px;
    }
  }

  .showcase__image {
    border: 5px solid ${({ theme }) => theme.border.colors.color1};
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .showcase__text {
    display: flex;
    flex-direction: column;
  }

  .showcase__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;
