import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/valueAdded.png";
import ContactTemp from "../../Reuseable/UI/ContactTemp";

import broadband from "../../../assets/valueservice/broadband.png";
import utility from "../../../assets/valueservice/utility.png";
import content from "../../../assets/valueservice/content.png";
import support from "../../../assets/valueservice/support.png";

import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";
import ImageAndTextGrid from "../../Reuseable/Templates/ImageAndTextGrid";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

function ValueAddedServices() {

  const { pathname, state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sectionRefs = {
    Broadband: useRef<HTMLDivElement>(null),
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
      img: broadband,
      title: "Broadband",
      ref: sectionRefs?.Broadband,
      headerText:
        "Growing data demand in our cities overwhelms current communication infrastructure.",
      text1Head: "Wifi",
      text1:
        "Through collaboration with partners, we deploy Wi-Fi at strategic locations.",
      text2Head: "Small cells",
      text2:
        "We are positioned as a neutral host, providing 4G and 5G small cell deployment to network operators through active sharing. This approach is the fastest and most cost-effective way of meeting urban data demand. It eliminates CAPEX for operators and reduces the operating costs for all parties.",
    },
    {
      img: utility,
      title: "Utility",
      ref: null,
      headerText:
        "Our Towers do much more than support telephony and broadband.",
      prevText:
        "From our towers we can provide energy to your business installations; support providers of distance learning and telemedicine; support local agriculture, health, and education.",
      text1Head: "Renewable energy",
      text1:
        "Through our mini-grid partners, we generate clean energy for sales to local communities around our towers.",
      text2Head: "Enabling services",
      text2:
        "Through our towers, we provide distinct services to meet local needs and enable local businesses. For instance, we deploy kiosks at our towers to facilitate the cooling and drying of medicines and farm produce. Through our partners, we provide communication facilities for education and access to trade.",
    },
    {
      img: content,
      title: "Content",
      ref: null,
      headerText:
        "Through our towers, we offer partnership to over-the-top (OTT) players, broadcasters, and advertisers to provide content to their subscribers.",
     text1Head: "Mobile edge offload",
      text1:
        "Video consumption accounts for 70% of local data demand. Through our towers we offer content partners the opportunity to locally cache and serve video content, improving download speeds and user experience.",
      text2Head: "Tower advertising",
      text2:
        "From traditional billboard advertising to mobile GeoAnalytics has driven ad content that targets based on user location; we are your partners.",
    },
    {
      img: support,
      title: "Support",
      ref: null,
      headerText:
        "We offer real-time 24 hours monitoring capability to sites, equipment, and remote installations through.",
     text1Head: "IoT",
      text1:
        "Internet of things",
      text2Head: "RMS",
      text2:
        "(Remote Monitoring Solutions)",
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

  const BASE_URL = "http://89.38.135.41:9920";
  
  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  if (!isLoading && pageDetails) {
    const servicesPage = pageDetails.find((page) => page.title === "Value added services");
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
          // title={"Core services"}
          title={heroData?.title}

          headerText={
            // "Pan African Towers is leading this push with a new generation of mobile technology service innovations."
            heroData?.subtitle

          }
          text={
            // "Pan African Towers Limited, is Nigeria’s largest indigenous telecom tower infrastructure company and the 10th Largest in Africa. We are “The New Face of Connectivity in Africa.” Our Specialties include: Co-location, Infrastructure Sharing, Site Leasing, Built To Suit, Buy Lease Back, Green Energy, and DAS Solution"
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
        {tamps?.map((e, i) => {
          return (
            <div key={i} ref={e?.ref}>
              {i % 2 ? (
                <div>
                  <div className="bg-secback">
                    <ImageAndGridTextRight
                      title={e?.title}
                      headerText={e?.headerText}
                      text={e?.text1}
                      text2={e?.text2}
                      img={e?.img}
                      prevtext={e?.prevText}
                      text1Head={e?.text1Head}
                      text2Head={e?.text2Head}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="">
                    <ImageAndTextGrid
                      title={e?.title}
                      headerText={e?.headerText}
                      text={e?.text1}
                      text2={e?.text2}
                      img={e?.img}
                      prevtext={e?.prevText}
                      text1Head={e?.text1Head}
                      text2Head={e?.text2Head}
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

export default ValueAddedServices;
