import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

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
        { name: "About Us", tab: "/who-are-we" },
        { name: "Career", tab: "/career" },
        { name: "News", tab: "/news" },
        { name: "ESG", tab: "/esg" },
        { name: "Core values", tab: "/our-core-values" },
        { name: "Our focus", tab: "/our-focus" },
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
    // {
    //   name: "Reach Us",
    //   minidata: [
    //     { name: "info@panafricantowers.com", icon: <MdEmail /> },
    //     { name: "234 808 110 1475", icon: <IoCall /> },
    //   ],
    // },
  ];

  const callData = [
    {
      name: "999c Danmole Street, Victoria Island Lagos",
      icon: <FaLocationDot />,
      gi: "location",
    },
    { name: "info@panafricantowers.com", icon: <MdEmail />, gi: "email" },
    { name: "234 808 110 1475", icon: <IoCall />, gi: "call" },
  ];

  return (
    <div className="bg-background text-white px-[2rem] md:px-[4rem] lg:px-[8rem] py-[2rem]">
      <section className="flex flex-col lg:flex-row gap-[1rem] items-start border-b border-[#694134] pb-[2rem]">
        <aside className="w-full lg:w-[55%]">
          <div className="text-[1.5rem] md:text-[2rem] font-semibold">
            Sign up for our newsletter
          </div>
          <div className="pt-[1rem] md:pt-[1.5rem] text-[.8rem] md:text-[.9rem]">
            Be the first to know about releases and industry news and insights.
          </div>
        </aside>
        <aside className="w-full lg:w-[45%] flex flex-col md:flex-row justify-center items-center gap-[1rem] mt-[1rem] lg:mt-0">
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full md:w-[300px] outline-none px-[1rem] py-[.7rem] rounded-lg text-gray-700"
            />
          </div>
          <div className=" px-[2rem] h-fit py-[.7rem] rounded-lg cursor-pointer text-center text-white font-bold bg-[rgba(255,255,255,0.4)]">
            Submit
          </div>
        </aside>
      </section>

      <section className="py-[2rem] flex flex-col lg:flex-row justify-between border-b border-[#694134]">
        <aside className="w-full lg:w-[40%] text-center lg:text-left">
          <NavLink to={"/"}>
            <div className="w-[80px] md:w-[100px] lg:w-[120px] mx-auto lg:mx-0">
              <img src={logo} alt="logo" className="w-[100%]" />
            </div>
          </NavLink>

          {/* <div className="py-[1.5rem] text-sm">
            999c Danmole Street, Victoria Island Lagos
          </div> */}

          <div className="pb-[2rem] pt-[1rem]">
            {callData?.map((e, i) => {
              return (
                <div key={i}>
                  <div>
                    {e?.gi === "email" ? (
                      <a
                        href={`mailto:${e?.name}`}
                        className="flex items-center gap-[.5rem] pt-[1rem] text-ellipsis overflow-hidden whitespace-normal break-words"
                      >
                        <span className="text-[1.3rem]">{e?.icon}</span>
                        <span className="break-keep">{e?.name}</span>
                      </a>
                    ) : e?.gi === "call" ? (
                      <a
                        href={`tel:+${e?.name}`}
                        className="flex items-center gap-[.5rem] pt-[1rem] text-ellipsis overflow-hidden whitespace-normal break-words"
                      >
                        <span className="text-[1.3rem]">{e?.icon}</span>
                        <span className="break-keep">{e?.name}</span>
                      </a>
                    ) : (
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=999c,+Water+Danmole+Street,+Victoria+Island,+Lagos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-[.5rem] pt-[1rem] text-ellipsis overflow-hidden whitespace-normal break-words"
                      >
                        <span className="text-[1.3rem]">{e?.icon}</span>
                        <span className="break-keep">{e?.name}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <FlexContainer className="justify-center lg:justify-start">
            {Source?.map((e: any, i: number) => {
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
        <aside className="w-full lg:w-[60%] mt-[2rem] lg:mt-0">
          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
          <div className=" flex justify-between gap-[1rem] flex-wrap">
            {tabs?.map((e: any, i: number) => {
              return (
                <div key={i} className="">
                  <div className="text-[#DED9C9] py-[.6rem] font-semibold">
                    {e?.name}
                  </div>
                  <div className="text-[.85rem]">
                    {e?.minidata?.map((item: any, i: number) => {
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
                                  <a
                                    href={`mailto:${item?.name}`}
                                    className="flex items-center gap-[.3rem] text-ellipsis overflow-hidden whitespace-normal break-words"
                                  >
                                    <span className="text-[1.5rem]">
                                      {item?.icon}
                                    </span>
                                    <span className="break-keep">
                                      {item?.name}
                                    </span>
                                  </a>
                                </div>
                              ) : (
                                <div>
                                  <a
                                    href={`tel:+${item?.name}`}
                                    className="flex items-center gap-[.3rem]"
                                  >
                                    <span className="text-[1.5rem]">
                                      {item?.icon}
                                    </span>{" "}
                                    +{item?.name}
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

      <section className="flex flex-col md:flex-row justify-between items-center pt-[1rem] text-[.8rem] md:text-[.9rem] text-center lg:text-left">
        <aside className="mb-[1rem] md:mb-0 flex">
          <div>
            Powered by <span className="text-textColor">Pan African tower</span>
          </div>
          <Link to={"/privacy"} className="underline md:hidden">
            Privacy Policy
          </Link>
        </aside>
        <aside className="flex flex-col md:flex-row gap-[1rem]">
          <Link to={"/privacy"} className="underline hidden md:block">
            Privacy Policy
          </Link>
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
