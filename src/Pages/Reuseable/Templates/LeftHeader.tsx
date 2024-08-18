import React from "react";

interface customProps {
  title?: String;
  text?: String;
  text2?: String;
  mt?: String;
  py?: String;
}

const LeftHeader: React.FC<customProps> = ({ title, text, text2, mt, py }) => {
  return (
    <div>
      <div
        className={`text-textColor border-l-[2px] border-textColor text-[1rem] sm:text-[1.1rem] ps-2 mt-[${
          mt || "1.5rem"
        }] sm:mt-[${mt || "2rem"}]`}
        style={{ fontFamily: "MediumItalic" }}
        data-aos="fade-up"
      >
        {title}
      </div>
      <div
        data-aos="fade-right"
        className={`text-[1.4rem] sm:text-[1.6rem] py-[${py || "1.5rem"}] sm:py-[${py || "2rem"}]`}
        style={{ fontFamily: "semibold1" }}
      >
        {text}
      </div>
      <div className="text-[0.9rem] sm:text-[1rem]">{text2}</div>
    </div>
  );
};

export default LeftHeader;
