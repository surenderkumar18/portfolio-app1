// src/pages/History.js
import React from "react";
import styled from "styled-components";
import PositionList from "../components/PositionList";

const Container = styled.div``;
const PageHeading = styled.h1`
  color: rgb(28, 77, 160);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Dashboard = () => {
  return (
    <Container>
      <PositionList />
    </Container>
  );
};

export default Dashboard;
