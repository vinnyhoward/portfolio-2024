"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
import { v4 as uuidv4 } from "uuid";
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
import { ImageGrid, ImageGridObj } from "@/components/ImageGrid/ImageGrid";
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
    margin: 0px 0px 15px 0px;
    object-fit: cover;
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
    margin: 20px 0;
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
    title: "Hello, its me! your friendly neighborhood developer.",
    caption:
      "My name is Vincent Howard, a seasoned full-stack developer with 5 years of experience under my belt. Passionate about crafting beautiful products and solving complex problems, I thrive on continuously learning new technologies to elevate my craft. My journey in development is driven by the desire to bring innovative solutions to life, blending creativity with technical prowess.",
    logoUrl: null,
    imageUrl: null,
    extraNode: null,
  };

  const fitnessImageGridData: ImageGridObj[] = [
    {
      id: uuidv4(),
      url: "/images/spartan1.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/spartan2.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/spartan3.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/spartan4.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/marathon_1.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/dirty_dash1.jpg",
    },
  ];

  const chesterImageGridData: ImageGridObj[] = [
    {
      id: uuidv4(),
      url: "/images/chester1.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/chester2.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/chester3.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/chester4.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/chester5.jpg",
    },
    {
      id: uuidv4(),
      url: "/images/chester6.jpg",
    },
  ];

  return (
    <Main ref={el}>
      <MainBody
        sectionHeader="About Me"
        rightActionContainer={null}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <div className="image__container">
            <NextImage
              className="hero__image"
              src="/images/about_profile.jpg"
              alt="it me"
              priority
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">What I like to do for fun</h2>
            <p className="caption">
              When I&apos;m not being a shut in and coding my life away, I enjoy
              fitness-related activities—maybe a little too much. I have a
              passion for strength training, bodybuilding, running, and
              participating in obstacle races, particularly Spartan races.
            </p>
          </div>

          <ImageGrid imageArr={fitnessImageGridData} />

          <div className="content__container">
            <h2 className="section-title">Also here is a picture of my cat</h2>
            <p className="caption">
              Just some pictures of my cat, because why not?
            </p>
          </div>

          <ImageGrid imageArr={chesterImageGridData} />

          <div className="content__container">
            <h2 className="section-title">My side projects</h2>
            <p className="caption">
              I&apos;ve worked on a few projects over the past few months. Here
              are some of my favorites.
            </p>
          </div>
          <Showcase
            sectionHeader="Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
