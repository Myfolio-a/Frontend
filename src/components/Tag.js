import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import React from "react";

export default function Tag({ children }) {
  return <MainFrame>{children}</MainFrame>;
}

const MainFrame = styled.div`
  padding: 1px 6px;
  border-radius: 4px;

  background-color: ${colors.white};
  color: ${colors.grey900};

  font-size: 14px;
  font-weight: 700;

  user-select: none;
`;
