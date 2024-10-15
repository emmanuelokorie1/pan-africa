/** @format */

import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/coreValue.png";

import customer1 from "../../../assets/ourcore/customer.png";
import cosumer2 from "../../../assets/ourcore/cosumer2.png";
import customer3 from "../../../assets/ourcore/customer3.png";

import story from "../../../assets/ourcore/story.png";
import { useEffect, useState } from "react";
import OurVision from "../../Reuseable/UI/OurVision";
import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";

import { Image, Skeleton } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

function OurCoreValue() {
  const [message, setMessage] = useState();
  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
      // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });

  let heroData = null;
  let tabTitles = [];
  let propositionData = null;

  let tabs = [];

  const BASE_URL = "http://89.38.135.41:9920/";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  if (!isLoading && pageDetails) {
    const aboutusPage = pageDetails.find(
      (page) => page.title === "Our core values"
    );
    if (aboutusPage) {
      heroData = aboutusPage.heroes[0];
      const subNavs = aboutusPage.sub_navs || [];
      tabs = subNavs.flatMap((subNav) => {
        return subNav.nav_sections.flatMap((navSection) => {
          return navSection.nav_items.map((navItem) => ({
            name: navSection.title,
            title: navItem.title,
            text: navItem.subtitle || "",
            img: getFullImageUrl(navItem.image || ""),
            desc: navItem.description || "",
            btn: "main_btn",
          }));
        });
      });

      const propositionSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 2
      );
      if (propositionSection) {
        propositionData = propositionSection.sub_sections.find(
          (subSection) => subSection.title === "Our Proposition to our clients"
        );
      }
    }
  }

  const [customerTab, setCustomerTab] = useState("Customer Focus");
  const customer = [
    {
      img: customer1,
      name: "Customer Focus",
      text: "We invest time and resources in getting to know our customers. By listening to their feedback, studying their behaviors, and anticipating their needs, we gain valuable insights that help us tailor our products and services to better serve them.",
    },
    {
      img: cosumer2,
      name: "Service Quality",
      text: "We stand behind the quality of our services. Our rigorous standards ensure that every interaction, product, and solution meets our customers' expectations. We continually monitor and improve our processes to maintain the highest level of service excellence.",
    },
    {
      img: customer3,
      name: "Technology Driven",
      text: "At Pan African Towers, we believe that technology is the key to innovation and success. Our Technology Driven core value emphasizes our commitment to leveraging cutting-edge technology to enhance our services and deliver exceptional value to our customers.",
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const imageSize = { width: "100%", height: "100%" };
  return (
    <section>
      <div>
        <HeaderNav
          title={heroData?.title}
          headerText={heroData?.subtitle}
          text={heroData?.description}
          Img={
            heroData?.image instanceof File
              ? URL.createObjectURL(heroData?.image)
              : getFullImageUrl(heroData?.image)
          }
        />
      </div>

      <section className="containers md:mt-[6rem] mt-[1rem]">
        <div className="flex flex-col lg:flex-row xl:justify-evenly justify-between items-center">
          <div className="w-full lg:w-[50%] flex justify-center mb-[2rem] lg:mb-0">
            {tabs?.map((e, i) => {
              return (
                <div key={i} className="w-full lg:w-auto">
                  <div className="transition-all flex justify-center items-center w-[100%]">
                    {customerTab === e?.name && (
                      <div className="w-[400px]">
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
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-[50%]">
            {tabs?.map((e, i) => {
              return (
                <div
                  className="py-[1rem] my-1 px-[1rem] w-full lg:w-[85%] transition-all"
                  key={i}
                  style={{
                    background: customerTab === e?.name ? "white" : undefined,
                    cursor: customerTab === e?.name ? "text" : "pointer",
                    borderLeft:
                      customerTab === e?.name
                        ? "3px solid #E75425"
                        : "3px solid #fce5dd",
                  }}
                  onClick={() => setCustomerTab(e?.name)}
                >
                  <div>
                    <div
                      className="text-[1.4rem]"
                      style={{ fontFamily: "semibold1" }}
                    >
                      {e?.name}
                    </div>
                    <div className="text-gray-600 text-[.95rem] py-1">
                      {e?.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <OurVision />
      </section>

      <div className="bg-gray-50">
        <ImageAndGridTextRight
          // title={"Our Proposition to our clients"}
          title={propositionData?.title || ""}
          headerText={
            // "Our business model is centred around creating unique services that meet the needs of our customers"
            propositionData?.content_blocks[0]?.title || ""
          }
          text={
            // "We make use of cutting edge technology to provide premium service quality with superior cost advanatge. Our use of cutting-edge technology and renewable energy, will enable our clients across Africa lower costs and deliver high quality and reliable service levels across their operations."
            propositionData?.content_blocks[0]?.subtitle || ""
          }
          text2={
            // "Thanks to our staff, processes and technology, we guarantee uparalleled network uptime levels and service reliability"
            propositionData?.content_blocks[0]?.description || ""
          }
          link="/career"
          img={
            // story
            propositionData?.content_blocks[0]?.image instanceof File
              ? URL.createObjectURL(propositionData?.content_blocks[0]?.image)
              : getFullImageUrl(propositionData?.content_blocks[0]?.image)
          }
        />
      </div>
    </section>
  );
}

export default OurCoreValue;
