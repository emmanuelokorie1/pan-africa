import React from "react";

interface customProps {
  title: String;
  text: String;
}

const CenteredHeader: React.FC<customProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div
        className="text-textColor border-l-[2px] border-textColor text-[1.1rem] ps-2 mt-[2rem]"
        style={{ fontFamily: "MediumItalic" }}
      >
        {title}
      </div>

      <div className="text-[#3F3F3F] w-[70%] py-[1rem]">
          {text}
        </div>
    </div>
  );
};

export default CenteredHeader;
