import React from "react";
import { Router } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import * as colors from "../styles/colors";

export default function Login() {
  return (
    <Container>
      <RFrame>
        <TextFrame>
          <LargeTitle>Login to Myfolio</LargeTitle>
          <Title2>Welcome !</Title2>
        </TextFrame>
        <FormFrame>
          <InputsFrame>
            <Input label="이메일" placeholder="이메일을 입력해주세요." />
            <Input
              label="Password"
              placeholder="비밀번호를 입력해주세요."
              Type="password"
              icon={<HiOutlineEye />}
            />
          </InputsFrame>
          <Button size="lg" fullWidth>
            로그인
          </Button>
        </FormFrame>
      </RFrame>
      <LFrame></LFrame>
    </Container>
  );
}

const TextFrame = styled.div`
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
