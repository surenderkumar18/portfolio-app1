import React, { useMemo } from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const SummaryBox = styled.div`
  flex: 1 1 20%;
  padding: 10px 20px;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  background-color: #ffffff;
`;

const SummaryHeading = styled.h3``;

const SummaryValue = styled.div`
  font-size: 1.8rem;
  margin-top: 4px;
  color: ${(props) => (props.positive ? "#333" : "#333333")};
`;

const SummaryCurrValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 4px;
  color: ${(props) => (props.positive ? "#333" : "#333333")};
`;

const Summary = ({ positions }) => {
  const totalInvestment = useMemo(() => {
    if (!positions) return 0;
    return positions.reduce(
      (total, position) =>
        total +
        parseFloat(position.buyPrice) * parseFloat(position.totalStocks),
      0
    );
  }, [positions]);

  const totalCurrentValue = useMemo(() => {
    if (!positions) return 0;
    return positions.reduce(
      (total, position) =>
        total +
        parseFloat(position.currentPrice) * parseFloat(position.totalStocks),
      0
    );
  }, [positions]);

  const totalProfitLossAmount = useMemo(() => {
    if (!positions) return 0;
    return totalCurrentValue - totalInvestment;
  }, [totalCurrentValue, totalInvestment]);

  const today = new Date().toLocaleDateString();

  const averageProfitLossPercentage = useMemo(() => {
    if (!positions || positions.length === 0) return 0;

    const totalProfitLossPercentages = positions.reduce((total, position) => {
      const profitLossPercent = calculateProfitLossPercentage(
        parseFloat(position.buyPrice),
        parseFloat(position.currentPrice)
      );
      return total + profitLossPercent;
    }, 0);

    return totalProfitLossPercentages / positions.length;
  }, [positions]);

  const formatAmount = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toFixed(2)}`;
  };

  return (
    <SummaryContainer>
      <SummaryBox>
        <SummaryHeading>CURRENT VALUE</SummaryHeading>
        <SummaryCurrValue>{formatAmount(totalCurrentValue)}</SummaryCurrValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>Invested</SummaryHeading>
        <SummaryValue>{formatAmount(totalInvestment)}</SummaryValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>RETURNS</SummaryHeading>
        <SummaryValue positive={averageProfitLossPercentage >= 0}>
          {averageProfitLossPercentage >= 0
            ? `+${averageProfitLossPercentage.toFixed(2)}`
            : averageProfitLossPercentage.toFixed(2)}
          %
        </SummaryValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>PROFIT/LOSS AMOUNT</SummaryHeading>
        <SummaryValue positive={totalProfitLossAmount >= 0}>
          {formatAmount(totalProfitLossAmount)}
        </SummaryValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>Today's Date</SummaryHeading>
        <SummaryValue>{today}</SummaryValue>
      </SummaryBox>
    </SummaryContainer>
  );
};

const calculateProfitLossPercentage = (buyPrice, currentPrice) => {
  return ((currentPrice - buyPrice) / buyPrice) * 100;
};

export default Summary;
