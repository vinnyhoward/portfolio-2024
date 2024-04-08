"use client";

import styled from "styled-components";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DragAndDropContext } from "@/contexts/DragAndDropContext";
import StyledComponentsRegistry from "./registry";
import { GlobalStyles } from "@/styles/globalStyles";
import { useDroppable } from "@dnd-kit/core";
// import { ChatBotIcon } from "@/components/ChatBot/ChatBotIcon";

const ParentLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Providers = (props: React.PropsWithChildren) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  console.log("is over:", isOver);
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider>
        <DragAndDropContext>
          {/* <ChatBotIcon /> */}
          <ParentLayout style={style} ref={setNodeRef}>
            {props.children}
          </ParentLayout>
        </DragAndDropContext>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
