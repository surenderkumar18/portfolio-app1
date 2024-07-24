// src/components/PositionModal.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
`;

const CloseButton = styled.button`
  background: #dc2626;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #b91c1c;
  }
`;

const PositionModal = ({ position, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h1>{position.stockName}</h1>
        <p>Stock Symbol: {position.stockSymbol}</p>
        <p>Buy Price: {position.buyPrice}</p>
        <p>Sell Price: {position.sellPrice}</p>
        <p>Current Price: {position.currentPrice}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PositionModal;
