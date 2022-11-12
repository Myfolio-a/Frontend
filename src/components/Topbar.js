import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import Button from "./Button";

export default function Topbar() {
  return (
    <TopbarFrame>
      <Button>Login</Button>
    </TopbarFrame>
  );
}

const TopbarFrame = styled.div`
  width: calc(100% - 240px);
  height: 64px;
  background-color: ${colors.white};

  position: fixed;
  left: 0;
  top: 0;
  margin-left: 240px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 64px;
`;
