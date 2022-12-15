import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import Menu from "./Menu";
import {
  HiOutlinePencil,
  HiOutlineShare,
  HiArrowDownTray,
  HiEllipsisHorizontal,
  HiOutlineDocumentDuplicate,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

export default function PortfolioGridItem({ Title, LastEdit }) {
  const [show, setShow] = useState(false);
  const outsideRef = useRef(null);

  const handleDropdownButton = () => {
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        outsideRef.current !== null &&
        !outsideRef.current.contains(e.target)
      ) {
        setShow(!show);
      }
    };
    if (show) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);
  return (
    <MainFrame>
      <div>
        <TitleFrame>
          <TitleText>{Title}</TitleText>
          <SubTitle>{LastEdit}</SubTitle>
        </TitleFrame>
        <PreviewFrame>
          <Preview />
          <MenuFrame>
            <Menu
              Text="Edit"
              Icon={
                <HiOutlinePencil style={{ color: `${colors.primary500}` }} />
              }
            />
            <Menu
              Text="Share"
              Icon={
                <HiOutlineShare style={{ color: `${colors.primary500}` }} />
              }
            />
            <Menu
              Text="Download to PDF"
              Icon={
                <HiArrowDownTray style={{ color: `${colors.primary500}` }} />
              }
            />
            <Menu
              Ref={outsideRef}
              Text="More"
              Icon={
                <HiEllipsisHorizontal
                  style={{ color: `${colors.primary500}` }}
                />
              }
              onClick={handleDropdownButton}
            />
            <Frame1>
              {show ? (
                <MenuBox>
                  <MenuBoxFrame>
                    <Menu
                      Text="Make a copy"
                      Icon={
                        <HiOutlineDocumentDuplicate
                          style={{ color: `${colors.primary500}` }}
                        />
                      }
                    />
                    <Menu
                      Text="Delete"
                      Icon={
                        <HiOutlineTrash
                          style={{ color: `${colors.primary500}` }}
                        />
                      }
                    />
                  </MenuBoxFrame>
                </MenuBox>
              ) : null}
            </Frame1>
          </MenuFrame>
        </PreviewFrame>
      </div>
    </MainFrame>
  );
}

const MenuBox = styled.div`
  position: absolute;
  top: 4px;

  width: 200px;

  padding: 8px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey50};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const MenuBoxFrame = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Frame1 = styled.div`
  position: relative;
`;

const SubTitle = styled.div`
  color: ${colors.grey400};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;

const TitleText = styled.div`
  color: ${colors.grey900};
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;

  margin-bottom: 16px;
`;

const PreviewFrame = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
`;

const MenuFrame = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Preview = styled.div`
  width: 226px;
  height: 160px;
  box-shadow: inset 0px 0px 0px 1px ${colors.grey50};
  border-radius: 4px;
`;

const MainFrame = styled.div`
  height: 270px;
`;
