import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import * as colors from "../styles/colors";
import {
  HiArrowLeft,
  HiOutlineDocumentCheck,
  HiArrowDownTray,
} from "react-icons/hi2";
import Tag from "../components/Tag";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditInput from "../components/EditInput";
import HTMLRenderer from "react-html-renderer";
import React from "react";

export default function FolioEdit() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    headline: "",
    address: "",
    website: "",
    gender: "",
  });

  const [show, setShow] = useState({
    address: false,
    website: false,
    gender: false,
  });

  const hello = `
  <div>
  <div>
    Name: ${inputs.firstName} ${inputs.lastName}
  </div>
  <div>Email: ${inputs.email}</div>
  <div>Headline: ${inputs.headline}</div>
  <div>Address: ${inputs.address}</div>
  <div>Website: ${inputs.website}</div>
  <div>Gender: ${inputs.gender}</div>
</div>
  `;

  const onChangeUserInputs = (e) => {
    const { value, id } = e.target;
    console.log(value);
    console.log(id);
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddButtonClick = (e) => {
    const { id } = e.target;
    let res = id;
    if (id.endsWith("Btn")) {
      res = res.slice(0, -3);
    }
    setShow((prev) => ({
      ...prev,
      [res]: !prev[res],
    }));
    setInputs((prev) => ({
      ...prev,
      [res]: "",
    }));
  };

  const handleCloseClick = (e) => {};

  const userInputDataLocal = JSON.parse(
    localStorage.getItem(`userInputData${itemId}`)
  );

  const userButtonDataLocal = JSON.parse(
    localStorage.getItem(`userButtonData${itemId}`)
  );

  const onClickSave = () => {
    localStorage.removeItem(`userInputData${itemId}`);
    localStorage.removeItem(`userButtondata${itemId}`);

    if (inputs !== null) {
      const userInputData = localStorage.setItem(
        `userInputData${itemId}`,
        JSON.stringify(inputs)
      );
    }

    if (show !== null) {
      const userButtonData = localStorage.setItem(
        `userButtonData${itemId}`,
        JSON.stringify(show)
      );
    }

    console.log("Saved");
  };

  const refreshed = () => {
    if (userInputDataLocal !== null) {
      setInputs(userInputDataLocal);
    }
    if (userButtonDataLocal !== null) {
      setShow(userButtonDataLocal);
    }
  };

  useEffect(() => {
    if (userInputDataLocal !== null) {
      refreshed();
    }
  }, []);

  return (
    <Frame>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Topbar>
            <LeftButtonFrame>
              <Button
                variant="secondary"
                colorScheme="white"
                onClick={() => navigate("/edit")}
              >
                <HiArrowLeft
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingRight: "10px",
                  }}
                />
                Back
              </Button>
            </LeftButtonFrame>
            <Title>
              Untitled<Tag>Resume</Tag>
            </Title>
            <ButtonFrame>
              <Button variant="secondary" colorScheme="white">
                <HiArrowDownTray
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingRight: "10px",
                  }}
                />
                Download
              </Button>
              <Button onClick={onClickSave}>
                <HiOutlineDocumentCheck
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingRight: "10px",
                  }}
                />
                Save
              </Button>
            </ButtonFrame>
          </Topbar>
          <MainFrame>
            <InputFrame>
              <NameInput>
                <Input
                  id="firstName"
                  label="First Name"
                  onChange={onChangeUserInputs}
                  value={inputs.firstName}
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  onChange={onChangeUserInputs}
                  value={inputs.lastName}
                />
              </NameInput>
              <Input
                id="email"
                label="Email"
                onChange={onChangeUserInputs}
                value={inputs.email}
              />
              <Input
                id="headline"
                label="Headline"
                onChange={onChangeUserInputs}
                value={inputs.headline}
              />
              {show.address && (
                <EditInput
                  id="address"
                  label="Address"
                  value={inputs.address}
                  onChange={onChangeUserInputs}
                  onCloseClick={handleAddButtonClick}
                />
              )}
              {show.website && (
                <EditInput
                  id="website"
                  label="Website"
                  value={inputs.website}
                  onChange={onChangeUserInputs}
                  onCloseClick={handleAddButtonClick}
                />
              )}
              {show.gender && (
                <EditInput
                  id="gender"
                  label="Gender"
                  value={inputs.gender}
                  onChange={onChangeUserInputs}
                  onCloseClick={handleAddButtonClick}
                />
              )}
              <AddInputButtonFrame>
                {!show.address && (
                  <Button
                    id="addressBtn"
                    size="sm"
                    variant="secondary"
                    onClick={handleAddButtonClick}
                  >
                    Add Address
                  </Button>
                )}
                {!show.website && (
                  <Button
                    id="websiteBtn"
                    size="sm"
                    variant="secondary"
                    onClick={handleAddButtonClick}
                  >
                    Add Website
                  </Button>
                )}
                {!show.gender && (
                  <Button
                    id="genderBtn"
                    size="sm"
                    variant="secondary"
                    onClick={handleAddButtonClick}
                  >
                    Add Gender
                  </Button>
                )}
              </AddInputButtonFrame>
            </InputFrame>
            <Divider />
            <RenderFrame>
              <TestFrame>
                <TestRenderFrame>
                  <div dangerouslySetInnerHTML={{ __html: hello }}></div>
                </TestRenderFrame>
              </TestFrame>
            </RenderFrame>
          </MainFrame>
        </>
      )}
    </Frame>
  );
}

const AddInputButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const TestRenderFrame = styled.div``;

const TestFrame = styled.div`
  margin: 20px;
  padding: 20px;
  width: calc(100% - 80px);
  height: calc(100% - 80px);

  background-color: ${colors.white};
  border-radius: 8px;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: row;

  gap: 16px;
  padding-top: 8px;
`;

const LeftButtonFrame = styled.div`
  position: absolute;
  left: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 16px;
  line-height: 22px;
  font-weight: 700;

  color: ${colors.white};
`;

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  position: absolute;
  right: 12px;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;

  background-color: ${colors.grey100};
`;

const RenderFrame = styled.div`
  width: 50%;
  height: 100%;

  background-color: ${colors.grey50};
`;

const InputFrame = styled.div`
  width: calc(50% - 1px);
  height: 1;

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

const Topbar = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.grey900};
`;

const Frame = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
`;
