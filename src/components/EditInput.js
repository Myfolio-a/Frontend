import React from "react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import { HiXMark } from "react-icons/hi2";

const EditInput = ({ id, label, value, onCloseClick, ...rest }) => {
  return (
    <Frame>
      <LabelWrapper>
        <InputLabel>{label}</InputLabel>
        <IconWrapper onClick={onCloseClick}>
          <HiXMark id={id} />
        </IconWrapper>
      </LabelWrapper>
      <LabelFrame></LabelFrame>
      <StyledInput id={id} value={value} {...rest} />
    </Frame>
  );
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputLabel = styled.div`
  font-family: "SUIT";
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1;
`;

const LabelFrame = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  height: 24px;
  margin: 0;
  border: none;
  outline: none;

  background-color: ${colors.grey50};

  width: 1;
  padding: 8px 12px;

  font-family: "SUIT";
  font-size: 14px;
  font-weight: 400;

  &:hover {
    box-shadow: var(
      --input-hover-border,
      inset 0px 0px 0px 1px ${colors.grey900}
    );
  }
  &:focus-within {
    box-shadow: var(
      --input-focus-border,
      inset 0px 0px 0px 2px ${colors.primary500}
    );
  }
`;

export default EditInput;
