import BackgroundSlideshow from "./BackgroundSlideshow";
import ZoomImage from "./ZoomImage";
import zoom1 from "../../assets/home/zooms/zoom1.svg";
import zoom2 from "../../assets/home/zooms/zoom2.svg";

import zoom3 from "../../assets/home/zooms/zoom3.svg";
import zoom4 from "../../assets/home/zooms/zoom4.svg";

import zoom5 from "../../assets/home/zooms/zoom5.svg";
import zoom6 from "../../assets/home/zooms/zoom6.svg";

import zoom7 from "../../assets/home/zooms/zoom7.svg";
import zoom8 from "../../assets/home/zooms/zoom8.svg";

import cardImg1 from "../../assets/home/cardImgs/cardImg1.svg";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.svg";
import cardImg3 from "../../assets/home/cardImgs/cardImg3.svg";

import careerr from "../..//assets/career/careerr.svg";

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
import { useEffect } from "react";

function Home() {
  const imageUrls = [
    eti,
    lite,
    mtn,
    nat,
    smile,
    smile,
    spec,
    sys,
    eti,
    lite,
    mtn,
    // nat,
    // smile,
    // smile,
    // spec,
    // sys,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <BackgroundSlideshow />

      <div className="flex justify-center bg-gray-50" data-aos="zoom-in">
        <div className="text-textColor md:py-[4rem] py-[2rem] md:w-[70%] sm:w-[80%] w-[90%] text-[1.3rem] text-center">
          We aim to follow an unconventional approach by collaborating with
          partners in a new eco system to meet African data consumption needs.
        </div>
      </div>

      <div className="grid s1000:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 px-[2rem] s1000:px-0">
        <div>
          <ZoomImage
            images={[{ url: zoom1 }, { url: zoom2 }]}
            text="In the tower business, our focus is on developing cost leadership, improving quality of service, and growing the business including entry into other key African Countries"
            header="TowerCo"
            icon={Icon1}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom3 }, { url: zoom4 }]}
            text="We provide sustainable, dynamic & innovative infrastructure solutions and platforms to transform communities through technology in an efficient manner."
            header="InfraCo"
            icon={infra}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom5 }, { url: zoom6 }]}
            text="Africa has a significant energy shortage. We can help bridge the gap by providing energy beyond our towers. We are positioned to meet the energy needs of local communities and businesses"
            header="PowerCo"
            icon={power}
          />
        </div>
        <div>
          <ZoomImage
            images={[{ url: zoom7 }, { url: zoom8 }]}
            text="Years of service in Africa"
            header="65+"
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

      <div className="bg-white">
        <div>
          <CenteredHeader
            title={"Our services"}
            text={
              "Pan African Towers Limited, is Nigeria’s largest indigenous telecom tower infrastructure company and the 10th Largest in Africa. We are “The New Face of Connectivity in Africa."
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
              "We’re continually working to change the way people think about and engage with our products"
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
          headerText={"Let’s rewrite the African connectivity story together"}
          text={
            "Join Nigeria’s leading telecom and digital infrastructure provider team and help connect Africa"
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
