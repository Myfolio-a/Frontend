import * as colors from "../styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import ResumeGridItem from "./ResumeGridItem";
import PortfolioGridItem from "./PortfolioGridItem";
import { HiPlus } from "react-icons/hi2";
import axios from "axios";
import ResumeSkeleton from "./ResumeGridItem.skeleton";
import PortfolioSkeleton from "./PortfolioGridItem.skeleton";
import { AuthContext } from "../api/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import instance from "../api/instance";
import React from "react";

export default function Tab() {
  const FOLIO_URL = "v1/folios";

  const [activeIndex, setActiveIndex] = useState(0);
  const [folioList, setFolioList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setLoggedUser, loggedUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access-token");
  const fetchItems = async () => {
    try {
      setFolioList([]);
      setLoading(true);
      console.log("Loading");
      const response = await instance.get(FOLIO_URL);
      setFolioList(response.data.folios);
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        console.log("Invaild field value");
      } else if (e.response.status === 401) {
        console.log("Access token expired");
      } else if (e.response.status === 404) {
        console.log("Empty folio list");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (loggedUser === null && accessToken === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
      return;
    }
    fetchItems();
  }, []);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const resumeIndex = folioList.filter((proj) => proj.type === "resume");
  const portfolioIndex = folioList.filter((proj) => proj.type === "portfolio");

  const TabList = [
    {
      tabName: "Resumes",
      id: 0,
      content: (
        <ResumeGrid>
          {loading ? (
            <ResumeSkeleton />
          ) : (
            <>
              {resumeIndex.map((index) => {
                return (
                  <>
                    <ResumeGridItem
                      Title={index.title}
                      LastEdit={index.last_modified}
                      Id={index.id}
                    />
                  </>
                );
              })}
            </>
          )}
        </ResumeGrid>
      ),
    },
    {
      tabName: "Portfolios",
      id: 1,
      content: (
        <ResumeGrid>
          {loading ? (
            <PortfolioSkeleton />
          ) : (
            <>
              {portfolioIndex.map((index) => {
                return (
                  <PortfolioGridItem
                    Title={index.title}
                    LastEdit={index.last_modified}
                    Id={index.id}
                  />
                );
              })}
            </>
          )}
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
