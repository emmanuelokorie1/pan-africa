import { Link } from "react-router-dom";
import BoxesLeft from "../../../assets/conatct/BoxesLeft.svg";
import BoxesRight from "../../../assets/conatct/BoxesRight.svg";
import constactImg from "../../../assets/conatct/constactImg.png";
import { GoArrowUpRight } from "react-icons/go";

function ContactTemp() {
  return (
    <div className="flex justify-between">
      <aside>
        <img src={BoxesLeft} alt="" />
      </aside>
      <aside className="flex justify-center items-center flex-col text-center w-[50%] h-[400px]">
        <div className="w-[20%]">
          <img src={constactImg} alt="" />
        </div>
        <div className="py-[2rem]">
          Get in touch with us via email, phone or social media to learn more
          about our products and services, our forward thinking approaches,
          innovation or to get support from our dedicated team of experts and
          more.
        </div>

        <div className="">
          <Link
            to={"contact"}
            className="bg-textColor flex w-fit items-center gap-2 text-white px-[2rem] py-[.7rem] rounded-lg"
          >
            Learn More{" "}
            <GoArrowUpRight size={15} />
            
          </Link>
        </div>
      </aside>
      <aside className="w-[20%] flex justify-end items-end">
        <img src={BoxesRight} alt="" />
      </aside>
    </div>
  );
}

export default ContactTemp;
