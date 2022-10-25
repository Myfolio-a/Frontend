import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import * as colors from "../styles/colors";

const SIZES = {
  sm: css`
    --button-height: 32px;
    --button-radius: 4px;
    --button-font-size: 12px;
    --button-padding: 6px 12px;
  `,
  md: css`
    --button-height: 40px;
    --button-radius: 5px;
    --button-font-size: 16px;
    --button-padding: 8px 16px;
  `,
  lg: css`
    --button-height: 48px;
    --button-radius: 6px;
    --button-font-size: 20px;
    --button-padding: 8px 20px;
  `,
};

export default function Button({
  disabled,
  children,
  size,
  fullWidth,
  ...rest
}) {
  const sizeStyle = SIZES[size];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const fullWidthStyle = css`
  ${(p) =>
    p.fullWidth &&
    css`
      margin: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
    `}
`;

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}

  ${fullWidthStyle}

  display: inline-flex;

  height: var(--button-height, 40px);
  margin: 0;
  border: none;
  border-radius: var(--button-radius, 4px);
  cursor: pointer;
  padding: var(--button-padding, 8px 16px);
  background-color: ${colors.primary500};
  color: ${colors.white};

  font-family: "SUIT";
  font-size: var(--button-font-size, 16px);
  font-weight: 600;

  &:hover {
    background-color: ${colors.primary700};
  }
  &:active {
    background-color: ${colors.primary900};
  }
  &:disabled {
    cursor: default;
    background-color: ${colors.grey100};
  }
`;
