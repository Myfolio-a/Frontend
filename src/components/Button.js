import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import * as colors from "../styles/colors";
import BeatLoader from "react-spinners/BeatLoader";

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

const VARIANTS = {
  secondary: css`
    --button-border: 1px solid ${colors.grey100};
    --button-background-color: ${colors.white};
    --button-color: ${colors.grey900};
    --button-background-color: ${colors.white};
    --button-hover-background: ${colors.grey50};
    --button-active-background: ${colors.grey100};
    --button-disabled-background: ${colors.white};
    --button-disabled-color: ${colors.grey300};
  `,
};

const COLORSCHEME = {
  white: css`
    ${(p) =>
      p.variant === "secondary"
        ? `--button-border: 1px solid ${colors.white}`
        : ``};
    --button-background-color: rgba(0, 0, 0, 0);
    --button-color: ${colors.white};

    --button-hover-background: ${colors.white};
    --button-hover-color: ${colors.grey900};

    --button-active-background: ${colors.grey100};
    --button-active-color: ${colors.grey900}

    --button-disabled-background: ${colors.white};
    --button-disabled-color: ${colors.grey300};
  `,
};

export default function Button({
  disabled,
  children,
  size,
  variant,
  colorScheme,
  fullWidth,
  loading,
  ...rest
}) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const colorStyle = COLORSCHEME[colorScheme];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      fullWidth={fullWidth}
      variantStyle={variantStyle}
      colorStyle={colorStyle}
      {...rest}
    >
      {children}
      {loading ? <BeatLoader color={colors.white} /> : ""}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  ${(p) => p.colorStyle}

  ${(p) =>
    p.fullWidth &&
    css`
      margin: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
    `}

  display: inline-flex;

  user-select: none;

  height: var(--button-height, 40px);
  margin: 0;
  justify-content: center;
  align-items: center;
  border: var(--button-border, none);
  border-radius: var(--button-radius, 4px);
  cursor: pointer;
  padding: var(--button-padding, 8px 16px);
  background-color: var(--button-background-color, ${colors.primary500});
  color: var(--button-color, ${colors.white});

  font-family: "SUIT";
  font-size: var(--button-font-size, 16px);
  font-weight: 600;

  &:hover {
    background-color: var(--button-hover-background, ${colors.primary700});
    color: var(--button-hover-color, ${colors.white});
  }
  &:active {
    background-color: var(--button-active-background, ${colors.primary900});
    color: var(--button-active-color, ${colors.white});
  }
  &:disabled {
    cursor: default;
    background-color: var(--button-disabled-background, ${colors.grey100});
    color: var(--button-disabled-color, ${colors.grey300});
  }
`;
