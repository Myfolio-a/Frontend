import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import * as colors from "../styles/colors";
import Button from "./Button";
import { ReactComponent as Avatar } from "../Icons/Avatar.svg";
import { HiOutlineBell } from "react-icons/hi2";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(false);

  const handleDropdownButton = () => {
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    if (localStorage.getItem("login-token") === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  });

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.clear();
  };

  if (isLogged) {
    return (
      <TopbarFrame>
        <IconsFrame>
          <IconFrame>
            <HiOutlineBell
              style={{ width: "28px", height: "28px" }}
              color={colors.grey500}
            />
          </IconFrame>
          <IconFrame>
            <DropdownFrame>
              <Avatar
                width={28}
                height={28}
                fill={colors.grey500}
                onClick={handleDropdownButton}
              />
              {show ? (
                <MenuBox>
                  <Menu Text="로그아웃" onClick={handleLogout} />
                  <Menu Text="v0.1" />
                </MenuBox>
              ) : null}
            </DropdownFrame>
          </IconFrame>
        </IconsFrame>
      </TopbarFrame>
    );
  }
  return (
    <TopbarFrame>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </TopbarFrame>
  );
}

const DropdownFrame = styled.div`
  position: relative;
`;

const MenuBox = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
  width: 180px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey100};
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  padding: 8px;
  border-radius: 4px;
`;

const IconsFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-right: 16px;
`;

const IconFrame = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  border-bottom: 1px solid ${colors.grey50};
`;
