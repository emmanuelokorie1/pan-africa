import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/coreServices.png";
import ImageAndTextGrid from "../../Reuseable/Templates/ImageAndTextGrid";

import colocation from "../../../assets/coreService/colocation.png";
import built from "../../../assets/coreService/built.png";
import manage from "../../../assets/coreService/manage.png";
import buy from "../../../assets/coreService/buy.png";
import das from "../../../assets/coreService/das.png";
import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";
import ContactTemp from "../../Reuseable/UI/ContactTemp";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

function CoreServices() {
  const { pathname, state } = useLocation(); // Extract pathname and state from useLocation


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sectionRefs = {
    solution: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    Site: useRef<HTMLDivElement>(null),
    Built: useRef<HTMLDivElement>(null),
    energy: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const sectionToScroll = state?.scrollToSection;
    if (sectionToScroll && sectionRefs[sectionToScroll]?.current) {
      sectionRefs[sectionToScroll].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [state, sectionRefs]);

  const tamps = [
    {
      img: colocation,
      title: "Colocation",
      ref: sectionRefs?.location,
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "Through our towers, we provide clients with space, cooling, physical security, and power to meet their business needs whether it is traditional telephony, broadband, backbone transport, or additional supplementary services.",
    },
    {
      img: built,
      title: "Built-to-suit",
      ref: sectionRefs?.Built,
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "To improve mobile coverage and broadband connectivity, Pan African Tower designs and deploys tower solutions that match the need and meets the specification of our clients.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: manage,
      title: "Managed services",
      ref: sectionRefs?.energy,
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "We provide managed services to towers owned by 3rd party including power, security, maintenance, and monitoring.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: buy,
      title: "Buy-lease-back",
      ref: sectionRefs?.Site,
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "We acquire towers in strategic locations to meet the growing demand for mobile and broadband services.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: das,
      title: "DAS solutions",
      ref: sectionRefs?.solution,
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "With the growing need to improve mobile and broadband connectivity in certain indoor and outdoor spaces, Pan African Towers provides distributed antenna solutions to meet this demand.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
  ];

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
  let tabs = [];

  const BASE_URL = "http://89.38.135.41:9920/";
  
  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };
  
  if (!isLoading && pageDetails) {
    const servicesPage = pageDetails.find((page) => page.title === "Core services");
    if (servicesPage) {
      heroData = servicesPage.heroes[0];
      const subNavs = servicesPage.sub_navs || [];
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
  
    }
  }

  return (
    <div>
      <div>
        <HeaderNav
          // title={"Value added services"}
          title={heroData?.title}

          headerText={
            // "We are at the heart of technology penetration."
            heroData?.subtitle

          
          }
          text={
            // "In the competitive world of telecommunications, delivering superior value to customers goes beyond providing basic voice and data services. At Pan African Towers, we are committed to enriching our customers' experience through an array of innovative Value-Added Services (VAS). These services are designed to meet diverse needs, enhance convenience, and bring more value to our customers' lives."
            heroData?.description

          }
          Img={
            heroData?.image instanceof File
            ? URL.createObjectURL(heroData?.image)
            : getFullImageUrl(heroData?.image)
          }
        />
      </div>

      <section>
        {/* {tamps?.map((e, i) => { */}
        {tabs?.map((e, i) => {

          return (
            <div key={i} ref={e?.ref}>
              {i % 2 ? (
                <div>
                  <div className="bg-secback">
                    <ImageAndGridTextRight
                      title={e?.title}
                      headerText={e?.headerText}
                      text={e?.text}
                      text2={e?.text2}
                      img={e?.img}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="">
                    <ImageAndTextGrid
                      title={e?.title}
                      headerText={e?.headerText}
                      text={e?.text}
                      text2={e?.text2}
                      img={e?.img}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <div>
        <ContactTemp />
      </div>
    </div>
  );
}

export default CoreServices;
