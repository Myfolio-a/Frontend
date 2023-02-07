import styled from "@emotion/styled";
import * as colors from "../styles/colors";

const ResumeSkeleton = () => {
  return (
    <>
      <MainFrame>
        <Preview></Preview>
        <ControlFrame>
          <TitleFrame>
            <TitleText></TitleText>
            <SubTitle></SubTitle>
          </TitleFrame>
        </ControlFrame>
      </MainFrame>
      <MainFrame>
        <Preview></Preview>
        <ControlFrame>
          <TitleFrame>
            <TitleText></TitleText>
            <SubTitle></SubTitle>
          </TitleFrame>
        </ControlFrame>
      </MainFrame>
    </>
  );
};

const SubTitle = styled.div`
  background-color: ${colors.grey50};
  width: 240px;
  height: 16px;
  border-radius: 2px;
`;

const TitleText = styled.div`
  background-color: ${colors.grey50};
  width: 160px;
  height: 24px;
  border-radius: 2px;
`;

const TitleFrame = styled.div`
  display: flex;
  gap: 8px;
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

export default ResumeSkeleton;
