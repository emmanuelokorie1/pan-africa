import React from "react";
import box from "../../../assets/career/Box.png";
import { BsDot } from "react-icons/bs";

interface customProps {
  category?: string;
  location?: string;
  jobType?: string;
  description?: string;
  header?: string;
  link?: string;
  linkName?: string;
}

const OpenRoleTemplate: React.FC<customProps> = ({
  category,
  location,
  jobType,
  description,
  header,
  link,
  linkName,
}) => {
  return (
    <div className="flex justify-between relative items-center rounded-[.4rem] overflow-hidden bg-white p-[2rem]">
      <div className="w-[65%]">
        <div
          className="text-gray-700 text-[1.3rem]"
          style={{ fontFamily: "bold1" }}
        >
          {header}
        </div>
        <div className="text-gray-600 text-[1.05rem] py-5">{description}</div>
        <div className="flex items-center gap-2 text-[.9rem] text-gray-600">
          <div style={{ fontFamily: "bold1" }}>{category}</div>
          <div>
            <BsDot size={25} />
          </div>
          <div style={{ fontFamily: "bold1" }}>{location}</div>
          <div>
            <BsDot size={25} />
          </div>
          <div style={{ fontFamily: "bold1" }}>{jobType}</div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[30%] h-[100%] ">
        {link && (
          <div className="z-50">
            <a
              href={link}
              className="bg-textColor text-white px-[2rem] py-[.7rem] rounded-lg cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkName || "Apply here"}
            </a>
          </div>
        )}
        <div className="absolute top-0 w-[270px] right-0">
          <img src={box} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default OpenRoleTemplate;
