import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Footer() {
  const Source = [
    { icon: <FaFacebookF size={15} />, url: "" },
    { icon: <RiTwitterXFill />, url: "" },
    { icon: <FaLinkedinIn />, url: "" },
  ];

  const tabs = [
    {
      name: "Company",
      minidata: [
        { name: "About Us", tab: "about-us" },
        { name: "Career", tab: "career" },
        { name: "News", tab: "news" },
        { name: "EGS", tab: "egs" },
        { name: "Core values", tab: "our-core-values" },
        { name: "Our focus", tab: "our-focus" },
      ],
    },
    {
      name: "Solutions",
      minidata: [
        { name: "DAS Solution", tab: "" },
        { name: "Co-location", tab: "" },
        { name: "Site leasing", tab: "" },
        { name: "Green energy", tab: "" },
        { name: "Built to suit", tab: "" },
        { name: "Broadband", tab: "" },
      ],
    },
    {
      name: "Services",
      minidata: [
        { name: "Core services", tab: "core-services" },
        { name: "Value added services", tab: "value-added-services" },
      ],
    },
    {
      name: "Reach Us",
      minidata: [
        { name: "info@panafricantowers.com", icon: <MdEmail /> },
        { name: "234 (01) 462 37827", icon: <IoCall /> },
        { name: "234 (0) 803 528 3267", icon: <IoCall /> },
      ],
    },
  ];

  return (
    <div className="bg-background text-white px-[8rem] py-[2rem]">
      <section className="flex gap-[1rem] items-start border-b border-[#694134] pb-[2rem]">
        <aside className="w-[55%]">
          <div className="text-[2rem] font-semibold">
            Sign up for our newsletter
          </div>
          <div className="pt-[1.5rem] text-[.8rem]">
            Be the first to know about releases and industry news and insights.
            Be the first to know about releases and industry news and insights.
            Be the first to know about releases and industry news and insights.
          </div>
        </aside>
        <aside className="w-[45%] flex justify-center items-center gap-[1rem]">
          <div>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[300px] outline-none px-[1rem] py-[.7rem] rounded-lg text-gray-700"
            />
          </div>
          <div className="bg-textColor px-[2rem] h-fit py-[.7rem] rounded-lg cursor-pointer ">
            Submit
          </div>
        </aside>
      </section>

      <section className="py-[2rem] flex justify-between border-b border-[#694134]">
        <aside className="w-[35%]">
          <NavLink to={"/"}>
            <div className="w-[120px]">
              {" "}
              <img src={logo} alt="logo" className="w-[100%]" />
            </div>
          </NavLink>

          <div className="py-[2rem]">
            23, Water Corporation Drive, Victoria Island, Lagos
          </div>

          <FlexContainer>
            {Source?.map((e, i) => {
              return (
                <IconContainer key={i}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.icon}
                  </a>
                </IconContainer>
              );
            })}
          </FlexContainer>
        </aside>
        <aside className="w-[65%]">
          <div className="flex justify-between">
            {tabs?.map((e, i) => {
              return (
                <div key={i}>
                  <div className="text-textColor">{e?.name}</div>
                  <div className="text-[.85rem] ">
                    {e?.minidata?.map((item, i) => {
                      return (
                        <div key={i} className="py-[.3rem]">
                          {"tab" in item ? (
                            <div>
                              <NavLink to={item?.tab}>{item?.name}</NavLink>
                            </div>
                          ) : (
                            <div>
                              {item?.name.includes("@") ? (
                                <div>
                                  <a href={`mailto:${item?.name}`} className="flex items-center gap-[.3rem]">
                                    <span className="text-[1.5rem]">{item?.icon}</span>
                                    {item?.name}
                                  </a>
                                </div>
                              ) : (
                                <div>
                                  <a href={`tel:+${item?.name}`} className="flex items-center gap-[.3rem]">
                                    <span className="text-[1.5rem]">{item?.icon}</span> +{item?.name}
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </section>

      <section className="flex justify-between pt-[1rem] text-[.9rem]">
        <aside>
          <div>
            Powered by <span className="text-textColor">Pan African tower</span>
          </div>
        </aside>
        <aside className="flex gap-[1rem]">
          <div className="underline">Privacy Policy</div>
          <div>
            <span className="font-semibold">© 2024 Pan African tower.</span> All
            rights reserved
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Footer;


const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 10;
  width: 35px;
  height: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
`;
