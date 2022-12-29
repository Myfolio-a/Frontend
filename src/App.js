import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Edit from "./pages/Edit";
import More from "./pages/More";

function App() {
  return (
    <div className="App">
      <Global styles={style} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/templates/:itemId" element={<More />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

const style = css`
  ${emotionReset}
  body {
    font-family: "SUIT";
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 100;
    src: url("./fonts/SUIT-Thin.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 200;
    src: url("./fonts/SUIT-ExtraLight.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 300;
    src: url("./fonts/SUIT-Light.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 400;
    src: url("./fonts/SUIT-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 500;
    src: url("./fonts/SUIT-Medium.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 600;
    src: url("./fonts/SUIT-SemiBold.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 700;
    src: url("./fonts/SUIT-Bold.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 800;
    src: url("./fonts/SUIT-ExtraBold.woff2") format("woff2");
  }
  @font-face {
    font-family: "SUIT";
    font-weight: 900;
    src: url("./fonts/SUIT-Heavy.woff2") format("woff2");
  }
`;

export default App;
