"use client";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";
import { Layout } from "@/components/Layout/Layout";

const HireContainer = styled.div`
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

    @media ${({ theme }) => theme.mediaQueries.medium} {
      flex-direction: column;
    }
  }

  .form__textarea,
  .form__input {
    font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
    border: 1px solid ${({ theme }) => theme.border.colors.color1};
    background-color: ${({ theme }) => theme.colors.color7};
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.fontColor.fontColor1};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
    height: 50px;
    padding: 1rem;
    margin-top: 0.5rem;
    width: 100%;

    &:nth-child(1) {
      margin-right: 0.5rem;
      @media ${({ theme }) => theme.mediaQueries.medium} {
        margin-right: 0;
      }
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

  button {
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};;
  background-color: ${({ theme }) => theme.colors.color3};
  color: ${({ theme }) => theme.fontColor.fontColor2};
  height: 40px;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  border: none;
  transition: background-color 0.5s;
  margin-top: 1rem;
  height: 50px;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.robotoFlex};
  color: ${({ theme }) =>
    theme.name === "light"
      ? theme.fontColor.fontColor2
      : theme.fontColor.fontColor1};

  &:hover  {
    border 1px solid ${({ theme }) => theme.colors.color3};
    }
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
  const [isSubmitted, setSubmitted] = useState(false);
  const el = useRef<HTMLDivElement>(null);

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        console.log("Email sent successfully", result);
      } else {
        console.error("Failed to send email", result);
      }
    } catch (error) {
      setSubmitted(false);
      console.error("Network error:", error);
    }
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

  return (
    <HireContainer ref={el}>
      <MainBody
        sectionHeader="Hire Me"
        rightActionContainer={<Notification message="Available for work" />}
        heroContainer={<Hero {...heroProps} />}
      >
        <Layout hideContactBanner>
          <div className="form__container">
            <form onSubmit={onSubmit} className="form">
              <div className="flex-row">
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  disabled={isSubmitted}
                />

                <input
                  className="form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  disabled={isSubmitted}
                />
              </div>
              <div>
                <textarea
                  className="form__textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={10}
                  disabled={isSubmitted}
                />
              </div>
              <button disabled={isSubmitted} type="submit">
                {isSubmitted ? "Inquiry Submitted!" : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </Layout>
      </MainBody>
    </HireContainer>
  );
};

export default Home;
