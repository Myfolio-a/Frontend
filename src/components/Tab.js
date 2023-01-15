import * as colors from "../styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import ResumeGridItem from "./ResumeGridItem";
import PortfolioGridItem from "./PortfolioGridItem";

export default function Tab() {
  const responseIndex = [
    {
      id: "1",
      project_name: "Untitled 1",
      last_modified: "2022.12.13 19:11",
      project_style: "resume",
    },
    {
      id: "2",
      project_name: "Untitled 2",
      last_modified: "2022.12.13 19:11",
      project_style: "resume",
    },
    {
      id: "3",
      project_name: "Untitled 3",
      last_modified: "2022.12.13 19:11",
      project_style: "resume",
    },
    {
      id: "4",
      project_name: "Untitled 4",
      last_modified: "2022.12.13 19:11",
      project_style: "portfolio",
    },
    {
      id: "5",
      project_name: "Untitled 5",
      last_modified: "2022.12.13 19:11",
      project_style: "portfolio",
    },
    {
      id: "6",
      project_name: "Untitled 6",
      last_modified: "2022.12.13 19:11",
      project_style: "portfolio",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const resumeIndex = responseIndex.filter(
    (proj) => proj.project_style === "resume"
  );

  const portfolioIndex = responseIndex.filter(
    (proj) => proj.project_style === "portfolio"
  );

  const TabList = [
    {
      tabName: "Resumes",
      id: 0,
      content: (
        <ResumeGrid>
          {resumeIndex.map((index) => {
            return (
              <ResumeGridItem
                Title={index.project_name}
                LastEdit={index.last_modified}
                Id={index.id}
              />
            );
          })}
        </ResumeGrid>
      ),
    },
    {
      tabName: "Portfolios",
      id: 1,
      content: (
        <ResumeGrid>
          {portfolioIndex.map((index) => {
            return (
              <PortfolioGridItem
                Title={index.project_name}
                LastEdit={index.last_modified}
                Id={index.id}
              />
            );
          })}
        </ResumeGrid>
      ),
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

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const TabItem = styled.li`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;

  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

  user-select: none;

  &.selected {
    box-shadow: inset 0 -2px 0 ${colors.primary500};
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
