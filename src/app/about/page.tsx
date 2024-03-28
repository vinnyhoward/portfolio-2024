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
    margin: 0px 0px 15px 0px;
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

  // About Me
  // Work experience
  // Education and past work experience
  // Hobbies
  // Pets
  // Check out my past side projects

  return (
    <Main ref={el}>
      <MainBody
        sectionHeader="About Me"
        rightActionContainer={null}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout>
          <div className="image__container">
            <Image
              className="hero__image"
              src="/images/about_profile.jpg"
              alt="it me"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">More about me</h2>
            <p className="caption">
              When I&apos;m not being a shut in and coding my life away, I enjoy
              fitness related things. Maybe a little too much. I love to
              strength train, body build, run and attend obstacle races. More
              specifically the Spartan Races
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
