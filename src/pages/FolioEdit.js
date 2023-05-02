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

  const fuckHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <style type="text/css">
        body {
          font-family: "SUIT";
          color: #222;
  
          width: 100%;
          margin: 0px;
          display: flex;
          justify-content: center;
        }
        h1 {
          font-size: 80px;
          font-weight: 800;
          margin-top: 54px;
          margin-bottom: 54px;
        }
        h2 {
          font-size: 48px;
          font-weight: 800;
          margin: 64px 0px 32px;
        }
        h3 {
          font-size: 32px;
          font-weight: 800;
          margin: 0px 0px 16px;
        }
        h4 {
          font-size: 20px;
          font-weight: 800;
          margin: 0px 0px 8px;
        }
        span {
          font-size: 16px;
        }
        p {
          font-size: 18px;
          margin: 0px 0px 16px;
        }
        .mb24 {
          margin-bottom: 24px;
        }
        .main-description {
          font-size: 32px;
        }
        .main-container {
          width: 736px;
          padding: 32px;
        }
        .exp {
          display: flex;
          flex-direction: column;
        }
        .exp-row {
          display: flex;
          flex-direction: row;
  
          padding: 48px 0px;
          border-bottom: 1px solid #eee;
        }
        .exp-column-left {
          display: flex;
          flex-direction: column;
  
          width: 272px;
          padding-right: 16px;
        }
        .exp-column-right {
          display: flex;
          flex-direction: column;
  
          width: 448px;
          margin: 0;
          padding: 0;
        }
        .proj {
          margin-bottom: 16px;
        }
        .other {
          padding: 48px 0px;
          border-bottom: 1px solid #eee;
        }
      </style>
    </head>
    <body>
      <div id="main-container" class="main-container">
        <h1 id="main">{Hello}</h1>
        <div id="description" class="main-description">{asdasdasdasdasdasd}</div>
        <div id="experience" class="exp">
          <h2 id="experience-title">Experience</h2>
          <div id="row" class="exp-row">
            <div id="column" class="exp-column-left">
              <h3 id="exp-name0">{Name0}</h3>
              <span id="exp-position0">{Position0}</span>
              <span id="exp-date0">{Date0}</span>
            </div>
            <div id="column" class="exp-column-right">
              <div id="worked0" class="proj">
                <div class="mb24">
                  <h3>{Worked0}</h3>
                  <span id="worked0-date0">{worked0-date0}</span>
                </div>
                <div>
                  <h4>Description</h4>
                  <p id="worked0-desc0">{worked0-desc0}</p>
                </div>
                <div>
                  <h4>What did i do</h4>
                  <ul>
                    <li id="worked0-did0">{worked0-did0}</li>
                    <li id="worked0-did1">{worked0-did1}</li>
                    <li id="worked0-did2">{worked0-did2}</li>
                  </ul>
                </div>
                <div>
                  <h4>Stack</h4>
                  <div id="worked0-stack0">{worked0-stack0}</div>
                </div>
              </div>
            </div>
            <div class="divider"></div>
          </div>
          <div class="exp-row">
            <div class="exp-column-left">
              <h3>{Name0}</h3>
              <span>{Position0}</span>
              <span>{Date0}</span>
            </div>
            <div class="exp-column-right">
              <div class="proj">
                <div class="mb24">
                  <h3>{Worked0}</h3>
                  <span>{worked0-date0}</span>
                </div>
                <div>
                  <h4>Description</h4>
                  <p>{worked0-desc0}</p>
                </div>
                <div>
                  <h4>What did i do</h4>
                  <ul>
                    <li>{worked0-did0}</li>
                    <li>{worked0-did1}</li>
                    <li>{worked0-did2}</li>
                  </ul>
                </div>
                <div>
                  <h4>Stack</h4>
                  <div>{worked0-stack0}</div>
                </div>
              </div>
              <div class="proj">
                <div class="mb24">
                  <h3>{Worked0}</h3>
                  <span>{worked0-date0}</span>
                </div>
                <div>
                  <h4>Description</h4>
                  <p>{worked0-desc0}</p>
                </div>
                <div>
                  <h4>What did i do</h4>
                  <ul>
                    <li>{worked0-did0}</li>
                    <li>{worked0-did1}</li>
                    <li>{worked0-did2}</li>
                  </ul>
                </div>
                <div>
                  <h4>Stack</h4>
                  <div>{worked0-stack0}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Other Experiences</h2>
            <div class="other">
              <h3>{otherExperiences}</h3>
              <span>{role}</span>
              <span>{date}</span>
              <p>{descriptions}</p>
            </div>
            <div class="other">
              <h3>{otherExperiences}</h3>
              <span>{role}</span>
              <span>{date}</span>
              <p>{descriptions}</p>
            </div>
          </div>
          <div>
            <h2>Skills</h2>
            <div class="other">
              <h3>Overall</h3>
              <ul>
                <li>{list}</li>
                <li>{list}</li>
                <li>{list}</li>
              </ul>
            </div>
            <div class="other">
              <h3>Communication</h3>
              <ul>
                <li>{list}</li>
                <li>{list}</li>
                <li>{list}</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Github</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  </html>
  
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

  const iframePart = () => {
    return {
      __html:
        '<iframe src="./resume.html" width="100%" height="100%"></iframe>',
    };
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
              <InputWrapper>
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
              </InputWrapper>
            </InputFrame>

            <Divider />
            <RenderFrame>
              <TestFrame>
                <RenderHtml
                  dangerouslySetInnerHTML={{ __html: fuckHtml }}
                ></RenderHtml>
              </TestFrame>
            </RenderFrame>
          </MainFrame>
        </>
      )}
    </Frame>
  );
}

const RenderHtml = styled.div`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  width: 1;

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

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
