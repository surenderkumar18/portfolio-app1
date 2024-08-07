// src/pages/Calendar.js
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const HeroBanner = styled.div`
  img {
    width: 100%;
  }
`;
const List = styled.ul`
  margin: 24px 0px;
  list-style-type: circle;
  padding: 0px;
`;
const ListItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  margin-left: 24px;
`;

const ListHeading = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const InstructionTable = styled.div`
  display: flex;
  gap: 20px 60px;
`;
const InstructionSection = styled.div`
  width: 50%;
`;

const Home = () => {
  return (
    <Container>
      <InstructionTable>
        <InstructionSection>
          <h2>Buy when :- </h2>
          <List>
            <ListHeading>Price Action:</ListHeading>
            <ListItem>Weekly price must be Above 10 DMA.</ListItem>
            <ListItem>Daily price must be Above 10 DMA.</ListItem>
            <ListItem>3Hr price must be Above 10 DMA.</ListItem>
          </List>
          <List>
            <ListHeading>Moving Average:</ListHeading>
            <ListItem>10, 20, 50 above 200.</ListItem>
            <ListItem>10 above 20.</ListItem>
          </List>
          <List>
            <ListHeading>RSI:</ListHeading>
            <ListItem>RSI {`>`} 50.</ListItem>
            <ListItem>Smoothing Moving Average above 50.</ListItem>
            <ListItem>RSI must be above Smoothing MA.</ListItem>
            <ListItem>
              If Smoothing MA is declining from 70 and start rising near 50,
              trend likely be strong.
            </ListItem>
          </List>
        </InstructionSection>
        <InstructionSection>
          <h2>Sell when :- </h2>
          <List>
            <ListHeading>Price Action:</ListHeading>
            <ListItem>If Price closes below 10 DMA.</ListItem>
          </List>
        </InstructionSection>
      </InstructionTable>

      <HeroBanner>
        <img
          src='http://localhost:3041/images/1720190298925_Screenshot 2024-07-03 at 12.57.16â¯PM.png'
          alt='Image 0'
          class='sc-eldOKa eEKtBs'
        ></img>
      </HeroBanner>
    </Container>
  );
};

export default Home;
