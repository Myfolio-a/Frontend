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
  const { firstName, lastName, email, headline, address, website, gender } =
    inputs;

  const [show, setShow] = useState({
    address: false,
    website: false,
    gender: false,
  });

  // const asd = [
  //   {
  //     key: 1,
  //     id: "address",
  //     label: "Address",
  //   },
  //   {
  //     key: 2,
  //     id: "website",
  //     label: "Website",
  //   },
  //   {
  //     key: 3,
  //     id: "gender",
  //     label: "Gender",
  //   },
  // ];

  const onChangeUserInputs = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleAddButtonClick = (e) => {
    const { id } = e.target;
    console.log(e.target);
    setShow({
      ...show,
      [id]: !show[id],
    });
    setInputs({
      ...inputs,
      [id]: "",
    });
    console.log(show);
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

    const userInputData = localStorage.setItem(
      `userInputData${itemId}`,
      JSON.stringify(inputs)
    );
    const userButtonData = localStorage.setItem(
      `userButtonData${itemId}`,
      JSON.stringify(show)
    );
    console.log("Saved");
  };

  const refreshed = () => {
    setLoading(true);
    setInputs(userInputDataLocal);
    setShow(userButtonDataLocal);
    setLoading(false);
    console.log(show);
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
                  value={firstName}
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  onChange={onChangeUserInputs}
                  value={lastName}
                />
              </NameInput>
              <Input
                id="email"
                label="Email"
                onChange={onChangeUserInputs}
                value={email}
              />
              <Input
                id="headline"
                label="Headline"
                onChange={onChangeUserInputs}
                value={headline}
              />
              {!show.address ? (
                <></>
              ) : (
                <EditInput
                  id="address"
                  label="Address"
                  value={address}
                  onChange={onChangeUserInputs}
                  onCloseClick={handleAddButtonClick}
                />
              )}
              {!show.website ? (
                <></>
              ) : (
                <EditInput
                  id="website"
                  label="Website"
                  value={website}
                  onChange={onChangeUserInputs}
                />
              )}
              {!show.gender ? (
                <></>
              ) : (
                <EditInput
                  id="gender"
                  label="Gender"
                  value={gender}
                  onChange={onChangeUserInputs}
                />
              )}

              {/* {asd
                .filter((userInput) => show[userInput.id] === true)
                .map((userInput) => (
                  <Input
                    id={userInput.id}
                    key={userInput.key}
                    label={userInput.label}
                    onChange={onChangeUserInputs}
                    value={inputs[userInput.id]}
                  />
                ))} */}
              <AddInputButtonFrame>
                {!show.address ? (
                  <Button
                    id="address"
                    size="sm"
                    variant="secondary"
                    onClick={handleAddButtonClick}
                  >
                    Add Address
                  </Button>
                ) : (
                  <></>
                )}
                <Button
                  id="website"
                  size="sm"
                  variant="secondary"
                  onClick={handleAddButtonClick}
                >
                  Add Website
                </Button>
                <Button
                  id="gender"
                  size="sm"
                  variant="secondary"
                  onClick={handleAddButtonClick}
                >
                  Add Gender
                </Button>
              </AddInputButtonFrame>
            </InputFrame>
            <Divider />
            <RenderFrame>
              <TestFrame>
                <TestRenderFrame>
                  <div>
                    <div>
                      Name: {firstName} {lastName}
                    </div>
                    <div>Email: {email}</div>
                    <div>Headline: {headline}</div>
                    <div>Address: {inputs.address}</div>
                    <div>Website: {inputs.website}</div>
                    <div>Gender: {inputs.gender}</div>
                  </div>
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
