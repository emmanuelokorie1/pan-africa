import { Image, Skeleton } from "@arco-design/web-react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
const imageSize = { width: 380, height: 500 };

interface customProps {
  image?: any;
  text?: string;
  link?: any;
}

const ImageCard: React.FC<customProps> = ({ image, text, link }) => {
  return (
    <Card>
      {/* <CardImage src={image} alt="Card" /> */}
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

      <CardText>
        <div className=" text-[.9rem] h-[75px] font-semibold">{text}</div>
        <Link to={link} className=" cursor-pointer flex justify-end items-center gap-2 text-[.8rem] mt-3">
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
  height: 500px;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

const CardText = styled.div`
  position: absolute;
  top: 70%; /* Adjust the distance from the bottom */
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  padding: 1.3rem 2.5rem;
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
`;
