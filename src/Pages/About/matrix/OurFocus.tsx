import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/focus.png";
import focus1 from "../../../assets/focus/focus1.png";
import focus2 from "../../../assets/focus/focus2.png";
import focus3 from "../../../assets/focus/focus3.png";
import focus4 from "../../../assets/focus/focus4.png";
import { useEffect, useState } from "react";

import towericon from "../../../assets/focus/path/towericon.svg";
import infraicon from "../../../assets/focus/path/infraicon.svg";
import powericon from "../../../assets/focus/path/powericon.svg";

import tower from "../../../assets/focus/path/tower.png";
import infra from "../../../assets/focus/path/infra.png";
import power from "../../../assets/focus/path/power.png";
import ContactTemp from "../../Reuseable/UI/ContactTemp";
import { Image, Skeleton } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";
import LeftHeader from "../../Reuseable/Templates/LeftHeader";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

interface Tab {
  name: string;
  icon: string;
  img: any;
}

function OurFocus() {
  const [message , setMessage] = useState()
  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
            // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });
  
  let heroData = null; 
  // let focus = [];
  let patStrategyData  = null;

  const BASE_URL = "http://89.38.135.41:9920";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };
  
  if (!isLoading && pageDetails) {
    const aboutusPage = pageDetails.find((page) => page.title === "Our focus");
    if (aboutusPage) {
      heroData = aboutusPage.heroes[0];
      const subNavs = aboutusPage.sub_navs || [];
      // tabs = subNavs.flatMap((subNav) => {
      //   return subNav.nav_sections.flatMap((navSection) => {
      //     return navSection.nav_items.map((navItem) => ({
      //       name: navSection.title,
      //       title: navItem.title,
      //       text: navItem.subtitle || "",
      //       img: getFullImageUrl(navItem.image || ""),
      //       desc: navItem.description || "",
      //       btn: "main_btn",
      //     }));
      //   });
      // });
  
  
      const patStrategySection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 32
      );
      if (patStrategySection) {
        patStrategyData = patStrategySection.sub_sections.find(
          (subSection) => subSection.title === "PAT Strategy"
        );
      }
    }
  }
  const focus = [
    {
      img: focus1,
      num: "01.",
      name: "Increase in Uptime",
      text: "From c.95% to c. 99.2% thanks to several operational improvements",
    },
    {
      img: focus2,
      num: "02.",
      name: "Partial Contracts Renegotiations",
      text: "Resulting in more favorable terms for PAT. Further improvements are currently under negotiations",
    },
    {
      img: focus3,
      num: "03.",
      name: "Strengthening of Management team",
      text: "Onboarding of CFO, deputy CTO & Head of Operations, and CIO",
    },
    {
      img: focus4,
      num: "04.",
      name: "Grid connectivity",
      text: "For 150 sites in Lagos resulting in 2.4 million litres of diesel saved /year",
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const tabs: Tab[] = [
    {
      name: "TowerCo",
      icon: towericon,
      img: power,
      // img: tower,
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
          // title={"Our focus"}
          title={heroData?.title}

          headerText={
            // "We are Passionate about Africa and we exist to rewrite the African connectivity story."
            heroData?.subtitle

          }
          text={
            // "At Pan African Towers, our focus is to connect people, businesses, and communities through innovative and reliable telecommunications solutions. We believe in the power of communication to transform lives and drive progress. Our mission is to provide seamless connectivity and exceptional service, ensuring that our customers can stay connected anytime, anywhere."
            heroData?.description

          }
          // Img={Img}
          Img={ heroData?.image instanceof File
            ? URL.createObjectURL(heroData?.image)
            : getFullImageUrl(heroData?.image)
}

        />
      </div>

      <div className=" s1100:px-[2rem] xl:px-[4rem] py-[2rem] md:py-[3rem]">


      <div className="md:w-[55%] w-[100%] ">
        <LeftHeader
          title={"PAT Achievements"}
          text={
            "Our Achievements"
          }
        />
      </div>

        <div className="grid grid-cols-1 px-[1rem] sm:px-0 sm:grid-cols-2 s1100:grid-cols-4 containers gap-[1rem] md:gap-[2rem] h-auto s1100:h-[430px]">
          {focus?.map((e, i) => {
            return (
              <div key={i} className="bg-white rounded-md p-[1rem] md:p-[1.5rem]">
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#FDF5F2] shadow-sm rounded-lg">
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
        </div> */}

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
                          {/* PAT Strategy */}
                          {patStrategyData?.title || ""}
                        </div>
                        <div
                          className="text-[1.3rem] text-black pe-[2rem] py-[1rem]"
                          style={{ fontFamily: "semibold1" }}
                        >
                          {/* Grow Towers, Position for Data Demands and Bridge the
                          Power Gap */}
                          {patStrategyData?.content_blocks[0]?.title || ""                          }
                        </div>
                        <div>
                          <div className="text-gray-600 text-[.9rem]">
                            <div className="py-[1rem]">
                              {/* We provide sustainable, dynamic & innovative
                              infrastructure solutions and platforms to
                              transform communities through technology in an
                              efficient manner. */}
                             {patStrategyData?.content_blocks[0]?.subtitle || ""                          }

                            </div>
                            <div>
                              {/* Our telecommunications strategy is designed to
                              provide exceptional connectivity solutions that
                              empower our customers and drive technological
                              advancement. Our strategy focuses on innovation,
                              reliability, customer satisfaction, and
                              sustainability, ensuring we meet the growing
                              demands of a digitally connected world. */}

                              {patStrategyData?.content_blocks[0]?.description || "" }
                            </div>
                          </div>
                        </div>
                      </aside>
                      <aside className="flex justify-center lg:justify-end items-center w-full lg:w-[50%]">
                        <div className="w-[300px] md:w-[450px]">
                          <Image
                            {...imageSize}
                            src={ patStrategyData?.content_blocks[0]?.image instanceof File
                              ? URL.createObjectURL(
                                patStrategyData?.content_blocks[0]?.image
                                )
                              : getFullImageUrl(patStrategyData?.content_blocks[0]?.image)
                  }
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
