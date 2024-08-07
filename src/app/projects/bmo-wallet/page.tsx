"use client";

import { useLayoutEffect, useRef } from "react";
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

  ul {
    margin-top: 10px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
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
        BMO Wallet is a multi-chain cryptocurrency wallet application built with{" "}
        <a
          className="link"
          href="https://reactnative.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Native
        </a>
        , designed to support both{" "}
        <a
          className="link"
          href="https://ethereum.org/en/assets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ethereum
        </a>{" "}
        and{" "}
        <a
          className="link"
          href="https://solana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solana
        </a>{" "}
        blockchains. This robust mobile application offers a comprehensive suite
        of features for managing digital assets across multiple blockchains,
        with a focus on user experience and security.
      </>
    );
  };

  useLayoutEffect(() => {
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
              src="/images/readme_banner.png"
              alt="BMO Wallet"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Key Features and Functionality</h2>
            <p className="caption">
              BMO Wallet offers a unique blend of features designed for both
              novice and experienced cryptocurrency users:
              <div className="caption">
                <div>
                  <strong>Multi-Chain Support:</strong> Seamlessly manage
                  Ethereum and Solana assets within a single interface.
                </div>
                <div>
                  <strong>Comprehensive Wallet Management:</strong> Create new
                  wallets, import existing ones, and manage multiple accounts
                  with ease.
                </div>
                <div>
                  <strong>Transaction Handling:</strong> Send, receive, and
                  track transactions across supported blockchains.
                </div>
                <div>
                  <strong>Real-time Balance and Portfolio Tracking:</strong>{" "}
                  Monitor your crypto holdings with up-to-the-minute updates.
                </div>
                <div>
                  <strong>QR Code Integration:</strong> Simplify address sharing
                  and transaction processes.
                </div>
              </div>
              These features come together to create a powerful tool that
              simplifies the often complex world of cryptocurrency management,
              providing users with a clear, comprehensive view of their digital
              assets.
            </p>
          </div>

          <div className="image__container">
            <NextImage
              className="hero__image"
              src="/images/bmo_device_mock.png"
              alt="Crypto Wallet"
              layout="responsive"
              width={650}
              height={650}
            />
          </div>

          <div className="content__container">
            <h2 className="section-title">Technical Innovation and Security</h2>
            <div className="caption">
              BMO Wallet is built on a foundation of cutting-edge technologies,
              ensuring performance, security, and scalability:
              <div className="caption">
                <div>
                  <strong>React Native & Expo:</strong> For cross-platform
                  mobile app development.
                </div>
                <div>
                  <strong>TypeScript:</strong> Enhances code reliability and
                  reduces runtime errors.
                </div>
                <div>
                  <strong>Redux Toolkit:</strong> Ensures efficient state
                  management across the application.
                </div>
                <div>
                  <strong>Ethers.js & @solana/web3.js:</strong> Facilitate
                  secure blockchain interactions.
                </div>
                <div>
                  <strong>Alchemy SDK:</strong> Simplifies blockchain requests
                  and improves network interaction reliability.
                </div>
              </div>
              Security is paramount in BMO Wallet&apos;s design. The application
              implements advanced encryption techniques, including AES
              encryption for sensitive data and PBKDF2 for secure key
              derivation. The wallet&apos;s non-custodial design ensures users
              maintain full control of their private keys, while encrypted
              storage of recovery phrases provides protection against
              unauthorized access.
            </div>
          </div>

          <div className="content__container">
            <h2 className="section-title">Future Vision and Development</h2>
            <div className="caption">
              BMO Wallet is an evolving platform with a clear roadmap for future
              enhancements:
              <div className="caption">
                <div>
                  - Integration of biometric authentication for enhanced
                  security.
                </div>
                <div>
                  - Expansion to support additional blockchains, including
                  Polygon and Bitcoin.
                </div>
                <div>
                  - Implementation of NFT support for viewing and managing
                  non-fungible tokens.
                </div>
                <div>
                  - Development of real-time price alerts and customizable
                  notifications.
                </div>
              </div>
              <div className="caption">
                These planned features reflect our commitment to creating a
                comprehensive, user-friendly platform that adapts to the dynamic
                landscape of blockchain technology. Through ongoing development
                and community feedback, BMO Wallet aims to remain at the
                forefront of mobile cryptocurrency management solutions.
              </div>
            </div>
          </div>

          <Showcase
            sectionHeader="Other Projects"
            rightActionContainer={renderShowcaseButton()}
            dataList={PROJECTS.filter(
              (project) =>
                project.title !== "BMO Wallet" && project.title !== "BMO Wallet"
            )}
          />
        </Layout>
      </MainBody>
    </Main>
  );
};

export default Home;
