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
