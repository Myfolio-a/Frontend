import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import * as colors from "../styles/colors";
import { HiBolt } from "react-icons/hi2";

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
  icon,
}) {
  const variantStyle = VARIANTS[variant];
  return (
    <InputFrame>
      <InputLabel>{label}</InputLabel>
      <StyledInputFrame variantStyle={variantStyle} disabled={disabled}>
        <StyledInput
          variantStyle={variantStyle}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
        />
        <HiBolt
          style={{ width: "16px", height: "16px", margin: "0 12px 0 0" }}
        />
      </StyledInputFrame>
      <InputLeftDescription variantStyle={variantStyle}>
        {LeftDescription}
      </InputLeftDescription>
    </InputFrame>
  );
}

const StyledInputFrame = styled.div`
  ${(p) => p.variantStyle}
  ${(p) =>
    p.disabled &&
    css`
      pointer-events: none;
    `};

  height: 36px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px;
  margin: 0;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: var(
    --input-default-border,
    inset 0px 0px 0px 1px ${colors.grey100}
  );
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

  border-radius: 2.5px;
  height: 24px;
  margin: 0;
  border: none;
  outline: none;

  padding: var(--input-padding, 6px 12px);
  background-color: ${colors.white};

  font-family: "SUIT";
  font-size: 14px;
  font-weight: 400;

  &:disabled {
    color: ${colors.grey300};

    &::placeholder {
      color: ${colors.grey300};
    }
  }
`;
