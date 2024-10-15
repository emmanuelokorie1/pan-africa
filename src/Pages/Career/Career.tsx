import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/career/careerr.png";
import joinOurTeam from "../../assets/career/join.png";
import ImageAndTextGrid from "../Reuseable/Templates/ImageAndTextGrid";

import career from "../../assets/career/careerTemp.png";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OpenRoleTemplate from "../Reuseable/Templates/OpenRoleTemplate";
import ImageAndGridTextRight from "../Reuseable/Templates/ImageAndGridTextRight";
import { useQuery } from "react-query";
import { getAllPages } from "../../lib/apiServices";

function Career() {
  const { pathname } = useLocation();
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
  let carriersData = null;

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


      const propositionSection = aboutusPage.sections.find(
        (section) => section.title === "Header" && section.id === 2
      );
      if (propositionSection) {
        carriersData = propositionSection.sub_sections.find(
          (subSection) => subSection.title === "Our Proposition to our clients"
        );
      }
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <div>
        <HeaderNav
          // title={"Our career"}
          title={heroData?.title}

          // headerText={"Let's rewrite the African connectivity story together."}
          headerText={heroData?.subtitle}

          // text={
          //   "Join Nigeria's leading telecom and digital infrastructure provider team and help connect Africa"
          // }
          // text2={
          //   "Pan African Towers connects people across the globe, fostering business growth and bridging digital divides. The work we do here has a meaningful impact on millions of lives."
          // }
          text={heroData?.description}

          Img={           
             heroData?.image instanceof File
            ? URL.createObjectURL(heroData?.image)
            : getFullImageUrl(heroData?.image)
}
        />
      </div>

      <ImageAndTextGrid
        title={carriersData?.title || ""}

        headerText={      
          carriersData?.content_blocks[0]?.subtitle || ""
        }
        text={
          carriersData?.content_blocks[0]?.description || ""
        }
        img={          carriersData?.content_blocks[0]?.image instanceof File
          ? URL.createObjectURL(carriersData?.content_blocks[0]?.image)
          : getFullImageUrl(carriersData?.content_blocks[0]?.image)
}
      />

      <section className="containers mb-[2rem]">
        <div className=" my-[2rem]">
          <div className="text-textColor" style={{ fontFamily: "semibold1" }}>
            Specialized roles
          </div>
          {/* <div className="py-1 text-[1.4rem]" style={{ fontFamily: "bold1" }}> */}
          <div
            className="text-[1.6rem] py-1"
            style={{ fontFamily: "semibold1" }}
          >
            All open roles
          </div>
          <div className="text-gray-600 ">Come join the team</div>
        </div>

        <div>
          <OpenRoleTemplate
            category="Engineering"
            location="Nigeria"
            jobType="Full-time"
            description="We are looking for someone who can conceptualise and conduct on-the-job training and development initiatives to improve productivity and build the capability of RMS."
            header="Field RMS Engineer"
            link="https://panafricantowers.zohorecruit.com/jobs/Careers/773673000000926001/Field-RMS-Engineer?source=CareerSite"
          />
        </div>
        <div className="py-[2rem]">
          <OpenRoleTemplate
            category="HR"
            location="Nigeria"
            jobType="Full-time"
            description="We're looking for a creative who will oversee the development and maintenance of a competitive salary structure, ensuring internal equity and external competitiveness."
            header="Manager, Compensation & Benefits and Employee Engagement"
            link="https://panafricantowers.zohorecruit.com/jobs/Careers/773673000001010007/Manager-Employee-Engagement-Compensation-and-Benefit?source=CareerSite"
          />
        </div>
        <div>
          <OpenRoleTemplate
            category="Finance"
            location="Nigeria"
            jobType="Full-time"
            description="We're looking for someone who will be responsible for providing quality
          control and oversight of the company's budget estimates and spending
          projections for completeness and accuracy"
            header="General Manager, Financial Planning & Analysis"
            link="https://panafricantowers.zohorecruit.com/jobs/Careers/773673000000521005/General-Manager-Financial-Planning-Analysis?source=CareerSite"
          />
        </div>
      </section>

      <div>
        <ImageAndGridTextRight
          title="Talent"
          headerText={"Join our network of talents"}
          text={
            "Don't see any role that interests you? Join our talent network and we'll get back to you with openings that match your skills."
          }
          link2={
            "https://panafricantowers.zohorecruit.com/forms/ddc1e0e00187c6b7505062c10f82e6a8b31fe2fc49278df307bd0dfd95604009"
          }
          linkName={"Join our team"}
          img={joinOurTeam}
        />
      </div>
    </div>
  );
}

export default Career;
