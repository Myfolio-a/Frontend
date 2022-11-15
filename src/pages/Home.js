import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import GlobalNavigation from "../components/GlobalNavigation";
import GridItem from "../components/GridItem";
import Topbar from "../components/Topbar";
import * as colors from "../styles/colors";

export default function Home() {
  const GETITEMS_URL =
    "https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/templates";
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      title: "test title 1",
      username: "Seokmin Youn",
      favorite: "1",
    },
    {
      id: 2,
      title: "test title 2",
      username: "Seokmin Youn",
      favorite: "3",
    },
    {
      id: 3,
      title: "test title 3",
      username: "Seokmin Youn",
      favorite: "20",
    },
    {
      id: 4,
      title: "test title 4",
      username: "Sungu Kang",
      favorite: "40",
    },
    {
      id: 5,
      title: "test title 5",
      username: "Hello My name is",
      favorite: "10",
    },
    {
      id: 6,
      title: "test title 6",
      username: "Hello My name is",
      favorite: "10",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState(null);

  const fetchItems = async () => {
    try {
      setTemplate(null);
      setLoading(true);
      const response = await axios.get(GETITEMS_URL);
      setTemplate(response.data.templates);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleItemClick = (id) => {
    const result = template.filter((item) => item.template_id === id);
    console.log(result[0].title);
    return navigate("/templates/" + id);
  };

  const handleUserClick = (id) => {
    const result = template.filter((item) => item.template_id === id);
    return console.log(result[0].username);
  };

  if (loading) return <div>Loading...</div>;
  if (!template) return null;

  return (
    <MainFrame>
      <GlobalNavigation />
      <ViewFrame>
        <Topbar />
        <GridViewFrame>
          <RedColor>
            {template.map((item) => (
              <GridItem
                key={item.template_id}
                id={item.template_id}
                title={item.title}
                username={item.username}
                favorite={item.likes}
                handleItemClick={handleItemClick}
                handleUserClick={handleUserClick}
              />
            ))}
          </RedColor>
        </GridViewFrame>
      </ViewFrame>
    </MainFrame>
  );
}

const RedColor = styled.div`
  background-color: ${colors.white};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 16px;
  column-gap: 16px;
  padding-bottom: 32px;
`;

const GridViewFrame = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 240px;
  margin-top: 112px;
`;
