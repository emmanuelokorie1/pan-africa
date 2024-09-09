import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface ZoomImageProps {
  images: { url: string }[];
  text: React.ReactNode;
  icon?: any;
  header?: React.ReactNode;
  nums?: React.ReactNode;
}

// Zoom in and out animation
const zoomInOut = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Keyframes for sliding out to the left
const slideOutLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Keyframes for sliding in from the right
const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Container for the background images
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; // Ensure it covers the full viewport height
  overflow: hidden;
  background-color: #C07C63;
`;

// Common style for all images with zoom in and out effect
const ImageBase = styled.div<{
  isActive: boolean;
  isExiting: boolean;
  backgroundImage: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; // Ensure it fills the container
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  z-index: ${({ isActive }) => (isActive ? 1 : -1)};
  animation: ${({ isExiting }) => (isExiting ? slideOutLeft : slideInRight)} 2s
      ease,
    ${zoomInOut} 10s ease-in-out infinite;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s;
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  padding: 0 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); */
  z-index: 2;
  text-align: center;
`;

const ZoomImage: React.FC<ZoomImageProps> = ({
  images,
  text,
  icon,
  header,
  nums,
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
        setIsExiting(false);
      }, 2000); // Wait for the slide-out animation to finish
    }, 12000); // Change image every 12 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <BackgroundContainer>
      {images.map((image, index) => (
        <ImageBase
          key={index}
          backgroundImage={image.url}
          isActive={activeImage === index}
          isExiting={isExiting && activeImage === index}
        />
      ))}
      <TextOverlay>
        <div className="flex justify-center ">
          <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-[50%]">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="text-[1.5rem]" style={{fontFamily: 'semibold1'}}>{nums}</div>
        <div className="text-[1.5rem]" style={{fontFamily: 'semibold1'}}>{header}</div>
        <div className="text-[#FFFFFF] text-[.95rem]">{text}</div>
      </TextOverlay>{" "}
      {/* Static text */}
    </BackgroundContainer>
  );
};

export default ZoomImage;
