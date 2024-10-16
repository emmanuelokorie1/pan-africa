import React from "react";

interface customProps {
  title: String;
  text: String;
}

const CenteredHeader: React.FC<customProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-[1rem] sm:px-[2rem]">
      <div
        data-aos="fade-up"
        className="text-textColor border-l-[2px] border-textColor text-[1rem] sm:text-[1.1rem] ps-2 mt-[1.5rem] sm:mt-[2rem]"
        style={{ fontFamily: "MediumItalic" }}
      >
        {title}
      </div>

      <div
        className="text-[#3F3F3F] w-full sm:w-[70%] py-[1rem]"
        data-aos="fade-right"
      >
        {text}
      </div>
    </div>
  );
};

export default CenteredHeader;
