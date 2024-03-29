"use client";

import NextImage from "next/image";
import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";

const ChatBotIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.color1};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 80px;
    height: 80px;
    bottom: 25px;
    right: 25px;
    box-shadow: 0 2.5px 10px rgba(0, 0, 0, 0.15);
  }

  .chatbot__icon {
    border-radius: 50%;
    height: 125px;
    width: 125px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${({ theme }) => theme.mediaQueries.medium} {
      height: 100px;
      width: 100px;
    }
  }
`;

export const ChatBotIcon: React.FC = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <ChatBotIconWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <NextImage
        src="/images/memoji.png"
        alt="chatbot icon"
        width={250}
        height={250}
        className="chatbot__icon"
      />
    </ChatBotIconWrapper>
  );
};
