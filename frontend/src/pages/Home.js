// src/pages/Calendar.js
import React from "react";
import { Link } from "react-router-dom";
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
  font-size: 18px;
  line-height: 30px;
  margin-left: 24px;
  color: #076bcf;
`;

const ListHeading = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

const InstructionTable = styled.div`
  display: flex;
  gap: 20px 60px;
  background-color: #ffffff;
  padding: 16px 32px;
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
          <List>
            <ListHeading>EPS:</ListHeading>
            <ListItem>Stock EPS should be inceasing.</ListItem>
          </List>
        </InstructionSection>
        <InstructionSection>
          <h2>Sell when :- </h2>
          <List>
            <ListHeading>Price Action:</ListHeading>
            <ListItem>If Price closes below 10 DMA.</ListItem>
          </List>
          <List>
            <ListHeading>Milliams %R:</ListHeading>
            <ListItem>
              If signal line reaches at extreme position like 0 or -100, wait
              for 5 periods to confirm Sell or Buy.
            </ListItem>
            <ListItem>
              <Link to='https://medium.com/@acy.securities/guide-to-williams-r-indicator-for-forex-trading-14a2870f3ed7'>
                https://medium.com/@acy.securities/guide-to-williams-r-indicator-for-forex-trading-14a2870f3ed7
              </Link>
              wait for 5 more periods (e.g., 5 days if using daily data) after
              the Williams %R reaches an extreme value (0 or -100) to confirm
              the trade signal. This waiting period can help avoid false signals
              and confirm that the market sentiment is indeed reversing.
            </ListItem>
            <ListItem>Moving Average play crucial role with %R.</ListItem>
          </List>
        </InstructionSection>
      </InstructionTable>

      <HeroBanner>
        <img
          src='http://localhost:3041/images/1720190298925_Screenshot 2024-07-03 at 12.57.16â¯PM.png'
          alt='Image 0'
          class='sc-eldOKa eEKtBs'
        ></img>
        <img
          src='http://localhost:3041/images/Screenshot 2024-07-31 at 2.00.56 PM.png'
          alt='Image 0'
          class='sc-eldOKa eEKtBs'
        ></img>
        <img
          src='http://localhost:3041/images/Screenshot 2024-07-31 at 1.57.36 PM.png'
          alt='Image 0'
          class='sc-eldOKa eEKtBs'
        ></img>
        <img
          src='http://localhost:3041/images/Screenshot 2024-07-31 at 1.57.49 PM.png'
          alt='Image 0'
          class='sc-eldOKa eEKtBs'
        ></img>
      </HeroBanner>
      <HeroBanner></HeroBanner>
    </Container>
  );
};

export default Home;
