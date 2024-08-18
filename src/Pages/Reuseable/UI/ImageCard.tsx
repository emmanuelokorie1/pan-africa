import { Image, Skeleton } from "@arco-design/web-react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";

const imageSize = { width: "100%", height: "100%" };

interface customProps {
  image?: any;
  text?: string;
  link?: any;
}

const ImageCard: React.FC<customProps> = ({ image, text, link }) => {
  return (
    <Card>
      <div className="w-[100%] h-[500px]">
        <Image
          {...imageSize}
          src={image}
          alt=""
          preview={false}
          lazyload={{ threshold: 0.5 }}
          loader={
            <Skeleton image={{ style: imageSize }} text={false} animation />
          }
        />
      </div>

      <CardText>
        <div className="text-[0.8rem] sm:text-[0.9rem] h-[60px] sm:h-[75px] font-semibold">
          {text}
        </div>
        <Link
          to={link}
          className="cursor-pointer flex justify-end items-center gap-2 text-[0.7rem] sm:text-[0.8rem] mt-3"
        >
          <div>Learn more</div>
          <div>
            <GoArrowUpRight size={15} />
          </div>
        </Link>
      </CardText>
    </Card>
  );
};

export default ImageCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  @media (min-width: 640px) {
    height: 450px;
  }

  @media (min-width: 768px) {
    height: 500px;
    margin-bottom: 2rem;
  }
`;

const CardText = styled.div`
  position: absolute;
  top: 65%; /* Adjust the distance from the bottom */
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 1rem 1.5rem;
  background-color: white;
  box-shadow: 0px 0px 10px #6a6a6a;
  text-align: start;
  transition: transform 0.3s ease;
  border-radius: 0.4rem;

  ${Card}:hover & {
    transform: translate(-50%, -30px); /* Slide up the text on hover */
    background-color: #e75425;
    color: white;
  }

  @media (min-width: 640px) {
    width: 80%;
    padding: 1.3rem 2.5rem;
  }

  @media (min-width: 1024px) {
    top: 70%;
  }
`;
