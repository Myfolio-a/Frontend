import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";

export default function Topbar() {
  return <TopbarFrame></TopbarFrame>;
}

const TopbarFrame = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${colors.grey50};
`;
