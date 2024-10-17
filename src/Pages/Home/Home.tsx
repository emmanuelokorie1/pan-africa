/** @format */

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

import Icon1 from "../../assets/home/zooms/icons/tower.png";
import infra from "../../assets/home/zooms/icons/infra.png";
import power from "../../assets/home/zooms/icons/tenant.png";
import icon4 from "../../assets/home/zooms/icons/exp.png";
import ImageAndTextGrid from "../Reuseable/Templates/ImageAndTextGrid";
import CenteredHeader from "../Reuseable/Templates/CenteredHeader";
import Swipper from "../Reuseable/UI/Swipper";
// import Marquee from "../Reuseable/UI/Marquee";

import eti from "../../assets/home/marquee/eti.svg";
import lite from "../../assets/home/marquee/lite.svg";
import mtn from "../../assets/home/marquee/mtn.svg";
import nat from "../../assets/home/marquee/nat.svg";
import smile from "../../assets/home/marquee/smile.svg";
import spec from "../../assets/home/marquee/spec.svg";
import sys from "../../assets/home/marquee/sys.svg";
import ntel from "../../assets/home/marquee/ntel.png";
import flux from "../../assets/home/marquee/flux.png";
import csl from "../../assets/home/marquee/csl.png";

import LeftHeader from "../Reuseable/Templates/LeftHeader";
import ImageCard from "../Reuseable/UI/ImageCard";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useQuery } from "react-query";
import { getAllPages } from "../../lib/apiServices";

function Home() {
  const imageUrls = [
    eti,
    lite,
    mtn,
    nat,
    smile,
    spec,
    sys,
    ntel,
    flux,
    csl,
    // smile,
    // smile,
    // spec,
    // sys,
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [message, setMessage] = useState("");
  let followData = null;
  let activityData = null;
  let tenantsData = null;
  let experienceData = null;
  let whoweareData = null;
  let servicesData = null;
  let clientsData = null;
  let clientsCards = [];
  let carriersData = null;

  let newsData = null;
  let ceoData = null;
  let towersData = null;
  let africaNewsData = null;

  const BASE_URL = "http://89.38.135.41:9920";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
      // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });

  if (!isLoading && pageDetails) {
    const aboutusPage = pageDetails.find((page) => page.title === "Home");
    if (aboutusPage) {
      const followSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 40
      );
      const activitySection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 41
      );
      const WhoAreWeSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 42
      );
      const servicesSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 43
      );
      const clientsSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 44
      );
      const newsSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 45
      );
      const carrerSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 46
      );
      if (followSection) {
        followData = followSection.sub_sections.find(
          (subSection) => subSection.title === "We follow"
        );
      }
      if (activitySection) {
        activityData = activitySection.sub_sections.find(
          (subSection) => subSection.title === "Active sites"
        );
        tenantsData = activitySection.sub_sections.find(
          (subSection) => subSection.title === "Tenants"
        );
        experienceData = activitySection.sub_sections.find(
          (subSection) => subSection.title === "Experience"
        );
      }
      if (WhoAreWeSection) {
        whoweareData = WhoAreWeSection.sub_sections.find(
          (subSection) => subSection.title === "Who we are"
        );
      }
      if (servicesSection) {
        servicesData = servicesSection.sub_sections.find(
          (subSection) => subSection.title === "Our services"
        );
      }
      if (clientsSection) {
        clientsData = servicesSection.sub_sections.find(
          (subSection) => subSection.title === "Our clients"
        );
        clientsCards = clientsSection.cards;
      }
      if (newsSection) {
        newsData = newsSection.sub_sections.find(
          (subSection) => subSection.title === "News"
        );
        ceoData = newsSection.sub_sections.find(
          (subSection) => subSection.title === "CEO"
        );
        towersData = newsSection.sub_sections.find(
          (subSection) => subSection.title === "Towers"
        );
        africaNewsData = newsSection.sub_sections.find(
          (subSection) =>
            subSection.title ===
            "Pan African Towers becomes one of the leading telecommunication companies in Africa"
        );
      }
      if (carrerSection) {
        carriersData = carrerSection.sub_sections.find(
          (subSection) => subSection.title === "Careers"
        );
      }
    }
  }
  return (
    <div className="overflow-x-hidden">
      <BackgroundSlideshow />
      {/* data-aos="zoom-in" data-aos-once="true" */}
      <div className="flex justify-center bg-gray-50">
        <div className="text-textColor md:py-[3rem] py-[2rem] md:w-[70%] sm:w-[80%] w-[90%] text-[1.3rem] text-center">
          <span className="text-black">{followData?.title}</span>{" "}
          {followData?.content_blocks[0]?.subtitle}
        </div>
      </div>

      <div className="grid s1000:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-[1rem] s1000:px-0">
        {/* <div>
          <ZoomImage
            images={[{ url: zoom1 }, { url: zoom2 }]}
            text="Our extensive tower network ensures that our customers stay connected, no matter where they are. Trust Pan African Towers to provide reliable and consistent service, powered by one of the largest tower infrastructures in the industry."
            header="Towers"
            nums={"1000+"}
            icon={Icon1}
          />
        </div> */}
        <div>
          <ZoomImage
            images={[
              {
                url:
                  activityData?.image instanceof File
                    ? URL.createObjectURL(activityData?.image)
                    : getFullImageUrl(activityData?.image),
              },
              {
                url:
                  activityData?.content_blocks[0]?.image instanceof File
                    ? URL.createObjectURL(
                        activityData?.content_blocks[0]?.image
                      )
                    : getFullImageUrl(activityData?.content_blocks[0]?.image),
              },
            ]}
            text={activityData?.content_blocks[0]?.description}
            header={activityData?.content_blocks[0]?.subtitle}
            nums={activityData?.content_blocks[0]?.title}
            icon={infra}
          />
        </div>
        <div>
          <ZoomImage
            images={[
              {
                url:
                  tenantsData?.image instanceof File
                    ? URL.createObjectURL(tenantsData?.image)
                    : getFullImageUrl(tenantsData?.image),
              },
              {
                url:
                  tenantsData?.content_blocks[0]?.image instanceof File
                    ? URL.createObjectURL(tenantsData?.content_blocks[0]?.image)
                    : getFullImageUrl(tenantsData?.content_blocks[0]?.image),
              },
            ]}
            text={tenantsData?.content_blocks[0]?.description}
            header={tenantsData?.content_blocks[0]?.subtitle}
            nums={tenantsData?.content_blocks[0]?.title}
            icon={power}
          />
        </div>
        <div>
          <ZoomImage
            images={[
              {
                url:
                  experienceData?.image instanceof File
                    ? URL.createObjectURL(experienceData?.image)
                    : getFullImageUrl(experienceData?.image),
              },
              {
                url:
                  experienceData?.content_blocks[0]?.image instanceof File
                    ? URL.createObjectURL(
                        experienceData?.content_blocks[0]?.image
                      )
                    : getFullImageUrl(experienceData?.content_blocks[0]?.image),
              },
            ]}
            text={experienceData?.content_blocks[0]?.description}
            header={experienceData?.content_blocks[0]?.subtitle}
            nums={experienceData?.content_blocks[0]?.title}
            icon={icon4}
          />
        </div>
      </div>

      <div>
        <ImageAndTextGrid
          title={whoweareData?.content_blocks[0]?.title}
          headerText={whoweareData?.content_blocks[0]?.subtitle}
          text={whoweareData?.content_blocks[0]?.description}
          linkName="Meet the Team"
          link={"/who-we-are"}
        />
      </div>

      <div className="bg-white">
        <div>
          <CenteredHeader
            title={servicesData?.content_blocks[0]?.title}
            text={servicesData?.content_blocks[0]?.subtitle}
          />
        </div>

        <div>
          <Swipper />
        </div>
      </div>

      <div className=" md:px-[7rem] s900:px-[10rem] sm:px-[5rem] px-[3rem] py-[3rem]">
        <div className="pb-[2rem]">
          <CenteredHeader
            title={clientsData?.content_blocks[0]?.title}
            text={clientsData?.content_blocks[0]?.subtitle}
          />
        </div>

        {/* <Marquee images={imageUrls} speed={0.5} /> */}
        <Marquee>
          {clientsCards?.map((e, i) => {
            return (
              <div key={i}>
                {/* <img src={e} alt={i + "image"} /> */}
                <img src={getFullImageUrl(e.image)} alt={`${i} image`} />
              </div>
            );
          })}
        </Marquee>
      </div>

      <div className="md:w-[55%] w-[100%] md:ps-[7rem] sm:ps-[5rem] ps-[3rem]">
        <LeftHeader
          title={newsData?.content_blocks[0]?.title}
          text={newsData?.content_blocks[0]?.subtitle}
        />
      </div>

      <div className="containers flex justify-center pb-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
          <ImageCard
            image={
              ceoData?.content_blocks[0]?.image instanceof File
                ? URL.createObjectURL(ceoData?.content_blocks[0]?.image)
                : getFullImageUrl(ceoData?.content_blocks[0]?.image)
            }
            text={ceoData?.content_blocks[0]?.title}
            link={"/see-news/1"}
          />
          <ImageCard
            image={            
              towersData?.content_blocks[0]?.image instanceof File
              ? URL.createObjectURL(towersData?.content_blocks[0]?.image)
              : getFullImageUrl(towersData?.content_blocks[0]?.image)
}
            text={towersData?.content_blocks[0]?.title}
            link={"/see-news/2"}
          />
          <ImageCard
            image={              africaNewsData?.content_blocks[0]?.image instanceof File
              ? URL.createObjectURL(africaNewsData?.content_blocks[0]?.image)
              : getFullImageUrl(africaNewsData?.content_blocks[0]?.image)
}
            text={africaNewsData?.content_blocks[0]?.title}

            link={"/see-news/3"}
          />
        </div>
      </div>

      <div className="bg-gray-50">
        <ImageAndTextGrid
        title={carriersData?.title || ""}
        headerText={carriersData?.content_blocks[0]?.title || ""}
          text={
            carriersData?.content_blocks[0]?.subtitle || ""     
               }
          text2={
            carriersData?.content_blocks[0]?.description || ""          }
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
