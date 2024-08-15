import React from "react";
import img2 from "../../../assets/home/whoarewe.svg";
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { Image, Skeleton } from "@arco-design/web-react";

interface customProps {
  title?: String;
  headerText?: String;
  text?: String;
  text2?: String;
  link?: any;
  img?: any;

  text1Head?: String;
  text2Head?: String;
  prevtext?: String;
}

const imageSize = { width: 420, height: 500 };

const ImageAndTextGrid: React.FC<customProps> = ({
  img,
  title,
  headerText,
  text,
  text2,
  link,
  text1Head,
  text2Head,
  prevtext,
}) => {
  return (
    <div className="flex gap-[2rem] justify-between p-[5rem]">
      <div className="w-[40%]">
        {/* <img src={img || img2} alt="" /> */}
        <Image
          {...imageSize}
          // className="h-[100%]"
          src={img || img2}
          alt=""
          preview={false}
          lazyload={{ threshold: 0.5 }}
          loader={
            <Skeleton
              image={{ style: imageSize }}
              // className="h-[100%]"
              text={false}
              animation
            />
          }
        />
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

        {prevtext && <div className="text-[#3F3F3F] pb-[2rem]">{prevtext}</div>}

        {text1Head && (
          <div
            style={{ fontFamily: "semibold1" }}
            className="flex items-center gap-[.1rem]"
          >
            <div className="text-textColor">
              <GoDot width={70} size={22} />
            </div>
            <div className="text-[1.2rem">{text1Head}</div>
          </div>
        )}

        <div className="text-[#3F3F3F]">{text}</div>

        {text2Head && (
          <div
            style={{ fontFamily: "semibold1" }}
            className="flex items-center gap-[.1rem] mt-[1rem]"
          >
            <div className="text-textColor">
              <GoDot width={70} size={22} />
            </div>
            <div className="text-[1.2rem">{text2Head}</div>
          </div>
        )}

        <div
          className="text-[#3F3F3F]"
          style={{ marginTop: text2Head === "" ? "1rem" : undefined }}
        >
          {text2}
        </div>

        {link && (
          <div className=" mt-[4rem]">
            <Link
              to={link || "who-are-we"}
              className="bg-textColor text-white px-[2rem] py-[.7rem] rounded-lg"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAndTextGrid;
