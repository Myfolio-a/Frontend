import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import React from "react";

export default function MoreSkeleton() {
  return (
    <MainFrame>
      <SubFrame>
        <TitleFrame>
          <TitleBox />
          <TitleBox style={{ width: "115px" }} />
        </TitleFrame>
        <ImageBox />
        <ContentFrame>
          <ContentBox />
          <ContentBox />
          <ContentBox />
          <ContentBox style={{ width: "364px" }} />
        </ContentFrame>
      </SubFrame>
    </MainFrame>
  );
}

const ContentBox = styled.div`
  width: 728px;
  height: 24px;
  background-color: ${colors.grey100};
  border-radius: 2px;
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-left: 32px;
  margin-top: 28px;
`;

const ImageBox = styled.div`
  width: 960px;
  height: 480px;
  border-radius: 2px;
  background-color: ${colors.grey100};

  margin-left: 32px;
  margin-right: 32px;
`;

const TitleBox = styled.div`
  width: 230px;
  height: 28px;
  background-color: ${colors.grey100};
  border-radius: 2px;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 34px;
  margin-left: 32px;
  margin-bottom: 34px;
`;

const SubFrame = styled.div`
  width: 1024px;
`;

const MainFrame = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;
