import styled from "styled-components";
import NextImage from "next/image";

export const ImageGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  .image-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export const ImageSmall = styled(NextImage)`
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  width: 75px;
  height: 75px;
  object-fit: cover;
  margin: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 50px;
    height: 50px;
    margin: 0px;
  }
`;

export const ImageLarge = styled(NextImage)`
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  width: 100%;
  height: 650px;
  object-fit: cover;
  margin: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 450px;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    height: 350px;
  }
`;
