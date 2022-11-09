import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";

const VARIANTS = {
  selected: css`
    --font-weight: 600;
    --icon-color: ${colors.grey900};
    --text-color: ${colors.grey900};
    --background-color: ${colors.grey50};
  `,
};

export default function Menu({ Icon, Text, onClick, variant, ...rest }) {
  const variantStyle = VARIANTS[variant];
  return (
    <MenuItem
      variantStyle={variantStyle}
      Icon={Icon}
      Text={Text}
      onClick={onClick}
    >
      <IconFrame>{Icon}</IconFrame>
      <TextFrame>{Text}</TextFrame>
    </MenuItem>
  );
}

const TextFrame = styled.div`
  ${(p) => p.variantStyle}
  font-size: 16px;
  font-weight: var(--font-weight, 400);
  line-height: 22px;
  color: var(--text-color, ${colors.grey500});

  flex: 1;
  display: flex;
  align-items: center;
`;

const IconFrame = styled.div`
  ${(p) => p.variantStyle}
  & > svg {
    width: 20px;
    height: 20px;
    color: var(--icon-color, ${colors.grey500});
  }
  height: 20px;
  width: 20px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const MenuItem = styled.div`
  ${(p) => p.variantStyle}
  height: 40px;
  width: 100%;
  border-radius: 4px;

  background-color: var(--background-color, ${colors.white});

  display: flex;
  flex-direction: row;

  &:hover {
    --background-color: ${colors.grey50};
    --icon-color: ${colors.grey600};
    --text-color: ${colors.grey600};
  }

  &:active {
    --background-color: ${colors.grey100};
  }
`;
