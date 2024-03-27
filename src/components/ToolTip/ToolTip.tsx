import React from "react";
import styled from "styled-components";

const ToolTipContainer = styled.div``;

interface ToolTipProps {
  text: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ text }) => {
  return <ToolTipContainer>{text}</ToolTipContainer>;
};

export default ToolTip;
