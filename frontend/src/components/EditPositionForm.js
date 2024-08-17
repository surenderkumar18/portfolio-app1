import React from "react";
import { useParams } from "react-router-dom";
import PositionForm from "./PositionForm";

const EditPositionForm = () => {
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

export default EditPositionForm;
