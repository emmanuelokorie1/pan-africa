import { Link } from "react-router-dom";
import BoxesLeft from "../../../assets/conatct/BoxesLeft.svg";
import BoxesRight from "../../../assets/conatct/BoxesRight.svg";
import constactImg from "../../../assets/conatct/constactImg.png";
import { GoArrowUpRight } from "react-icons/go";

function ContactTemp() {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white md:bg-transparent">
      <aside className="w-[60px] md:w-[80px] lg:w-[20%] mb-[2rem] lg:mb-0 md:flex hidden ">
        <img src={BoxesLeft} alt="" />
      </aside>

      <aside className="flex justify-center items-center flex-col text-center w-full lg:w-[50%] h-auto lg:h-[400px] px-[2rem] py-[2rem] md:py-0">
        <div className="w-[100px] lg:w-[20%] mb-[1rem] lg:mb-0">
          <img src={constactImg} alt="" />
        </div>
        <div className="py-[1rem] lg:py-[2rem] text-sm md:text-base">
          Get in touch with us via email, phone, or social media to learn more
          about our products and services, our forward-thinking approaches,
          innovation, or to get support from our dedicated team of experts and
          more.
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
