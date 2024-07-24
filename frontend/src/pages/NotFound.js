// src/pages/NotFound.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  );
};

export default NotFound;
