import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import * as colors from "../styles/colors";
import axios from "../api/axios";

const REGISTER_URL =
  "https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/users";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(false);
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const navigate = useNavigate();

  const check = emailError || nicknameError || passwordError;

  const handleButtonClick = async () => {
    if (check === true) {
      return console.log("Error");
    }
    setLoading(true);
    if (email === "" || password === "" || nickname === "") {
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
      if (nickname === "") {
        setNicknameError(true);
        setNicknameErrorMessage("닉네임을 입력해주세요.");
        console.log("Nickname error");
      }
      return;
    }

    // call api
    try {
      const response = await axios.post(REGISTER_URL, {
        email,
        username: nickname,
        password,
      });
      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      if (accessToken || refreshToken) {
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("refresh-token", refreshToken);
        console.log("Saved token to local storage.");
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        console.log("No server response");
      } else if (err.response.status === 400) {
        if (
          err.response.data.errors.find(
            ({ code }) => code === "duplicated_username"
          )
        ) {
          setNicknameError(true);
          setNicknameErrorMessage("중복된 닉네임입니다.");
        }
        if (
          err.response.data.errors.find(
            ({ code }) => code === "duplicated_email"
          )
        ) {
          setEmailError(true);
          setEmailErrorMessage("중복된 이메일입니다.");
        }
        if (
          err.response.data.errors.find(({ code }) => code === "invalid_email")
        ) {
          setEmailError(true);
          setEmailErrorMessage("사용할 수 없는 이메일입니다.");
        }
        if (
          err.response.data.errors.find(
            ({ code }) => code === "invalid_username"
          )
        ) {
          setNicknameError(true);
          setNicknameErrorMessage("사용할 수 없는 닉네임입니다.");
        }
        if (
          err.response.data.errors.find(
            ({ code }) => code === "invalid_password"
          )
        ) {
          setPasswordError(true);
          setPasswordErrorMessage("사용할 수 없는 비밀번호입니다.");
        }
      }
    }
    setLoading(false);
  };

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
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    if (regExp.test(e.target.value)) {
      setEmailError(false);
      setEmailErrorMessage("");
      setEmail(e.target.value);
    } else {
      setEmailError(true);
      setEmailErrorMessage("올바른 이메일 형식이 아닙니다.");
    }
  };

  const checkNickname = (e) => {
    if (e.target.value.length >= 2 && e.target.value.length <= 16) {
      setNicknameError(false);
      setNicknameErrorMessage("");
      setNickname(e.target.value);
    }
    if (e.target.value.length < 2 || e.target.value.length > 16) {
      setNicknameError(true);
      setNicknameErrorMessage("닉네임은 2글자 이상 16자이하여야 합니다.");
    }
  };

  const checkPassword = (e) => {
    if (e.target.value.length >= 8 && e.target.value.length <= 50) {
      setPasswordError(false);
      setPasswordErrorMessage("");
      setPassword(e.target.value);
    }
    if (e.target.value.length < 8 || e.target.value.length > 50) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "비밀번호는 문자와 숫자가 포함된 8글자 이상 50자이하여야 합니다."
      );
    }
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
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              onChange={checkNickname}
              onBlur={checkNickname}
              variant={nicknameError ? `error` : `default`}
              LeftDescription={nicknameErrorMessage}
            />
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
          <Button
            size="lg"
            onClick={handleButtonClick}
            loading={loading}
            fullWidth
          >
            {loading ? "" : "회원가입"}
          </Button>
          <TextFrame>
            <div>이미 계정이 있나요 ?</div>
            <Link to="/login" style={{ color: `${colors.primary500}` }}>
              로그인
            </Link>
          </TextFrame>
        </FormFrame>
      </RFrame>
      <LFrame></LFrame>
    </Container>
  );
}

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
