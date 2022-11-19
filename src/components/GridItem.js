import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import { HiOutlineHeart } from "react-icons/hi2";

export default function GridItem({
  id,
  title,
  username,
  favorite,
  handleItemClick,
  handleUserClick,
}) {
  return (
    <MainFrame>
      <ImageFrame onClick={() => handleItemClick(id)}></ImageFrame>
      <FrameGroup>
        <UserFrame>
          <ProfileFrame></ProfileFrame>
          <div>
            <Footnote onClick={() => handleItemClick(id)}>{title}</Footnote>
            <Caption2 onClick={() => handleUserClick(id)}>{username}</Caption2>
          </div>
        </UserFrame>
        <FavoriteFrame>
          <HiOutlineHeart style={{ width: "12px", height: "12px" }} />
          {favorite}
        </FavoriteFrame>
      </FrameGroup>
    </MainFrame>
  );
}

const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 256px;
`;

const FavoriteFrame = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  color: ${colors.grey400};
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UserFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Caption2 = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: ${colors.grey500};
`;

const Footnote = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.grey900};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ProfileFrame = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 999999px;
  background-color: ${colors.grey300};
`;

const ImageFrame = styled.div`
  width: 256px;
  height: 144px;
  background-color: ${colors.grey300};
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
  }
`;
