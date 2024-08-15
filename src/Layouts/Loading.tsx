// src/components/Loading.js

import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={logo}
        alt="Loading..."
        className="logo"
        style={{ width: "100px", height: "100px" }}
      />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  @keyframes zoomInOut {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  .logo {
    animation: zoomInOut 2s infinite ease-in-out;
  }
`;
