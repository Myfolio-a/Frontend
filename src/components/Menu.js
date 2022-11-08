import styled from "@emotion/styled";
import * as colors from "../styles/colors";

export default function Menu({ Icon, Text, onClick, ...rest }) {
  return (
    <MenuItem Icon={Icon} Text={Text} onClick={onClick}>
      <IconFrame>{Icon}</IconFrame>
      <TextFrame>{Text}</TextFrame>
    </MenuItem>
  );
}

const TextFrame = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-color, ${colors.grey500});

  flex: 1;
  display: flex;
  align-items: center;
`;

const IconFrame = styled.div`
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
  height: 40px;
  width: 100%;
  border-radius: 4px;

  background-color: var(--background-color, ${colors.white});

  display: flex;
  flex-direction: row;

  &:hover {
    background-color: ${colors.grey50};
    --icon-color: ${colors.grey600};
    --text-color: ${colors.grey600};
  }
`;
