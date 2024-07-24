// History.jsx

import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import PositionList from "../components/PositionList";

const Container = styled.div``;

const History = () => {
  return (
    <Container>
      <h2>Deleted Positions</h2>
      <PositionList isHistory={true} />
    </Container>
  );
};

export default History;
