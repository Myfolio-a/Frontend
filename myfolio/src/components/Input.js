import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import * as colors from "../styles/colors";

const VARIANTS = {
  error: css`
    --input-default-border: inset 0px 0px 0px 1px ${colors.error500};
    --input-hover-border: inset 0px 0px 0px 1px ${colors.error700};
    --input-focus-border: inset 0px 0px 0px 2px ${colors.error500};
    --input-description: ${colors.error500};
  `,
};

export default function Input({
  disabled,
  variant,
  placeholder,
  value,
  label,
  LeftDescription,
}) {
  const variantStyle = VARIANTS[variant];
  return (
    <InputFrame>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        variantStyle={variantStyle}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
      <InputLeftDescription variantStyle={variantStyle}>
        {LeftDescription}
      </InputLeftDescription>
    </InputFrame>
  );
}

const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLeftDescription = styled.div`
  ${(p) => p.variantStyle}
  font-family: "SUIT";
  color: var(--input-description, ${colors.grey600});
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
`;

const InputLabel = styled.div`
  font-family: "SUIT";
  color: ${colors.grey600};
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  ${(p) => p.variantStyle}

  height: 24px;
  margin: 0;
  border: none;
  outline: none;
  box-shadow: var(
    --input-default-border,
    inset 0px 0px 0px 1px ${colors.grey100}
  );
  border-radius: 4px;
  padding: var(--input-padding, 8px 12px);
  background-color: ${colors.white};

  font-family: "SUIT";
  font-size: 14px;
  font-weight: 400;

  &:hover {
    box-shadow: var(
      --input-hover-border,
      inset 0px 0px 0px 1px ${colors.grey900}
    );
  }
  &:focus {
    box-shadow: var(
      --input-focus-border,
      inset 0px 0px 0px 2px ${colors.primary500}
    );
  }
  &:disabled {
    cursor: default;
    box-shadow: inset 0px 0px 0px 1px ${colors.grey50};
    color: ${colors.grey300};

    &::placeholder {
      color: ${colors.grey300};
    }
  }
`;
