import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Global styles={style} />
      {/* <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/main">Main</Link> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Home />} />
        <Route path="/main" element={<Main />} />
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
