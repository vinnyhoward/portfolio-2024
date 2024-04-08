"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
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
  FigmaIcon,
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
            buttonIcon={<WebsiteIcon fill={primaryIconColor} />}
            buttonText="Website"
            onClick={() =>
              window.open("https://main--lootchest.netlify.app/", "_blank")
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<GithubIcon fill={primaryIconColor} />}
            buttonText="Github"
            onClick={() =>
              window.open("https://github.com/vinnyhoward/loot-chest", "_blank")
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<FigmaIcon fill={primaryIconColor} />}
            buttonText="Figma"
            onClick={() =>
              window.open(
                "https://www.figma.com/file/yo4yZHmceBc5z21Vr7i3L2/Loot-Chest?type=design&node-id=182%3A358&mode=design&t=VDEqD5bceh6140FQ-1",
                "_blank"
              )
            }
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
        This project delivers a web-based 3D chest-opening experience,
        captivating users by allowing them to uncover virtual treasures.
        It&apos;s designed to engage users through a seamless exploration of
        interactive visualizations, where they can win prizes based on the
        rarity of the items found, ensuring a continuously fresh and immersive
        experience.
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
    title: "Loot Chest",
    caption: renderCaption(),
    logoUrl: PROJECTS[1].projectLogo,
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
            <NextImage
              className="hero__image"
              src="/images/loot_chest_mock_shot_1.png"
              alt="Loot Chest"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Purpose</h2>
            <p className="caption">
              The primary purpose behind creating this project was to challenge
              myself with the development of a 3D web-based application without
              relying on popular libraries or frameworks such as React or Vue.
              Driven by a desire to deepen my understanding and practical skills
              in using web components and browser APIs directly, I aimed to
              craft a fun and addictive user experience. This project represents
              not just a technical journey but also my commitment to pushing the
              boundaries of web development to create engaging and interactive
              visualizations.
            </p>
          </div>

          <div className="image__container">
            <NextImage
              className="hero__image"
              src="/images/loot_home.png"
              alt="Loot Chest Home Page"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Tech Stack</h2>
            <p className="caption">
              <a
                className="link"
                href="https://github.com/vinnyhoward/loot-chest"
                target="_blank"
              >
                Frontend:
              </a>{" "}
              The frontend is built with a focus on cutting-edge technologies
              and performance optimization, utilizing{" "}
              <a
                className="link"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
              ,{" "}
              <a
                className="link"
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite
              </a>
              ,{" "}
              <a
                className="link"
                href="https://threejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Three.js
              </a>
              ,{" "}
              <a
                className="link"
                href="https://bun.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bun.js
              </a>
              , and{" "}
              <a
                className="link"
                href="https://www.sanity.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sanity
              </a>{" "}
              for dynamic content management.
            </p>
            <p className="caption">
              <a
                className="link"
                href="https://github.com/vinnyhoward/loot-chest-backend"
                target="_blank"
              >
                Backend:
              </a>{" "}
              The backend infrastructure, designed for robustness, leverages{" "}
              <a
                className="link"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
              ,{" "}
              <a
                className="link"
                href="https://elysiajs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elysia.js
              </a>{" "}
              <a
                className="link"
                href="https://www.prisma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
              ,{" "}
              <a
                className="link"
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL
              </a>
              ,{" "}
              <a
                className="link"
                href="https://www.docker.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docker
              </a>
              , and{" "}
              <a
                className="link"
                href="https://bun.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BunJS
              </a>{" "}
              for modern and efficient web development practices.
            </p>
          </div>

          <Showcase
            sectionHeader="Other Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS.filter(
              (project) =>
                project.title !== "Loot Chest" && project.title !== "Loot Chest"
            )}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
