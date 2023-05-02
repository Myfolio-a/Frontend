import React from "react";
import styled from "@emotion/styled";
import GlobalNavigation from "../components/GlobalNavigation";
import Tab from "../components/Tab";
import * as colors from "../styles/colors";

export default function Edit() {
  return (
    <MainFrame>
      <GlobalNavigation />
      <EditHomeFrame>
        <Title>Resumes & Portfolios</Title>
        <Tab />
      </EditHomeFrame>
    </MainFrame>
  );
}

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: ${colors.grey900};

  margin-top: 32px;
`;

const EditHomeFrame = styled.div`
  width: 960px;
  height: 100vh;

  padding: 32px;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 240px;
`;
