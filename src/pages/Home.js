import styled from "@emotion/styled";
import GlobalNavigation from "../components/GlobalNavigation";
import Topbar from "../components/Topbar";
import * as colors from "../styles/colors";

export default function Home() {
  return (
    <MainFrame>
      <GlobalNavigation />
      <ViewFrame>
        <Topbar />
        <GridViewFrame />
      </ViewFrame>
    </MainFrame>
  );
}

const GridViewFrame = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${colors.error100};
`;

const ViewFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: row;
`;
