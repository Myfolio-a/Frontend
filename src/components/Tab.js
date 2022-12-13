import * as colors from "../styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const TabList = [
    {
      tabName: "Resumes",
      id: 0,
      content: <div>Resume Area</div>,
    },
    {
      tabName: "Portfolios",
      id: 1,
      content: <div>Portfolio Area</div>,
    },
  ];

  return (
    <div>
      <TabMenu>
        {TabList.map((section, index) => {
          return (
            <TabItem
              className={section.id === activeIndex ? "selected" : ""}
              onClick={() => tabClickHandler(section.id)}
            >
              {section.tabName}
            </TabItem>
          );
        })}
      </TabMenu>
      <div>{TabList[activeIndex].content}</div>
    </div>
  );
}

const TabItem = styled.li`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;

  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

  &.selected {
    box-shadow: 0 2px 0 ${colors.primary500};
  }

  &:hover {
    cursor: pointer;
  }
`;

const TabMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin-top: 24px;
  margin-bottom: 48px;

  border-bottom: 1px solid ${colors.grey50};
`;
