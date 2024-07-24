import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import PositionImageModal from "./PositionImageModal"; // Assuming you have a Modal component
import parse from "html-react-parser"; // Import the html-react-parser library

const BoldCell = styled.div`
  font-weight: bold;
`;
const TextCenterCell = styled.div`
  text-align: center;
`;
const TextRightCell = styled.div`
  text-align: right;
`;

const Cell = styled.td`
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: normal;
  padding: 0.4rem 0.8rem;
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

const formatDate = (date) => {
  if (!date) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
};

const calculateProfitLossPercentage = (buyPrice, currentPrice) => {
  const profitLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
  return profitLoss.toFixed(2);
};

const getProfitLossColor = (profitLoss) => {
  if (profitLoss > 20) return "darkgreen";
  if (profitLoss > 10) return "lightgreen";
  if (profitLoss >= 0) return "green";
  if (profitLoss > -10) return "lightcoral";
  if (profitLoss > -20) return "indianred";
  return "darkred";
};

const calculateInvestmentAmount = (buyPrice, totalStocks) => {
  return (buyPrice * totalStocks).toFixed(2);
};

const calculateCurrentValue = (currentPrice, totalStocks) => {
  return (currentPrice * totalStocks).toFixed(2);
};

const calculateHoldingPeriod = (buyDate) => {
  const buy = new Date(buyDate);
  const today = new Date();
  const diffTime = Math.abs(today - buy);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
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
        return position.buyPrice;
      case "sellPrice":
        return position.sellPrice;
      case "currentPrice":
        return position.currentPrice;
      case "profitLossPercentage":
        const profitLoss = calculateProfitLossPercentage(
          position.buyPrice,
          position.currentPrice
        );
        return (
          <BoldCell>
            <span style={{ color: getProfitLossColor(profitLoss) }}>
              {profitLoss >= 0 ? `+${profitLoss}%` : `${profitLoss}%`}
            </span>
          </BoldCell>
        );
      case "totalStocks":
        return position.totalStocks;
      case "investmentAmount":
        return calculateInvestmentAmount(
          position.buyPrice,
          position.totalStocks
        );
      case "currentValue":
        return calculateCurrentValue(
          position.currentPrice,
          position.totalStocks
        );
      case "stopLoss":
        return <TextCenterCell>{position.stopLoss}</TextCenterCell>;
      case "holdPeriod":
        return calculateHoldingPeriod(position.buyDate);
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
