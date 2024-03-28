"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { MainBody } from "@/components/MainBody/MainBody";
import { Hero } from "@/components/Hero/Hero";
import { Showcase } from "@/components/Showcase/Showcase";
import { Layout } from "@/components/Layout/Layout";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import {
  GithubIcon,
  GooglePlayIcon,
  AppleIcon,
  WebsiteIcon,
  ArrowIcon,
} from "@/components/Icons";
import { ROUTES } from "@/constants/routes";
import { PROJECTS } from "@/constants/projects";

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 4.7rem 0.4rem;
  }

  .link {
    color: ${({ theme }) => theme.colors.color5};
    text-decoration: underline;
  }

  .hero__image {
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
    width: 100%;
    margin: 15px 0px;
  }

  .image__container {
  }

  .section-title {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.fontColor.fontColor1};
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
  }

  .caption {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.fontColor.fontColor4};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.5;
    margin: 10px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .btn {
    margin-right: 15px;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    .github {
      display: none;
    }
  }
`;

interface Props {}

const Home: React.FC<Props> = () => {
  const el = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const router = useRouter();

  const isLightTheme = theme.name === "light";
  const primaryIconColor = isLightTheme
    ? theme.fontColor.fontColor2
    : theme.fontColor.fontColor1;
  const secondaryIconColor = theme.fontColor.fontColor1;

  const renderButtons = () => {
    return (
      <ButtonContainer>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<AppleIcon fill={primaryIconColor} />}
            buttonText="App Store"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/reko-locally-produced-food/id1511967191",
                "_blank"
              )
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<GooglePlayIcon fill={primaryIconColor} />}
            buttonText="Play Store"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.rumbly&hl=en_US&gl=US",
                "_blank"
              )
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<WebsiteIcon fill={primaryIconColor} />}
            buttonText="Website"
            onClick={() => window.open("https://rekohub.com/", "_blank")}
          />
        </div>
        <div className="btn github">
          <SecondaryButton
            buttonIcon={<GithubIcon fill={secondaryIconColor} />}
            buttonText="Private"
            onClick={() => null}
          />
        </div>
      </ButtonContainer>
    );
  };

  const renderShowcaseButton = () => {
    return (
      <SecondaryButton
        reverse={"true"}
        buttonIcon={<ArrowIcon fill={secondaryIconColor} />}
        buttonText="View All"
        onClick={() => router.push(ROUTES.PROJECTS, { scroll: false })}
      />
    );
  };

  const renderCaption = (): JSX.Element => {
    return (
      <>
        Reko is an innovative platform championing the local food movement,
        designed to connect users with the best locally produced foods - from
        artisan bread and grass-fed beef to garden-fresh produce. It offers a
        seamless marketplace for consumers to discover and purchase local
        delicacies, and for producers to manage sales, inventory, and payments
        efficiently. Reko embodies the essence of local living, promoting
        healthier lifestyles, stronger economies, and environmental
        sustainability.
      </>
    );
  };

  useEffect(() => {
    if (el.current) {
      gsap.fromTo(
        el.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, delay: 0.1 }
      );
    }
  }, []);

  const heroProps = {
    title: "Reko",
    caption: renderCaption(),
    logoUrl: PROJECTS[2].projectLogo,
    imageUrl: null,
    extraNode: renderButtons(),
  };

  return (
    <Main ref={el}>
      <MainBody
        rightActionContainer={null}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <div className="image__container">
            <Image
              className="hero__image"
              src="/images/reko_mock_shot_1.png"
              alt="Reko"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Purpose</h2>
            <p className="caption">
              Joining Reko as a contributing contractor, my goal was to immerse
              myself in a project that stands at the forefront of innovation.
              Reko&apos;s commitment to localizing food production resonated
              with my desire to work on initiatives that not only embrace new
              ideas but also have a meaningful impact on health, economy, and
              environment.
            </p>
          </div>

          <div className="image__container">
            <Image
              className="hero__image"
              src="/images/reko_home.png"
              alt="Reko Home Page"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Tech Stack</h2>
            <p className="caption">
              The Reko project leverages modern development frameworks and
              services for both its seamless cross-platform functionality. The
              tech stack includes:
            </p>
            <p className="caption">
              <strong>Frontend and Cross-Platform:</strong> Engineered to
              provide a unified experience across web and mobile, the
              application is built using{" "}
              <a
                className="link"
                href="https://reactnative.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://necolas.github.io/react-native-web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native Web
              </a>
              , with{" "}
              <a
                className="link"
                href="https://expo.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo
              </a>{" "}
              for an accelerated development cycle and streamlined deployment
              process.
            </p>
          </div>

          <Showcase
            sectionHeader="Other Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS.filter(
              (project) => project.title !== "Reko" && project.title !== "Reko"
            )}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
