import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import Menu from "./Menu";
import {
  HiOutlinePencil,
  HiOutlineShare,
  HiArrowDownTray,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

export default function ResumeGridItem() {
  return (
    <MainFrame>
      <Preview></Preview>
      <ControlFrame>
        <TitleFrame>
          <Title>Untitled</Title>
          <SubTitle>Updated last week</SubTitle>
        </TitleFrame>
        <MenuFrame>
          <Menu
            Text="Edit"
            Icon={<HiOutlinePencil style={{ color: `${colors.primary500}` }} />}
          />
          <Menu
            Text="Share"
            Icon={<HiOutlineShare style={{ color: `${colors.primary500}` }} />}
          />
          <Menu
            Text="Download to PDF"
            Icon={<HiArrowDownTray style={{ color: `${colors.primary500}` }} />}
          />
          <Menu
            Text="More"
            Icon={
              <HiEllipsisHorizontal style={{ color: `${colors.primary500}` }} />
            }
          />
        </MenuFrame>
      </ControlFrame>
    </MainFrame>
  );
}

const MenuFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const SubTitle = styled.div`
  color: ${colors.grey400};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;

const Title = styled.div`
  color: ${colors.grey900};
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
`;

const TitleFrame = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

const ControlFrame = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Preview = styled.div`
  width: 190px;
  height: 270px;
  box-shadow: inset 0px 0px 0px 1px ${colors.grey50};
  border-radius: 4px;
`;

const MainFrame = styled.div`
  height: 270px;
  display: flex;
  gap: 32px;
`;
