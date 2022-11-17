import styled from "@emotion/styled";
import React from "react";
import * as colors from "../styles/colors";

export default function GridSkeleton() {
  return (
    <Frame>
      <Image />
      <UserFrame>
        <Profile />
        <TextFrame>
          <Title />
          <Username />
        </TextFrame>
      </UserFrame>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UserFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const TextFrame = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Image = styled.div`
  width: 256px;
  height: 144px;
  border-radius: 4px;
  background-color: ${colors.grey100};
`;

const Username = styled.div`
  width: 64px;
  height: 14px;
  border-radius: 2px;
  background-color: ${colors.grey100};
`;

const Title = styled.div`
  height: 16px;
  width: 120px;
  border-radius: 2px;
  background-color: ${colors.grey100};
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${colors.grey100};
`;
