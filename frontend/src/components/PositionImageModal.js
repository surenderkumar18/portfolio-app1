import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100%" : "80%")};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "100%" : "80%")};
  overflow: hidden;
  display: flex;
  border: 1px solid #ccc;
  position: relative;
`;

const LargeImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ThumbnailList = styled.div`
  flex: 0 0 120px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  margin-bottom: 5px;
  border: ${({ isSelected }) =>
    isSelected ? "2px solid #007BFF" : "1px solid #ddd"};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 0 10px rgba(0, 123, 255, 0.5)" : "none"};
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 38px;
  background-color: #ccc;
  padding: 0px 11px;
  color: #333;
`;

const ZoomButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const PositionImageModal = ({ onClose, images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleKeyDown = (e) => {
    if (images.length === 0) return;

    let index = images.indexOf(selectedImage);
    switch (e.key) {
      case "ArrowLeft":
        index = index > 0 ? index - 1 : images.length - 1;
        break;
      case "ArrowRight":
        index = index < images.length - 1 ? index + 1 : 0;
        break;
      default:
        return;
    }
    setSelectedImage(images[index]);
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, images]);

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent
        isFullScreen={isFullScreen}
        onClick={(e) => e.stopPropagation()}
      >
        <ZoomButton onClick={toggleFullScreen}>
          {isFullScreen ? <span>&#x1F501;</span> : <span>&#x1F50D;</span>}
        </ZoomButton>
        <ThumbnailList>
          {images.map((image, index) => (
            <ThumbnailImage
              key={index}
              src={`http://localhost:3041/images/${image}`}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(image)}
              isSelected={selectedImage === image}
            />
          ))}
        </ThumbnailList>
        <LargeImageContainer>
          <LargeImage
            src={`http://localhost:3041/images/${selectedImage}`}
            alt='Large Image'
          />
        </LargeImageContainer>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default PositionImageModal;
