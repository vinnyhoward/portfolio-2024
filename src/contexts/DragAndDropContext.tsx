import React from "react";
import { DndContext } from "@dnd-kit/core";

interface DragAndDropContextProps {
  children: React.ReactNode;
}

export const DragAndDropContext: React.FC<DragAndDropContextProps> = ({
  children,
}) => {
  return <DndContext>{children}</DndContext>;
};
