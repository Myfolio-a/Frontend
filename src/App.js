import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Global styles={style} />
      {/* Navigater
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/main">Main</Link> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
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
`;

export default App;
