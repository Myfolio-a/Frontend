import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import Menu from "../components/Menu";
import { useMatch } from "react-router-dom";
import {
  HiHome,
  HiOutlineHome,
  HiOutlineHeart,
  HiOutlinePencil,
  HiOutlineFlag,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../api/AuthContextProvider";
import axios from "../api/axios";

export default function GlobalNavigation() {
  const USERINFO_URL =
    "https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/auth/user-retriever";

  const navigate = useNavigate();

  const { setLoggedUser, loggedUser } = useContext(AuthContext);

  const matchHomeMenu = useMatch("/");
  const matchFavoriteMenu = useMatch("/favorite");
  const matchEditMenu = useMatch("/edit");

  const handleProfileClick = () => {
    if (loggedUser === null) {
      navigate("/login");
      return;
    }
    setLoggedUser(null);
    localStorage.removeItem("login-token");
    alert("로그아웃 되었습니다.");
  };

  const accessToken = localStorage.getItem("access-token");
  const fetchItems = async () => {
    try {
      const response = await axios.get(USERINFO_URL, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setLoggedUser(response.data);
    } catch (e) {
      console.log(e);
      if (!e?.response) {
        console.log("No server response");
      } else if (e.response.status === 400) {
        console.log("Bad request");
      } else if (e.response.status === 404) {
        console.log("Not found");
      }
    }
  };

  useEffect(() => {
    if (loggedUser === null && accessToken !== null) {
      fetchItems();
    }
  }, []);

  return (
    <Background>
      <LogoFrame>Logo Here</LogoFrame>
      <MenuFrame>
        <Menu
          Text="Home"
          Icon={<HiOutlineHome />}
          onClick={() => navigate("/")}
          variant={matchHomeMenu ? "selected" : ""}
        />
        <Menu
          Text="Favorite"
          Icon={<HiOutlineHeart />}
          onClick={() => navigate("/favorite")}
          variant={matchFavoriteMenu ? "selected" : ""}
        />
        <Menu
          Text="Edit Place"
          Icon={<HiOutlinePencil />}
          onClick={() => navigate("/edit")}
          variant={matchEditMenu ? "selected" : ""}
        />
      </MenuFrame>
      <MenuFrame>
        <Menu
          Text="Login"
          Icon={<HiOutlineFlag />}
          onClick={() => navigate("/login")}
        />
        <Menu
          Text="Sign Up"
          Icon={<HiOutlineFlag />}
          onClick={() => navigate("/signup")}
        />
      </MenuFrame>
      <MenuBottom>
        <Menu
          Text={loggedUser === null ? "Login" : loggedUser?.username}
          Icon={<HiOutlineUserCircle />}
          onClick={handleProfileClick}
        />
      </MenuBottom>
    </Background>
  );
}

const MenuBottom = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;

  position: absolute;
  width: 208px;
`;

const MenuFrame = styled.div`
  padding: 16px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-bottom: 1px solid ${colors.grey50};
`;

const LogoFrame = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey50};
`;

const Background = styled.div`
  height: 100vh;
  width: 240px;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.grey50};
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: fixed;
  left: 0;
  top: 0;
`;
