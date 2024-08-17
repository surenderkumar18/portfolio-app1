import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import PositionImageModal from "./PositionImageModal"; // Assuming you have a Modal component
import parse from "html-react-parser"; // Import the html-react-parser library
import {
  formatAmount,
  formatAndRoundofAmount,
} from "../utils/helpers/positionHelpers";

const BoldCell = styled.div`
  font-weight: bold;
`;
const TextCenterCell = styled.div`
  text-align: center;
`;

const TextBold = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  display: inline-block;
  width: 72px;
`;

const Cell = styled.td`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: normal;
  padding: 0.8rem;
  line-height: 140%;
  border: 0;
  position: relative;
  border-right: 1px #fcfbfb solid;
`;

const Button = styled.button`
  color: #dc2626;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: #b91c1c;
    color: #ffffff;
  }
`;

const ImageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 120px;
`;

const ImageListItem = styled.li`
  margin: 2px;
  float: left;
  transition: transform 0.3s ease-in-out; /* Add smooth transition effect */
  &:hover {
    transform: scale(1.1); /* Scale up on hover */
    z-index: 1; /* Ensure it's on top of other items */
  }
`;

const Image = styled.img`
  width: 34px;
  height: auto;
  cursor: pointer;
`;

const LargeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
`;

const HoldingPeriodBoxContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const HoldingPeriodBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: #4b85e6;
  margin-top: 6px;
  margin-right: 6px;
  text-align: center;
`;
const HoldingPeriodCount = styled.span`
  font-size: 11px;
  color: #ffffff;
  vertical-align: top;
  line-height: 16px;
`;

const ProfitLossContainer = styled.div``;

const ProfitLossPrice = styled.div`
  color: #3b3939;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
`;
const UpArrow = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
  }
  &::before {
    width: 2px;
    height: 10px;
    background-color: #009681;
    top: 1px;
    left: 5px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border: solid #009681;
    border-width: 0 2px 2px 0;
    transform: rotate(-135deg);
    top: 0;
    left: 2px;
  }
`;

const DownArrow = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
  }
  &::before {
    width: 2px;
    height: 10px;
    background-color: #e41a1a;
    top: 1px;
    left: 5px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border: solid #e41a1a;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    top: 5px;
    left: 2px;
  }
`;

const formatDate = (date) => {
  if (!date) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
};

const calculateProfitLossPercentage = (buyPrice, currentPrice) => {
  const profitLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
  return profitLoss.toFixed(2);
};
const calculateProfitLossAmount = (buyPrice, currentPrice, totalStocks) => {
  const profitLoss = (currentPrice - buyPrice) * totalStocks;
  return profitLoss.toFixed(2);
};

const getProfitLossColor = (profitLoss) => {
  if (profitLoss >= 0) return "green";
  return "#b61515";
};
const getProfitLossAmntColor = (profitLoss) => {
  if (profitLoss > 0) return "green";
  return "#e41a1a";
};

const calculateInvestmentAmount = (buyPrice, totalStocks) => {
  // Calculate the investment amount
  const investmentAmount = buyPrice * totalStocks;
  return investmentAmount.toFixed(2);
};

const calculateCurrentValue = (currentPrice, totalStocks) => {
  // Calculate the current amount
  const currentValue = currentPrice * totalStocks;
  return currentValue.toFixed(2);
};

const calculateHoldingPeriod = (buyDate, sellDate, isDeleted) => {
  console.log(buyDate, sellDate, isDeleted);
  const buy = new Date(buyDate);
  const today = isDeleted === "true" ? new Date(sellDate) : new Date();
  let holdingPeriod = 0;
  console.log(today);

  while (buy <= today) {
    const dayOfWeek = buy.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Increment holding period if it's a weekday
      holdingPeriod++;
    }
    // Move to the next day
    buy.setDate(buy.getDate() + 1);
  }

  return holdingPeriod;
};

const PositionItem = ({
  position,
  field,
  onDelete,
  onView,
  customClass,
  serialNo,
  textAlign,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete();
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const renderField = () => {
    switch (field) {
      case "serialNo":
        return serialNo;
      case "stockName":
        return <BoldCell>{position.stockName}</BoldCell>;
      case "stockSymbol":
        return position.stockSymbol;
      case "buyDate":
        return formatDate(position.buyDate);
      case "sellDate":
        return formatDate(position.sellDate);
      case "buyPrice":
        return formatAmount(position.buyPrice);
      case "sellPrice":
        return formatAmount(position.sellPrice);
      case "currentPrice":
        return formatAmount(position.currentPrice);
      case "profitLossPercentage":
        const profitLoss = calculateProfitLossPercentage(
          position.buyPrice,
          position.currentPrice
        );
        const profitLossAmnt = calculateProfitLossAmount(
          position.buyPrice,
          position.currentPrice,
          position.totalStocks
        );
        return (
          <ProfitLossContainer>
            <ProfitLossPrice>
              {formatAndRoundofAmount(
                profitLossAmnt >= 0 ? `+${profitLossAmnt}` : `${profitLossAmnt}`
              )}
            </ProfitLossPrice>
            {profitLoss >= 0 ? (
              <UpArrow style={{ marginLeft: "10px" }} />
            ) : (
              <DownArrow style={{ marginLeft: "10px" }} />
            )}
            <TextBold style={{ color: getProfitLossColor(profitLoss) }}>
              {profitLoss >= 0 ? `+${profitLoss}%` : `${profitLoss}%`}
            </TextBold>
          </ProfitLossContainer>
        );
      case "totalStocks":
        return position.totalStocks;
      case "investmentAmount":
        return formatAmount(
          calculateInvestmentAmount(position.buyPrice, position.totalStocks)
        );
      case "currentValue":
        return formatAmount(
          calculateCurrentValue(position.currentPrice, position.totalStocks)
        );
      case "stopLoss":
        return position.stopLoss;
      case "holdPeriod":
        const holdingPeriod = calculateHoldingPeriod(
          position.buyDate,
          position.sellDate,
          position.isDeleted
        );
        return (
          <HoldingPeriodBoxContainer>
            {Array.from({ length: holdingPeriod }, (_, index) => (
              <HoldingPeriodBox key={index}>
                <HoldingPeriodCount>{index + 1}</HoldingPeriodCount>
              </HoldingPeriodBox>
            ))}
          </HoldingPeriodBoxContainer>
        );
      case "notes":
        return parse(position.notes); // Parse and render the HTML content
      case "images":
        // Ensure position.images exists and is an array
        if (Array.isArray(position.images) && position.images.length > 0) {
          return (
            <>
              <ImageList>
                {position.images.map((image, index) => (
                  <ImageListItem key={index}>
                    <Image
                      src={`http://localhost:3041/images/${image}`}
                      alt={`Image ${index}`}
                      onClick={() => handleImageClick(image)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {modalOpen && (
                <PositionImageModal
                  onClose={closeModal}
                  images={position.images}
                >
                  <ModalContent>
                    <LargeImageContainer>
                      <LargeImage
                        src={`http://localhost:3041/images/${selectedImage}`}
                        alt={`Large Image`}
                      />
                    </LargeImageContainer>
                    <ImageList>
                      {position.images.map((image, index) => (
                        <ImageListItem key={index}>
                          <Image
                            src={`http://localhost:3041/images/${image}`}
                            alt={`Image ${index}`}
                            onClick={() => setSelectedImage(image)}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </ModalContent>
                </PositionImageModal>
              )}
            </>
          );
        } else {
          return null; // or handle case when no images are present
        }
      case "edit":
        return (
          <Button
            style={{ color: "#0424c9" }}
            onClick={() => {
              navigate(`/positions/edit/${position.id}`);
            }}
          >
            ✎
          </Button>
        );
      case "delete":
        return <Button onClick={handleDelete}>✖</Button>;
      case "view":
        return <Button onClick={onView}>👁</Button>;
      default:
        return null;
    }
  };

  return <Cell style={{ textAlign }}>{renderField()}</Cell>;
};

export default PositionItem;
