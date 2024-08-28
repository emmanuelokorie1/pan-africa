import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/whoarewe.png";
import ContactTemp from "../../Reuseable/UI/ContactTemp";
import company from "../../../assets/WhoAreWe/company.png";
import achievement from "../../../assets/WhoAreWe/achievement.png";
import why from "../../../assets/WhoAreWe/why.png";
import achiveIcon from "../../../assets/WhoAreWe/achiveIcon.svg";
import companyIcon from "../../../assets/WhoAreWe/companyIcon.svg";
import whyIcon from "../../../assets/WhoAreWe/whyIcon.svg";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import LeftHeader from "../../Reuseable/Templates/LeftHeader";

import cardImg1 from "../../../assets/WhoAreWe/teams/team1.png";
import oladipo from "../../../assets/WhoAreWe/teams/oladipo.png";
import panda from "../../../assets/WhoAreWe/teams/panda.png";
import babatunde from "../../../assets/WhoAreWe/teams/babatunde.png";
import chisom from "../../../assets/WhoAreWe/teams/chisom.png";
import abimbola from "../../../assets/WhoAreWe/teams/abimbola.png";
import ife from "../../../assets/WhoAreWe/teams/ife.png";

import saya from "../../../assets/WhoAreWe/teams/saya.png";
import daniel from "../../../assets/WhoAreWe/teams/daniel.png";
import marc from "../../../assets/WhoAreWe/teams/marc.png";
import deisel from "../../../assets/WhoAreWe/teams/deisel.png";
import gupta from "../../../assets/WhoAreWe/teams/gupta.png";

import TeemCard from "../../Reuseable/UI/TeemCard";

import { Image, Skeleton } from "@arco-design/web-react";

interface Tab {
  name: string;
  icon: string;
  data: {
    headerText: string;
    text: string | string[]; // This can now be either a string or an array of strings
    text2?: string;
    img: any;
  };
}

const imageSize = { width: "100%", height: "100%" };

function WhoAreWe() {
  const tabs: Tab[] = [
    {
      name: "Company Profile",
      icon: companyIcon,
      data: {
        headerText: "Anchored on an Innovative Approach to Designing Towers",
        text: "Pan-African Towers is a multiple award-winning telecommunications infrastructure company and wireless service facilitator in Nigeria aimed at catering to the telecommunication needs ranging from broadband, mobile telephony to other local value-added services in Africa. The company debuted in 2017, offering a unique infrastructural experience to deliver best-in-class services to all their clients’ and their end customers across the African marketplace. Since its operations, Pan-African Towers now have nearly one thousand (1000) towers in all cities in Nigeria.",
        text2:
          "Pan-African towers is focused on giving various telecommunication network operators in Africa the much-needed support to reduce costs and deliver high quality and reliable service levels across their operations.",
        img: company,
      },
    },
    {
      name: "Our Achievements",
      icon: achiveIcon,
      data: {
        headerText:
          "With these accomplishments and more, Pan-African Towers Limited, is dedicated and committed to becoming a clear leader in mobile infrastructure sharing operations in Africa.",
        text: [
          "Africa’s Best Telecom Infrastructure Company of the Year Award (2021)",
          "Most Energy Efficient Telecom Infrastructure Provider of the Year Award (2021)",
          "Pan African International Award (2021)",
          "Telecom Infrastructure Company of the Year Award (2021)",
          "Emerging Tower Company of the Year Award (2020)",
          "Telecom Infrastructure Company of the Year Award (2020)",
          "Emerging Tower Company of the Year Award (2019)",
          "Leading Telecom Service Provider of the Year Award (2019)",
        ],
        img: achievement,
      },
    },
    {
      name: "Why Pan African Towers?",
      icon: whyIcon,
      data: {
        headerText: "Anchored on an Innovative Approach to Designing Towers",
        text: "Pan-African Towers is a multiple award-winning telecommunications infrastructure company and wireless service facilitator in Nigeria aimed at catering to the telecommunication needs ranging from broadband, mobile telephony to other local value-added services in Africa. The company debuted in 2017, offering a unique infrastructural experience to deliver best-in-class services to all their clients’ and their end customers across the African marketplace. Since its operations, Pan-African Towers now have nearly one thousand (1000) towers in all cities in Nigeria.",
        text2:
          "Pan-African towers is focused on giving various telecommunication network operators in Africa the much-needed support to reduce costs and deliver high quality and reliable service levels across their operations.",
        img: why,
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tabValue, setTabValue] = useState("Company Profile");
  return (
    <section>
      <div>
        <HeaderNav
          title={"Who we are"}
          headerText={
            "Pan African Towers Limited is a Telecommunication Infrastructure and Wireless Service Facilitator"
          }
          text={
            "Pan-African Towers is a multiple award-winning telecommunications infrastructure company and wireless service facilitator in Nigeria aimed at catering to the telecommunication needs ranging from broadband, mobile telephony to other local value-added services in Africa."
          }
          Img={Img}
        />
      </div>

      <div className="my-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabs?.map((e, i) => {
            return (
              <div key={i}>
                <div
                  className={`flex justify-center items-center py-[1.5rem] gap-[.6rem] text-[1.1rem] transition-all border-b border-[#bebebe] ${
                    tabValue === e?.name
                      ? "bg-[#AE3A20] text-white"
                      : "text-[#494949]"
                  }`}
                  style={{
                    cursor: tabValue === e?.name ? "default" : "pointer",
                  }}
                  onClick={() => setTabValue(e?.name)}
                >
                  {tabValue === e?.name && (
                    <div>
                      <img src={e?.icon} alt="" />
                    </div>
                  )}

                  <div>{e?.name}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {tabs?.map((e: Tab, i: number) => {
            return (
              <div key={i}>
                {tabValue === e?.name && (
                  <div className="bg-[#AE3A20] flex flex-col lg:flex-row justify-between h-auto lg:h-[600px]">
                    <aside className="w-full lg:w-[50%] mt-[2rem] lg:mt-[7rem] px-[2rem] xl:px-[7rem] lg:px-[3rem] ">
                      <div className="text-[1.3rem] text-white">
                        {e?.data?.headerText}
                      </div>
                      <div className="text-[#d7d7d7] text-[.9rem] pt-[1rem]">
                        {e?.name === "Company Profile" ||
                        e?.name === "Why Pan African Towers?" ? (
                          <>
                            <div className="py-[1rem]">{e?.data?.text}</div>
                            <div>{e?.data?.text2}</div>
                          </>
                        ) : (
                          <div>
                            {e?.data?.text?.map((item, i) => (
                              <div
                                key={i}
                                className="flex gap-2 items-center text-[#d7d7d7] text-[.9rem] py-[.3rem]"
                              >
                                <LuDot />
                                <div>{item}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </aside>
                    <aside className="w-full lg:w-[50%] flex justify-center items-center">
                      <div className="w-[400px] px-[1rem] pt-[1rem] md:w-[400px] lg:w-[500px]">
                        <Image
                          className="w-full h-[350px] lg:h-auto"
                          src={e?.data?.img}
                          alt=""
                          preview={false}
                          lazyload={{ threshold: 0.5 }}
                          loader={
                            <Skeleton
                              image={{ style: imageSize }}
                              text={true}
                              animation
                            />
                          }
                        />
                      </div>
                    </aside>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <section className="containers">
        <div className="w-[100%] md:w-[50%] s1000:w-[30%]">
          <LeftHeader
            title={"Our Team"}
            text={"Meet the management team"}
            text2={
              "Our industry experience and specialist insight allow us to maintain market leadership"
            }
          />
        </div>

        <section className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
            <TeemCard
              image={cardImg1}
              name="Azeez Amida"
              role="MD & CEO"
              fullrole="Managing Director & Chief Executive Officer"
              id={1}
            />
            <TeemCard
              image={oladipo}
              name="Oladipo Badru"
              role="CFO"
              fullrole="Chief Financial Officer"
              id={2}
            />
            <TeemCard
              image={panda}
              name="Arun Panda"
              role="CTO"
              fullrole="Chief Technology Officer"
              id={3}
            />
            <TeemCard
              image={babatunde}
              name="Babatunde Omoyemi Olaniyan"
              role="GC"
              fullrole="General Counsel"
              id={4}
            />
            <TeemCard
              image={chisom}
              name="Chisom Ndukwe"
              role="S.V President HR"
              fullrole="Senior Vice President Human Resources"
              id={5}
            />
            <TeemCard
              image={abimbola}
              name="Abimbola Folape"
              role="S.V President Commercial"
              fullrole="Senior Vice President Commercial"
              id={6}
            />
            <TeemCard
              image={ife}
              name="Ife-Olorun Ajayi"
              role="HSS"
              fullrole="Head Shared Services"
              id={7}
            />
          </div>
        </section>
      </section>

      <section className="containers py-[6rem]">
        <div className="text-[1.6rem]" style={{ fontFamily: "semibold1" }}>
          Meet the board members
        </div>

        <section className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
            <TeemCard
              image={saya}
              name="Adefolarin Ogunsaya"
              role="Non Executive Director"
              fullrole="Non Executive Director"
              id={8}
            />
            <TeemCard
              image={cardImg1}
              name="Azeez Amida"
              role="MD & CEO"
              fullrole="Managing Director & Chief Executive Officer"
              id={1}
            />
            <TeemCard
              image={daniel}
              name="Daniel Adeoye"
              role="Non Executive Director"
              fullrole="Non Executive Director"
              id={9}
            />
            <TeemCard
              image={marc}
              name="Marc Stoneham"
              role="Non Executive Director"
              fullrole="Non Executive Director"
              id={10}
            />
            <TeemCard
              image={deisel}
              name="Jyoti Desai"
              role="Non Executive Director"
              fullrole="Non Executive Director"
              id={11}
            />
            <TeemCard
              image={gupta}
              name="Vivek Gupta"
              role="Non Executive Director"
              fullrole="Non Executive Director"
              id={12}
            />
          </div>
        </section>
      </section>

      <div>
        <ContactTemp />
      </div>
    </section>
  );
}

export default WhoAreWe;
