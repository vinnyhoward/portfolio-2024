import Image from "next/image";
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
        <div className="hero__text">
          <div className="title">{title}</div>
          <p>{caption}</p>
        </div>
        <div className="image__container">
          <Image
            className="hero__image"
            src={imageUrl}
            alt={title}
            width={160}
            height={160}
          />
        </div>
      </div>
      <div className="extra-node__container">{extraNode}</div>
    </HeroContainer>
  );
};
