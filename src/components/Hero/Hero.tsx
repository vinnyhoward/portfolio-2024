import React from "react";
import { HeroContainer } from "./Hero.styles";

interface HeroProps {
  title: string;
  caption: string;
  imageUrl: string;
  extraNode?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  caption,
  imageUrl,
  extraNode,
}) => {
  return (
    <HeroContainer>
      <div className="hero__content">
        <h1>{title}</h1>
        <p>{caption}</p>
        {extraNode}
      </div>
    </HeroContainer>
  );
};
