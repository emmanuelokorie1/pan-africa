import React from "react";
import img2 from "../../../assets/home/whoarewe.svg";
import { Link } from "react-router-dom";

interface customProps {
  title?: String;
  headerText?: String;
  text?: String;
  text2?: String;
  img?: any;
}

const ImageAndTextGrid: React.FC<customProps> = ({img, title, headerText, text, text2 }) => {
  return (
    <div className="flex gap-[2rem] justify-between p-[5rem]">
      <div className="w-[40%]">
        <img src={img || img2} alt="" />
      </div>
      <div className="w-[55%]">
        <div
          className="text-textColor border-l-[2px] border-textColor text-[1.1rem] ps-2 mt-[2rem]"
          style={{ fontFamily: "MediumItalic" }}
        >
          {title}
        </div>

        <div
          className="text-[1.6rem] py-[2rem]"
          style={{ fontFamily: "semibold1" }}
        >
          {headerText}
        </div>

        <div className="text-[#3F3F3F]">
          {text}
        </div>

        <div className="text-[#3F3F3F] mt-[1rem]">
          {text2}
        </div>

        <div className=" mt-[4rem]">
          <Link
            to={"who-are-we"}
            className="bg-textColor text-white px-[2rem] py-[.7rem] rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageAndTextGrid;
