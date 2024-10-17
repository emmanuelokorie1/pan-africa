/** @format */

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import back1 from "../../assets/home/back1.png";
import back2 from "../../assets/home/back2.png";
import back3 from "../../assets/home/back3.png";
import { useQuery } from "react-query";
import { getAllPages } from "../../lib/apiServices";

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
  height: 80vh;
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
  animation: ${({ isExiting }) => (isExiting ? slideOutLeft : slideInRight)} 2s
      ease,
    ${zoomInOut} 7s ease-in-out infinite;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s;
  background-color: ${({ isLoading }) =>
    isLoading
      ? "#DED9C9"
      : "transparent"}; /* Apply black background when loading */
`;

// Styled component for the first image
const ImageOne = styled(ImageBase)``;

// Styled component for the second image
const ImageTwo = styled(ImageBase)``;

// Styled component for the third image
const ImageThree = styled(ImageBase)``;

// Styled component for the text overlay
const TextOverlay = styled.div`
  position: absolute;
  bottom: 40%;
  left: 8%;
  transform: translateX(0, -50%);
  font-family: semibold1;
  color: white;
  font-size: 26px;
  z-index: 2; // Ensure the text is always on top
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s;

  .text-large {
    font-family: bold1;
  }
  .text-large span {
    font-family: bold1;
  }

  // Media queries for responsive design
  @media (max-width: 768px) {
    font-size: 20px;
    bottom: 35%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    bottom: 30%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }

  .text-large {
    font-size: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }

    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }

  .text-small {
    width: 70%;

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 14px;
    }
  }
`;

const BackgroundSlideshow = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [loading, setLoading] = useState({ 1: true, 2: true, 3: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setActiveImage((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
        setIsExiting(false);
      }, 1500); // Wait for the slide-out animation to finish
    }, 7000); // Change image every 12 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index) => {
    setLoading((prev) => ({ ...prev, [index]: false }));
  };

  const BASE_URL = "http://89.38.135.41:9920";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
      // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });
  let heroData = null;
  let heroData1 = null;
  let heroData2 = null;

  if (!isLoading && pageDetails) {
    const homePage = pageDetails.find((page) => page.title === "Home");

    if (homePage) {
      heroData = homePage.heroes[0];
      const heroSection = homePage.sections.find(
        (section) => section.title === "Header" && section.id === 45
      );
      if (heroSection) {
        heroData1 = heroSection.sub_sections.find(
          (subSection) => subSection.title === "Re-writing the"
        );
        heroData2 = heroSection.sub_sections.find(
          (subSection) => subSection.title === "Cutting edge"
        );
      }
    }
  }
  return (
    <BackgroundContainer className="h-[100vh] 2xl:h-[40vh]">
      <ImageOne
        isActive={activeImage === 1}
        isExiting={isExiting && activeImage === 1}
        style={{
          backgroundImage: `url(${
            heroData?.image instanceof File
              ? URL.createObjectURL(heroData?.image)
              : getFullImageUrl(heroData?.image)
          })`,
        }}
        isLoading={loading[1]}
      />
      <img
        src={
          heroData?.image instanceof File
            ? URL.createObjectURL(heroData?.image)
            : getFullImageUrl(heroData?.image)
        }
        alt="background 1"
        style={{ display: "none" }}
        onLoad={() => handleImageLoad(1)}
      />
      <TextOverlay isActive={activeImage === 1}>
        <div className="text-large">
          {heroData?.title}{" "}
          <span className="text-textColor">{heroData?.subtitle}</span>
        </div>
        <div className="text-small">{heroData?.description}</div>
      </TextOverlay>

      <ImageTwo
        isActive={activeImage === 2}
        isExiting={isExiting && activeImage === 2}
        style={{
          backgroundImage: `url(${
            heroData1?.content_blocks[0]?.image instanceof File
              ? URL.createObjectURL(heroData1?.content_blocks[0]?.image)
              : getFullImageUrl(heroData1?.content_blocks[0]?.image)
          })`,
        }}
        isLoading={loading[2]}
      />
      <img
        src={            heroData1?.content_blocks[0]?.image instanceof File
          ? URL.createObjectURL(heroData1?.content_blocks[0]?.image)
          : getFullImageUrl(heroData1?.content_blocks[0]?.image)
}
        alt="background 2"
        style={{ display: "none" }}
        onLoad={() => handleImageLoad(2)}
      />
      <TextOverlay isActive={activeImage === 2}>
        <div className="text-large">
          {heroData1?.title}{" "}
          <span className="text-textColor">
            {heroData1?.content_blocks[0]?.title}
          </span>{" "}
          {heroData1?.content_blocks[0]?.subtitle}{" "}
        </div>
        <div className="text-small">
          {heroData1?.content_blocks[0]?.description}{" "}
        </div>
      </TextOverlay>

      <ImageThree
        isActive={activeImage === 3}
        isExiting={isExiting && activeImage === 3}
        style={{ backgroundImage: `url(${
          heroData2?.content_blocks[0]?.image instanceof File
          ? URL.createObjectURL(heroData2?.content_blocks[0]?.image)
          : getFullImageUrl(heroData2?.content_blocks[0]?.image)

        })` }}
        isLoading={loading[3]}
      />
      <img
        src={           
          
           heroData2?.content_blocks[0]?.image instanceof File
          ? URL.createObjectURL(heroData2?.content_blocks[0]?.image)
          : getFullImageUrl(heroData2?.content_blocks[0]?.image)
}
        alt="background 3"
        style={{ display: "none" }}
        onLoad={() => handleImageLoad(3)}
      />
      <TextOverlay isActive={activeImage === 3}>
        <div className="text-large">
        {heroData2?.title}{" "}
          <span className="text-textColor">            {heroData2?.content_blocks[0]?.title}          </span>           {heroData1?.content_blocks[0]?.subtitle}{" "}

        </div>
        <div className="text-small">
        {heroData2?.content_blocks[0]?.description}{" "}
        </div>
      </TextOverlay>
    </BackgroundContainer>
  );
};

export default BackgroundSlideshow;
