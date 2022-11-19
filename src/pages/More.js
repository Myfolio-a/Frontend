import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import * as colors from "../styles/colors";
import { HiOutlineHeart } from "react-icons/hi2";
import { useEffect, useReducer } from "react";
import axios from "../api/axios";
import { response } from "msw";
import MoreSkeleton from "./More.skeleton";

export default function More() {
  const { itemId } = useParams();
  const TEMPLATE_INFO_URL = `https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/templates/${itemId}`;

  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return {
          loading: true,
          data: null,
          error: null,
        };
      case "SUCCESS":
        return {
          loading: false,
          data: action.data,
          error: null,
        };
      case "ERROR":
        return {
          loading: false,
          data: null,
          error: action.error,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchTemplate = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(TEMPLATE_INFO_URL);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };
  // if api works disable comment.
  useEffect(() => {
    fetchTemplate();
  }, []);

  const { loading, data: info, error } = state;

  if (loading || !info) return <MoreSkeleton />;

  return (
    <MainFrame>
      <SubFrame>
        <Header>
          <HeaderFrame>
            <TitleFrame>
              <Title>{info.title}</Title>
              <ProfileFrame>
                <Profile />
                <Username>{info.user.username}</Username>
              </ProfileFrame>
            </TitleFrame>
            <ButtonFrame>
              <Button variant="secondary" style={{ padding: "8px 10px" }}>
                <HiOutlineHeart style={{ width: "20px", height: "20px" }} />
              </Button>
              <Button>Make Folio</Button>
            </ButtonFrame>
          </HeaderFrame>
        </Header>
        <ContentFrame>
          <ImageFrame />
          <BodyFrame>
            <ContentArea>{info.content}</ContentArea>
            <TagFrame>
              <TagTitle>태그</TagTitle>
              <TagDescription>태그가 없습니다.</TagDescription>
            </TagFrame>
          </BodyFrame>
        </ContentFrame>
      </SubFrame>
    </MainFrame>
  );
}

const HeaderFrame = styled.div`
  width: 1024px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`;

const Username = styled.div`
  font-size: 15px;
  color: ${colors.grey500};
  font-weight: 400;
`;

const Profile = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${colors.grey100};
  border-radius: 28px;
`;

const ProfileFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-left: 32px;
`;

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  padding-right: 32px;
`;

const TagDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.grey300};
`;

const TagTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.grey900};
`;

const BodyFrame = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;

  padding-top: 28px;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  padding-left: 32px;

  color: ${colors.grey900};

  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

const TagFrame = styled.div`
  width: 200px;
  padding-right: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImageFrame = styled.div`
  width: 960px;
  height: 480px;
  background-color: ${colors.grey100};
  border-radius: 2px;
  margin-top: 156px;
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 64px;
`;

const Header = styled.div`
  width: 100%;
  height: 132px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey50};

  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
`;

const SubFrame = styled.div`
  width: 1024px;
  height: 100%;
`;

const MainFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
