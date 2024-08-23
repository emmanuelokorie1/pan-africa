import React from "react";
import img2 from "../../../assets/home/whoarewe.png";
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { Image, Skeleton } from "@arco-design/web-react";

interface customProps {
  title?: String;
  headerText?: String;
  text?: String;
  text2?: String;
  text1Head?: String;
  text2Head?: String;
  prevtext?: String;
  link?: any;
  img?: any;
}

const imageSize = { width: "100%", height: "100%" };

const ImageAndGridTextRight: React.FC<customProps> = ({
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
    <div  className="flex flex-col lg:flex-row py-[2rem] gap-[2rem] justify-between items-center containers">
      <div className="w-full lg:w-[55%]" data-aos="fade-right">
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
              to={link}
              className="bg-textColor text-white px-[2rem] py-[.7rem] rounded-lg"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>

      <div className="w-full lg:w-[40%] flex justify-center items-center">
        <div
          className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[420px]"
          data-aos="fade-up"
        >
          {/* <img src={img || img2} alt="" className="h-[100%]" /> */}
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
      </div>
    </div>
  );
};

export default ImageAndGridTextRight;
