"use client";

import styled from "styled-components";
import { NavBar } from "@/components/NavBar/NavBar";
import { MainBody } from "@/components/MainBody/MainBody";
import { Notification } from "@/components/Notification/Notification";
import { Hero } from "@/components/Hero/Hero";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const heroProps = {
  title: "HI! I'm Vince Howard👋",
  caption:
    "I am a software engineer with a passion for building products that make a difference. I am a full-stack developer with experience in building web applications using React, Node.js, and MongoDB. I am also experienced in building mobile applications using React Native. I am currently looking for new opportunities to work on exciting projects.",
  imageUrl:
    "https://framerusercontent.com/images/dDnqkzQfB3pmvEdrFSxAJSkAyyk.png",
};
export default function Home() {
  return (
    <Main>
      <MainBody
        sectionHeader="Software Engineer"
        rightActionContainer={<Notification message="Available for work" />}
        heroContainer={<Hero {...heroProps} />}
      />
    </Main>
  );
}
