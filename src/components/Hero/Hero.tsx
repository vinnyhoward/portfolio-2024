import Image from "next/image";
import { HeroContainer } from "./Hero.styles";

interface HeroProps {
  title: string;
  caption: string;
  imageUrl?: string | null;
  extraNode?: React.ReactNode | null;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  caption,
  imageUrl = null,
  extraNode = null,
}) => {
  return (
    <HeroContainer>
      <div className="hero__content">
        <div className="hero__text">
          <div className="title">{title}</div>
          <p>{caption}</p>
        </div>
        {imageUrl ? (
          <div className="image__container">
            <Image
              className="hero__image"
              src={imageUrl}
              alt={title}
              width={160}
              height={160}
            />
          </div>
        ) : null}
      </div>
      {extraNode ? (
        <div className="extra-node__container">{extraNode}</div>
      ) : null}
    </HeroContainer>
  );
};
