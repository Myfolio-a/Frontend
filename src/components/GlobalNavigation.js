import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import Menu from "../components/Menu";
import {
  HiHome,
  HiOutlineHome,
  HiOutlineHeart,
  HiOutlinePencil,
  HiOutlineFlag,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function GlobalNavigation() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    return navigate("/login");
  };

  const onClickSignUp = () => {
    return navigate("/signup");
  };

  const onClickHome = () => {
    return navigate("/");
  };

  const onClickFavorite = () => {
    return navigate("/favorite");
  };

  const onClickEdit = () => {
    return navigate("/edit");
  };

  return (
    <Background>
      <LogoFrame>Logo Here</LogoFrame>
      <MenuFrame>
        <Menu Text="Home" Icon={<HiOutlineHome />} onClick={onClickHome} />
        <Menu
          Text="Favorite"
          Icon={<HiOutlineHeart />}
          onClick={onClickFavorite}
        />
        <Menu
          Text="Edit Place"
          Icon={<HiOutlinePencil />}
          onClick={onClickEdit}
        />
      </MenuFrame>
      <MenuFrame>
        <Menu Text="Login" Icon={<HiOutlineFlag />} onClick={onClickLogin} />
        <Menu Text="Sign Up" Icon={<HiOutlineFlag />} onClick={onClickSignUp} />
      </MenuFrame>
    </Background>
  );
}

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
`;
