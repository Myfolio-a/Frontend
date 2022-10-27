import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import * as colors from "../styles/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  const handleButtonClick = () => {
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
    console.log("Login");
    // call api
    console.log(email);
    console.log(password);
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
          <Button size="lg" fullWidth onClick={handleButtonClick}>
            로그인
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
