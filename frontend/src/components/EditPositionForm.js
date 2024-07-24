import React from "react";
import { useParams } from "react-router-dom";
import PositionForm from "./PositionForm";

const EditPositionForm = () => {
  const { id } = useParams();

  // You may fetch existing position data here if needed

  // Example initial values for editing (replace with actual data fetching logic)
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
