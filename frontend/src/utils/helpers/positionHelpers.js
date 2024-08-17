// src/utils/helpers/positionHelpers.js

export const calculateProfitLossPercentage = (buyPrice, currentPrice) => {
  const profitLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
  return profitLoss.toFixed(2);
};

export const calculateHoldingPeriod = (buyDate) => {
  const buy = new Date(buyDate);
  const today = new Date();
  const diffTime = Math.abs(today - buy);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getStrategyData = () => {
  return [
    {
      value: "3hr_rsi_greaterthen50_macd583",
      text: "3Hr/RSI>50/MACD_583",
    },
    {
      value: "daily_rsi_greaterthen70_macd583",
      text: "Daily/RSI>70/MACD_583",
    },
  ];
};
export const getSLPercentageData = () => {
  let percentArr = [];
  for (let i = 1; i <= 10; i++) {
    percentArr.push({ value: i, text: `${i}%`, id: `percente-${i}` });
  }
  return percentArr;
};

export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatAndRoundofAmount = (amount) => {
  // Ensure amount is a number and round it to the nearest whole number
  const roundedAmount = Number(amount).toFixed(0);

  // Format the rounded amount with currency formatting
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0, // No decimal places
  }).format(roundedAmount);
};
