import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import * as colors from "../styles/colors";
import axios from "../api/axios";
import { response } from "msw";

const LOGIN_URL =
  "https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/auth/login";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    if (regExp.test(e.target.value)) {
      setEmailError(false);
      setEmail(e.target.value);
      setEmailErrorMessage("");
    } else {
      setEmailError(true);
      setEmailErrorMessage("올바른 이메일 형식이 아닙니다.");
    }
  };

  const checkPassword = (e) => {
    if (e.target.value.length >= 8 && e.target.value.length <= 50) {
      setPasswordError(false);
      setPassword(e.target.value);
      setPasswordErrorMessage("");
    }
    if (e.target.value.length < 8 || e.target.value.length > 50) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "비밀번호는 문자와 숫자가 포함된 8글자 이상 50자이하여야 합니다."
      );
    }
  };

  const check = emailError || passwordError;
  const failMessage =
    "이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.";

  const handleButtonClick = async () => {
    setLoading(true);
    console.log("Loading ...");

    if (check === true) {
      return console.log("error");
    }
    if (email === "" || password === "") {
      if (email === "") {
        setEmailError(true);
        setEmailErrorMessage("이메일을 입력해주세요.");
        console.log("Email error");
      }
      if (password === "") {
        setPasswordError(true);
        setPasswordErrorMessage("비밀번호를 입력해주세요.");
        console.log("Password error");
      }
      return;
    }
    // call api
    try {
      setLoginFail(false);
      const response = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      const token = response.data.token;
      // 토큰을 로컬스토리지에 저장한다.
      if (token) {
        localStorage.setItem("login-token", token);
        console.log("Saved token to local storage.");
      }
      // 전역상태에 있는 로그인 상태를 true로 바꾼다.

      // home 으로 이동한다. (useNavigate)
      navigate("/");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        console.log("No server response");
      } else if (err.response.status === 400) {
        setLoginFail(true);
        console.log("Validation Error");
      }
    }
    setLoading(false);
    console.log("NOT LOADING");
  };

  return (
    <Container>
      <RFrame>
        <TitleFrame>
          <LargeTitle>Login to Myfolio</LargeTitle>
          <Title2>Welcome !</Title2>
        </TitleFrame>
        <FormFrame>
          <InputsFrame>
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              onBlur={checkEmail}
              onChange={checkEmail}
              variant={emailError ? `error` : `default`}
              LeftDescription={emailErrorMessage}
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              Type={passwordType.type}
              icon={
                passwordType.visible ? <HiOutlineEye /> : <HiOutlineEyeSlash />
              }
              handleIconClick={handlePasswordType}
              variant={passwordError ? `error` : `default`}
              onBlur={checkPassword}
              onChange={checkPassword}
              LeftDescription={passwordErrorMessage}
            />
          </InputsFrame>
          <LoginFailMessage>{loginFail ? failMessage : ""}</LoginFailMessage>
          <Button
            size="lg"
            onClick={handleButtonClick}
            loading={loading}
            fullWidth
          >
            {loading ? "" : "로그인"}
          </Button>
          <TextFrame>
            <div>마이폴리오에 처음이신가요 ?</div>
            <Link to="/signup" style={{ color: `${colors.primary500}` }}>
              회원가입
            </Link>
          </TextFrame>
        </FormFrame>
      </RFrame>
      <LFrame></LFrame>
    </Container>
  );
}

const LoginFailMessage = styled.div`
  color: ${colors.error500};
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;

const TextFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title2 = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.grey400};
`;

const LargeTitle = styled.div`
  font-weight: 600;
  font-size: 34px;
  line-height: 48px;
  color: ${colors.grey900};
`;

const InputsFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
`;

const LFrame = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${colors.primary20};
  flex: none;
  order: 0;
`;

const RFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  background-color: ${colors.white};
  flex: none;
  order: 0;
  gap: 64px;
`;
