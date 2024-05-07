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
import { GithubIcon, ArrowIcon } from "@/components/Icons";
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
            buttonIcon={<GithubIcon fill={primaryIconColor} />}
            buttonText="Github"
            onClick={() =>
              window.open(
                "https://github.com/vinnyhoward/rn-crypto-wallet",
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
        A multi-chain cryptocurrency wallet application using React Native,
        designed to support both Ethereum and Solana blockchains. The wallet
        enables users to securely create new wallets and restore existing ones
        using mnemonic phrases. It features a user-friendly interface for
        managing cryptocurrency balances, executing transactions, and viewing
        transaction histories.
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
    title: "BMO Wallet",
    caption: renderCaption(),
    logoUrl: PROJECTS[0].projectLogo,
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
              src="/images/bmo_banner.png"
              alt="CloneX Subgraph"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">
              Key Features and Technical Highlights
            </h2>
            <p className="caption">
              The wallet supports multiple blockchain networks, enabling users
              to handle assets across Ethereum and Solana with ease. One of its
              standout features is the ability to provide real-time updates on
              transaction costs, which helps users optimize transaction timing
              and expenses effectively. The application leverages Redux Toolkit
              for state management, ensuring a robust and scalable architecture,
              while blockchain interactions are handled through the{" "}
              <a
                className="link"
                href="https://www.npmjs.com/package/@solana/web3.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                @solana/web3.js
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://docs.ethers.org/v6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ether.js
              </a>{" "}
              and libraries, ensuring secure and reliable transactions.
              <br />
              <br />
              Additionally, the app incorporates efficient data management
              strategies such as periodic data fetching and local caching. This
              approach minimizes network requests and helps avoid rate limits,
              thereby enhancing the overall efficiency and performance of the
              application. Built with a focus on user-centric design and
              technical precision, the project not only highlights my skills in
              React Native and JavaScript but also demonstrates a deep
              understanding of blockchain technology fundamentals.
            </p>
          </div>

          {/* <div className="image__container">
            <NextImage
              className="hero__image"
              src="/images/clone_home.png"
              alt="CloneX Subgraph"
              layout="responsive"
              width={650}
              height={650}
            />
          </div> */}
          <br />
          <div className="content__container">
            <h2 className="section-title">Development Tools</h2>
            <p className="caption">
              The project utilizes React Native for cross-platform mobile app
              development, allowing for a unified user experience across
              different devices. Redux Toolkit is employed for managing
              application state, and Metro Bundler is used for effective
              packaging and deployment. The use of{" "}
              <a
                className="link"
                href="https://docs.ethers.org/v6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ether.js
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://www.npmjs.com/package/@solana/web3.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                @solana/web3.js
              </a>{" "}
              ensures that all blockchain operations are executed flawlessly,
              making the wallet both functional and secure.
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
