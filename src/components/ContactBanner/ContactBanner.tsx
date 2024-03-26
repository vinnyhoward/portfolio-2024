import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { StarIcon, CopyIcon } from "@/components/Icons";

const ContactBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 8px;
  margin: 24px 0px;

  .contact__title {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.fontColor.fontColor1};
    margin: 0;
  }

  .contact__caption {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor.fontColor3};
    margin: 10px 0;
    width: 80%;
    text-align: center;
  }

  .btn__container {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .btn {
      margin-right: 15px;
    }
  }
`;

interface ContactBannerProps {}

export const ContactBanner: React.FC<ContactBannerProps> = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();

  const isLightTheme = theme.name === "light";
  const primaryIconColor = isLightTheme
    ? theme.fontColor.fontColor2
    : theme.fontColor.fontColor1;
  const secondaryIconColor = theme.fontColor.fontColor1;

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard
      .writeText(process.env.NEXT_PUBLIC_EMAIL || "missing email :(")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <ContactBannerContainer>
      <div className="contact__title">Let&apos;s work together</div>
      <div className="contact__caption">
        Creating a website is a journey, and I&apos;m here to help you every
        step of the way.
      </div>
      <div className="btn__container">
        <div className="btn">
          <PrimaryButton
            buttonIcon={<StarIcon fill={primaryIconColor} />}
            buttonText="Hire Me!"
            onClick={() => console.log("clicked")}
          />
        </div>
        <div className="btn">
          <SecondaryButton
            buttonIcon={<CopyIcon fill={secondaryIconColor} />}
            buttonText={isCopied ? "Copied!" : "Copy Email"}
            onClick={() => handleCopy()}
          />
        </div>
      </div>
    </ContactBannerContainer>
  );
};
