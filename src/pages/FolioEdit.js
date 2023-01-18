import styled from "@emotion/styled";
import Button from "../components/Button";
import * as colors from "../styles/colors";
import { HiArrowLeft } from "react-icons/hi2";

export default function FolioEdit() {
  return (
    <div>
      <Topbar>
        <Button
          variant="secondary"
          size="md"
          style={{
            backgroundColor: `${colors.grey900}`,
            color: `${colors.white}`,
          }}
        >
          <HiArrowLeft
            style={{ width: "20px", height: "20px", paddingRight: "10px" }}
          />
          Back
        </Button>
      </Topbar>
      <div>
        <div>input area</div>
        <div>render area</div>
      </div>
    </div>
  );
}

const Topbar = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.grey900};
`;
