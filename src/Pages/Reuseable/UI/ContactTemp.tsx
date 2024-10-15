/** @format */

import { Link } from "react-router-dom";
import BoxesLeft from "../../../assets/conatct/BoxesLeft.svg";
import BoxesRight from "../../../assets/conatct/BoxesRight.svg";
import constactImg from "../../../assets/conatct/constactImg.png";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

function ContactTemp() {
  const [message, setMessage] = useState();
  let contactData = null;

  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
      // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });

  const BASE_URL = "http://89.38.135.41:9920/";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  if (!isLoading && pageDetails) {
    const aboutusPage = pageDetails.find(
      (page) => page.title === "Our core values"
    );
    if (aboutusPage) {
      const contactSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 2
      );
      if (contactSection) {
        contactData = contactSection.sub_sections.find(
          (subSection) => subSection.title === "contact"
        );
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white md:bg-transparent">
      <aside className="w-[60px] md:w-[80px] lg:w-[20%] mb-[2rem] lg:mb-0 md:flex hidden ">
        <img src={BoxesLeft} alt="" />
      </aside>

      <aside className="flex justify-center items-center flex-col text-center w-full lg:w-[50%] h-auto lg:h-[400px] px-[2rem] py-[2rem] md:py-0">
        <div className="w-[100px] lg:w-[20%] mb-[1rem] lg:mb-0">
          <img
            src={
              contactData?.content_blocks[0]?.image instanceof File
                ? URL.createObjectURL(contactData?.content_blocks[0]?.image)
                : getFullImageUrl(contactData?.content_blocks[0]?.image)
            }
            alt=""
          />
        </div>
        <div className="py-[1rem] lg:py-[2rem] text-sm md:text-base">
          {contactData?.content_blocks[0]?.title || ""}
        </div>
        <div>
          <Link
            to={"/contact"}
            className="bg-textColor flex w-fit items-center gap-2 text-white px-[1rem] lg:px-[2rem] py-[.5rem] lg:py-[.7rem] rounded-lg"
          >
            Learn More <GoArrowUpRight size={15} />
          </Link>
        </div>
      </aside>

      <aside className="w-[60px] md:w-[80px] lg:w-[20%] mt-[2rem] lg:mt-0 md:flex hidden justify-end items-end ">
        <img src={BoxesRight} alt="" />
      </aside>
    </div>
  );
}

export default ContactTemp;
