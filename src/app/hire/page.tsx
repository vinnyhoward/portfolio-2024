"use client";

import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";
import { Showcase } from "@/components/Showcase/Showcase";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { Layout } from "@/components/Layout/Layout";

const HireContainer = styled.div`
  padding: 6rem;

  .form__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .form__textarea,
  .form__input {
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    border: 1px solid ${({ theme }) => theme.border.colors.color1};
    background-color: ${({ theme }) => theme.colors.color7};
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: 5px;
    height: 50px;
    padding: 1rem;
    margin-top: 0.5rem;
    width: 100%;

    &:nth-child(1) {
      margin-right: 0.5rem;
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.color3};
    }

    &::placeholder {
      color: ${({ theme }) => theme.fontColor.fontColor3};
      padding-right: 1rem;
    }
  }

  .form__textarea {
    height: 200px;
    margin-top: 1rem;
  }
`;

interface Props {}

const heroProps = {
  title: "Development Inquiries",
  caption:
    "Got an idea or a project you'd like to discuss? I'm all ears! Let's talk about how we can work together to bring your vision to life.",
  imageUrl: null,
  extraNode: null,
};

const Home: React.FC<Props> = () => {
  return (
    <HireContainer>
      <MainBody
        sectionHeader="Hire Me"
        rightActionContainer={<Notification message="Available for work" />}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout hideContactBanner>
          <div className="form__container">
            <form className="form">
              <div className="flex-row">
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />

                <input
                  className="form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  className="form__textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={10}
                />
              </div>
            </form>
          </div>
        </Layout>
      </MainBody>
    </HireContainer>
  );
};

export default Home;
