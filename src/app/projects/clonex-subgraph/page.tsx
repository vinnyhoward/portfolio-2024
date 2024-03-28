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
              window.open("https://clonex-explorer.vercel.app/", "_blank")
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<GithubIcon fill={primaryIconColor} />}
            buttonText="Github"
            onClick={() =>
              window.open(
                "https://github.com/vinnyhoward/clonex-explorer",
                "_blank"
              )
            }
          />
        </div>
        <div className="btn">
          <PrimaryButton
            buttonIcon={<FigmaIcon fill={primaryIconColor} />}
            buttonText="Figma"
            onClick={() =>
              window.open(
                "https://www.figma.com/file/bL1mN9OJdwcRUPCVwtXRi6/Clone-Asset-Explorer?type=design&node-id=194%3A130&mode=design&t=9yDXI8TzSoWx1nXK-1",
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
        Explore the rich universe of CloneX NFTs with an intuitive and visually
        engaging interface. CloneX Subgraph Explorer makes it easy to browse,
        search, and analyze CloneX collection NFTs in real-time. Visit the{" "}
        <a
          className="link"
          href="https://github.com/vinnyhoward/clonex-subgraph"
          target="_blank"
        >
          subgraph repository
        </a>{" "}
        to see how it happens
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
    title: "CloneX Subgraph",
    caption: renderCaption(),
    logoUrl: "/images/rtfkt_logo.jpeg",
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
              src="/images/clone_mock_shot_1.png"
              alt="CloneX Subgraph"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Purpose</h2>
            <p className="caption">
              The tech stack for the frontend of the CloneX Subgraph Explorer
              was built with Next.js, Typescript, GraphQL, Prisma and Styled
              Components. The CloneX Subgraph was built with The Graph, a
              decentralized protocol for indexing and querying data from
              blockchains.
            </p>
          </div>

          <div className="image__container">
            <Image
              className="hero__image"
              src="/images/clone_home.png"
              alt="CloneX Subgraph"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Tech Stack</h2>
            <p className="caption">
              The tech stack for the frontend of the CloneX Subgraph Explorer
              was built with{" "}
              <a
                className="link"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              ,{" "}
              <a
                className="link"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typescript
              </a>
              ,{" "}
              <a
                className="link"
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL
              </a>
              ,{" "}
              <a
                className="link"
                href="https://www.prisma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
              , and{" "}
              <a
                className="link"
                href="https://styled-components.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Styled Components
              </a>
              . The{" "}
              <a
                className="link"
                href="https://github.com/vinnyhoward/clonex-subgraph"
                target="_blank"
              >
                subgraph
              </a>{" "}
              was built with{" "}
              <a
                className="link"
                href="https://thegraph.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Graph
              </a>
              , a decentralized protocol for indexing and querying data from
              blockchains.
            </p>
          </div>

          <Showcase
            sectionHeader="Other Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS.filter(
              (project) =>
                project.title !== "CloneX Subgraph" &&
                project.title !== "CloneX Subgraph"
            )}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
