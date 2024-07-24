import React from "react";
import PositionForm from "./PositionForm";

const AddPositionForm = () => {
  const initialValues = {
    stockId: "",
    stockName: "",
    stockSymbol: "",
    buyDate: "",
    sellDate: "",
    buyPrice: "",
    sellPrice: "",
    currentPrice: "",
    profitLossPercentage: "",
    profitLossRupees: "",
    totalStocks: "",
    investmentAmount: "",
    currentValue: "",
    images: [],
    stopLoss: "",
    holdPeriod: "",
  };

  return <PositionForm initialValues={initialValues} />;
};

export default AddPositionForm;
