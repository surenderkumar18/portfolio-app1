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
  color: ${(props) => props.color || "#333333"};
`;

const SummaryCurrValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 4px;
  color: ${(props) => props.color || "#333333"};
`;

const SummaryValueRs = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 4px;
  display: inline-block;
  margin-left: 10px;
  color: ${(props) => props.color || "#333333"};
`;

/**
 * Determines the color based on the profit/loss percentage.
 * @param {number} profitLoss - The profit/loss percentage.
 * @returns {string} The corresponding color.
 */
const getProfitLossColor = (profitLoss) => {
  if (profitLoss > 20) return "darkgreen";
  if (profitLoss > 10) return "lightgreen";
  if (profitLoss >= 0) return "green";
  if (profitLoss > -10) return "#e41a1a";
  if (profitLoss > -20) return "#b61515";
  return "#b61515";
};

/**
 * Summary component displays an overview of the positions.
 * @param {Object[]} positions - Array of position objects.
 */
const Summary = ({ positions }) => {
  // Calculate total investment amount
  const totalInvestment = useMemo(() => {
    if (!positions) return 0;
    return positions.reduce(
      (total, position) =>
        total +
        parseFloat(position.buyPrice) * parseFloat(position.totalStocks),
      0
    );
  }, [positions]);

  // Calculate total current value
  const totalCurrentValue = useMemo(() => {
    if (!positions) return 0;
    return positions.reduce(
      (total, position) =>
        total +
        parseFloat(position.currentPrice) * parseFloat(position.totalStocks),
      0
    );
  }, [positions]);

  // Calculate total profit/loss amount
  const totalProfitLossAmount = useMemo(() => {
    if (!positions) return 0;
    return totalCurrentValue - totalInvestment;
  }, [totalCurrentValue, totalInvestment]);

  // Get today's date
  const today = new Date().toLocaleDateString();

  // Calculate average profit/loss percentage based on total profit/loss amount
  const averageProfitLossPercentage = useMemo(() => {
    if (!positions || positions.length === 0 || totalInvestment === 0) return 0;

    return (totalProfitLossAmount / totalInvestment) * 100;
  }, [totalProfitLossAmount, totalInvestment]);

  // Format amount in Indian Rupees with potential lakh notation
  const formatAmount = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toFixed(2)}`;
  };

  // Determine color based on profit/loss percentage
  const profitLossColor = getProfitLossColor(averageProfitLossPercentage);

  return (
    <SummaryContainer>
      <SummaryBox>
        <SummaryHeading>CURRENT VALUE</SummaryHeading>
        <SummaryCurrValue>{formatAmount(totalCurrentValue)}</SummaryCurrValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>INVESTED</SummaryHeading>
        <SummaryValue>{formatAmount(totalInvestment)}</SummaryValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>RETURNS</SummaryHeading>
        <SummaryValue color={profitLossColor}>
          {formatAmount(totalProfitLossAmount)}
          <SummaryValueRs color={profitLossColor}>
            {averageProfitLossPercentage >= 0
              ? `(+${averageProfitLossPercentage.toFixed(2)})`
              : `(${averageProfitLossPercentage.toFixed(2)})`}
            %
          </SummaryValueRs>
        </SummaryValue>
      </SummaryBox>
      <SummaryBox>
        <SummaryHeading>TODAY'S DATE</SummaryHeading>
        <SummaryValue>{today}</SummaryValue>
      </SummaryBox>
    </SummaryContainer>
  );
};

export default Summary;
