import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/focus.svg";
import focus1 from "../../../assets/focus/focus1.svg";
import focus2 from "../../../assets/focus/focus2.svg";
import focus3 from "../../../assets/focus/focus3.svg";
import { useEffect, useState } from "react";

import towericon from "../../../assets/focus/path/towericon.svg";
import infraicon from "../../../assets/focus/path/infraicon.svg";
import powericon from "../../../assets/focus/path/powericon.svg";

import tower from "../../../assets/focus/path/tower.svg";
import infra from "../../../assets/focus/path/infra.svg";
import power from "../../../assets/focus/path/power.svg";
import ContactTemp from "../../Reuseable/UI/ContactTemp";
import { Image, Skeleton } from "@arco-design/web-react";

interface Tab {
  name: string;
  icon: string;
  img: any;
}

function OurFocus() {
  const focus = [
    {
      img: focus1,
      num: "01.",
      name: "Our Aspiration",
      text: "We look to provide solutions and platforms that transform local communities",
    },
    {
      img: focus2,
      num: "02.",
      name: "Our Services",
      text: "Core Services include: Colocation, Built-to-suit, Buy-lease-back, Managed services and DAS solutions Our Value Added Services include: Broadband, Utility, Content and Support",
    },
    {
      img: focus3,
      num: "03.",
      name: "Our Goal",
      text: "To become a truly African focused infrastructure company with services that enable businesses succeed in communities where we operate",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs: Tab[] = [
    {
      name: "TowerCo",
      icon: towericon,
      img: tower,
    },
    {
      name: "InfraCo",
      icon: infraicon,
      img: infra,
    },
    {
      name: "PowerCo",
      icon: powericon,
      img: power,
    },
  ];

  const imageSize = { width: "100%", height: "100%" };

  const [tabValue, setTabValue] = useState("TowerCo");
  return (
    <section>
      <div>
        <HeaderNav
          title={"Our focus"}
          headerText={
            "We are Passionate about Africa and we exist to rewrite thee African connectivity story."
          }
          text={
            "At Pan African Towers, our focus is to connect people, businesses, and communities through innovative and reliable telecommunications solutions. We believe in the power of communication to transform lives and drive progress. Our mission is to provide seamless connectivity and exceptional service, ensuring that our customers can stay connected anytime, anywhere."
          }
          Img={Img}
        />
      </div>

      <div className=" s1100:px-[2rem] xl:px-[4rem] py-[2rem] md:py-[3rem]">
        <div className="grid grid-cols-1 px-[2rem] sm:px-0 sm:grid-cols-2 s1100:grid-cols-3 containers gap-[1.5rem] md:gap-[3rem] rounded-sm h-auto s1100:h-[430px]">
          {focus?.map((e, i) => {
            return (
              <div key={i} className="bg-white p-[1rem] md:p-[2rem]">
                <div className="text-end text-textColor text-[1.5rem]">
                  {e?.num}
                </div>
                <div className="flex justify-center py-[1.5rem] md:py-[2rem]">
                  <img src={e?.img} alt="" />
                </div>
                <div className="text-center">
                  <div
                    className="text-[1rem] md:text-[1.1rem]"
                    style={{ fontFamily: "semibold1" }}
                  >
                    {e?.name}
                  </div>
                  <div className="text-gray-500 py-[1rem] text-[.9rem] md:text-[.95rem]">
                    {e?.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-[4rem] containers">
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#FDF5F2] shadow-sm rounded-lg">
          {tabs?.map((e, i) => {
            return (
              <div key={i}>
                <div
                  className={`flex justify-center items-center py-[1rem] gap-[.6rem] text-[1.1rem] transition-all rounded-lg`}
                  style={{
                    background: tabValue === e?.name ? "#E75425" : "",
                    cursor: tabValue === e?.name ? "default" : "pointer",
                    color: tabValue === e?.name ? "white" : "#E75425",
                  }}
                  onClick={() => setTabValue(e?.name)}
                >
                  <div style={{ opacity: tabValue === e?.name ? "1" : "0" }}>
                    <img src={e?.icon} alt="" />
                  </div>

                  <div className="">{e?.name}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {tabs?.map((e, i) => {
            return (
              <div key={i}>
                <div className="">
                  {tabValue === e?.name && (
                    <div className="flex flex-col lg:flex-row justify-between h-auto lg:h-[600px]">
                      <aside className="w-full lg:w-[50%] mt-[2rem] lg:mt-[7rem]">
                        <div
                          className="text-textColor border-l-[2px] border-textColor text-[1.1rem] ps-2 mt-[2rem]"
                          style={{ fontFamily: "MediumItalic" }}
                        >
                          PAT Strategy
                        </div>
                        <div
                          className="text-[1.3rem] text-black pe-[2rem] py-[1rem]"
                          style={{ fontFamily: "semibold1" }}
                        >
                          Grow Towers, Position for Data Demands and Bridge the
                          Power Gap
                        </div>
                        <div>
                          <div className="text-gray-600 text-[.9rem]">
                            <div className="py-[1rem]">
                              We provide sustainable, dynamic & innovative
                              infrastructure solutions and platforms to
                              transform communities through technology in an
                              efficient manner.
                            </div>
                            <div>
                              Our telecommunications strategy is designed to
                              provide exceptional connectivity solutions that
                              empower our customers and drive technological
                              advancement. Our strategy focuses on innovation,
                              reliability, customer satisfaction, and
                              sustainability, ensuring we meet the growing
                              demands of a digitally connected world.
                            </div>
                          </div>
                        </div>
                      </aside>
                      <aside className="flex justify-center lg:justify-end items-center w-full lg:w-[50%]">
                        <div className="w-[300px] md:w-[450px]">
                          <Image
                            {...imageSize}
                            src={e?.img}
                            alt=""
                            preview={false}
                            lazyload={{ threshold: 0.5 }}
                            loader={
                              <Skeleton
                                image={{ style: imageSize }}
                                text={false}
                                animation
                              />
                            }
                          />
                        </div>
                      </aside>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <ContactTemp />
      </div>
    </section>
  );
}

export default OurFocus;
