import BackgroundSlideshow from "./BackgroundSlideshow";
import ZoomImage from "./ZoomImage";
import zoom1 from "../../assets/home/zooms/zoom1.png";
import zoom2 from "../../assets/home/zooms/zoom2.png";

import zoom3 from "../../assets/home/zooms/zoom3.png";
import zoom4 from "../../assets/home/zooms/zoom4.png";

import zoom5 from "../../assets/home/zooms/zoom5.png";
import zoom6 from "../../assets/home/zooms/zoom6.png";

import zoom7 from "../../assets/home/zooms/zoom7.png";
import zoom8 from "../../assets/home/zooms/zoom8.png";

import cardImg1 from "../../assets/home/cardImgs/cardImg1.png";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.png";
import cardImg3 from "../../assets/home/cardImgs/cardImg3.png";

import careerr from "../../assets/career/careerr.png";

import Icon1 from "../../assets/home/zooms/icons/tower.svg";
import infra from "../../assets/home/zooms/icons/infra.svg";
import power from "../../assets/home/zooms/icons/power.svg";
import icon4 from "../../assets/home/zooms/icons/icon4.svg";
import ImageAndTextGrid from "../Reuseable/Templates/ImageAndTextGrid";
import CenteredHeader from "../Reuseable/Templates/CenteredHeader";
import Swipper from "../Reuseable/UI/Swipper";
import Marquee from "../Reuseable/UI/Marquee";
import eti from "../../assets/home/marquee/eti.svg";
import lite from "../../assets/home/marquee/lite.svg";
import mtn from "../../assets/home/marquee/mtn.svg";
import nat from "../../assets/home/marquee/nat.svg";
import smile from "../../assets/home/marquee/smile.svg";
import spec from "../../assets/home/marquee/spec.svg";
import sys from "../../assets/home/marquee/sys.svg";
import LeftHeader from "../Reuseable/Templates/LeftHeader";
import ImageCard from "../Reuseable/UI/ImageCard";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const imageUrls = [
    eti,
    lite,
    mtn,
    nat,
    smile,
    spec,
    sys,
    eti,
    lite,
    // nat,
    // smile,
    // smile,
    // spec,
    // sys,
  ];

  const { pathname, state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sectionRefs = {
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

  return (
    <div className="overflow-x-hidden">
      <BackgroundSlideshow />
      {/* data-aos="zoom-in" data-aos-once="true" */}
      <div className="flex justify-center bg-gray-50">
        <div className="text-textColor md:py-[3rem] py-[2rem] md:w-[70%] sm:w-[80%] w-[90%] text-[1.3rem] text-center">
          <span className="text-black">We aim to follow</span> an unconventional
          approach by collaborating with partners in a new eco system to meet
          African data consumption needs.
        </div>
      </div>

      <div className="grid s1000:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-[1rem] s1000:px-0">
        <div>
          <ZoomImage
            images={[{ url: zoom1 }, { url: zoom2 }]}
            text="Our extensive tower network ensures that our customers stay connected, no matter where they are. Trust Pan African Towers to provide reliable and consistent service, powered by one of the largest tower infrastructures in the industry."
            header="Towers"
            nums={"1000+"}
            icon={Icon1}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom3 }, { url: zoom4 }]}
            text="With over 750 active sites across the country, our company ensures unmatched connectivity and coverage. Our robust infrastructure powers reliable communication services, reaching even the most remote areas."
            header="Active sites"
            nums="764"
            icon={infra}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom5 }, { url: zoom6 }]}
            text="Our extensive network and dedicated services empower a diverse range of tenants to stay connected effortlessly. Join our growing community and experience the reliability and innovation that we bring to the telecommunications industry."
            header="Tenants"
            nums="1200"
            icon={power}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom7 }, { url: zoom8 }]}
            text="With over five years of experience, our company has been a trusted leader in delivering cutting-edge communication solutions. Our experience and commitment to innovation have kept us at the forefront of the industry, ensuring seamless connectivity for businesses and individuals alike"
            header="Experience"
            nums="5+"
            icon={icon4}
          />
        </div>
      </div>

      <div>
        <ImageAndTextGrid
          title={"Who we are"}
          headerText={
            "Pan African Towers Limited is a Telecommunication Infrastructure and  service Facilitator"
          }
          text={
            "Pan-African Towers is a multiple award-winning telecommunications infrastructure company and wireless service facilitator in Nigeria aimed at catering to the telecommunication needs ranging from broadband, mobile telephony to other local value-added services in Africa."
          }
          link={"/who-are-we"}
        />
      </div>

      <div className="bg-white" ref={sectionRefs?.energy}>
        <div>
          <CenteredHeader
            title={"Our services"}
            text={
              "Pan African Towers Limited, is Nigeria's largest indigenous telecom tower infrastructure company and the 10th Largest in Africa. We are “The New Face of Connectivity in Africa."
            }
          />
        </div>

        <div>
          <Swipper />
        </div>
      </div>

      <div className=" md:px-[7rem] s900:px-[10rem] sm:px-[5rem] px-[3rem] py-[3rem]">
        <div className="pb-[2rem]">
          <CenteredHeader
            title={"Our clients"}
            text={
              "We're continually working to change the way people think about and engage with our products"
            }
          />
        </div>

        <Marquee images={imageUrls} speed={0.5} />
      </div>

      <div className="md:w-[55%] w-[100%] md:ps-[7rem] sm:ps-[5rem] ps-[3rem]">
        <LeftHeader
          title={"News"}
          text={
            "The latest industry news, technology, resources and interviews"
          }
        />
      </div>

      <div className="containers flex justify-center pb-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
          <ImageCard
            image={cardImg1}
            text="Pan African Towers Appoints Azeez Amida as CEO"
            link={"/see-news/1"}
          />
          <ImageCard
            image={cardImg2}
            text="DPI and Verod Capital partner to back management of Pan African Towers."
            link={"/see-news/2"}
          />
          <ImageCard
            image={cardImg3}
            text="Pan African Towers becomes one of the leading telecommunication companies in Africa"
            link={"/see-news/3"}
          />
        </div>
      </div>

      <div className="bg-gray-50">
        <ImageAndTextGrid
          title={"Careers"}
          headerText={"Let's rewrite the African connectivity story together"}
          text={
            "Join Nigeria's leading telecom and digital infrastructure provider team and help connect Africa"
          }
          text2={
            "We are always open to new talent joining our team of experts operating in Nigeria and across Africa. We are looking for people to help us grow our business, join our team"
          }
          img={careerr}
          link={"/career"}
        />
      </div>

      <div className="">
        <ContactTemp />
      </div>
    </div>
  );
}

export default Home;
