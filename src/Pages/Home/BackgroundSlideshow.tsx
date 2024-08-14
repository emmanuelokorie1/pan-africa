import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import back1 from "../../assets/home/back1.svg";
import back2 from "../../assets/home/back2.svg";
import back3 from "../../assets/home/back3.svg";

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
  height: 100vh;
  overflow: hidden;
`;

// Common style for all images with zoom in and out effect
const ImageBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: ${({ isActive }) => (isActive ? 1 : -1)};
  animation: ${({ isExiting }) => (isExiting ? slideOutLeft : slideInRight)} 2s ease, ${zoomInOut} 10s ease-in-out infinite;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s;
`;

// Styled component for the first image
const ImageOne = styled(ImageBase)`
  background-image: url(${back1});
`;

// Styled component for the second image
const ImageTwo = styled(ImageBase)`
  background-image: url(${back2});
`;

// Styled component for the third image
const ImageThree = styled(ImageBase)`
  background-image: url(${back3});
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
  position: absolute;
  bottom: 40%;
  left: 5%;
  transform: translateX(0, -50%);
  color: white;
  font-size: 26px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 2; // Ensure the text is always on top
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s;
`;

const BackgroundSlideshow = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setActiveImage((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
        setIsExiting(false);
      }, 2000); // Wait for the slide-out animation to finish
    }, 12000); // Change image every 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      <ImageOne
        isActive={activeImage === 1}
        isExiting={isExiting && activeImage === 1}
      />
      <TextOverlay isActive={activeImage === 1}>
        <div className="text-[3.5rem]">
          Welcome to <span className="text-textColor">Pan African Towers</span>
        </div>
        <div className="w-[70%]">
          A telecommunications infrastructure and wireless service facilitator.
        </div>
      </TextOverlay>

      <ImageTwo
        isActive={activeImage === 2}
        isExiting={isExiting && activeImage === 2}
      />
      <TextOverlay isActive={activeImage === 2}>
        <div className="text-[3.5rem]">
          Re-writing the <span className="text-textColor">African</span>{" "}
          connectivity story
        </div>
        <div className="w-[70%]">
          We provide sustainable, dynamic and innovative infrastructure
          solutions and platforms to transform communities through technology in
          an efficient manner
        </div>
      </TextOverlay>

      <ImageThree
        isActive={activeImage === 3}
        isExiting={isExiting && activeImage === 3}
      />
      <TextOverlay isActive={activeImage === 3}>
        <div className="text-[3.5rem]">
          Cutting edge{" "}
          <span className="text-textColor">telecommunications</span> technology
        </div>
        <div className="w-[70%]">
          We aim to follow an unconventional approach by collaborating with
          partners in a new eco system to meet African data consumption needs.
        </div>
      </TextOverlay>
    </BackgroundContainer>
  );
};

export default BackgroundSlideshow;
