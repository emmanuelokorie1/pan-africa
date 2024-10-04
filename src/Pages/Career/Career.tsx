import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/career/careerr.png";
import joinOurTeam from "../../assets/career/join.png";
import ImageAndTextGrid from "../Reuseable/Templates/ImageAndTextGrid";

import career from "../../assets/career/careerTemp.png";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OpenRoleTemplate from "../Reuseable/Templates/OpenRoleTemplate";
import ImageAndGridTextRight from "../Reuseable/Templates/ImageAndGridTextRight";

function Career() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <div>
        <HeaderNav
          title={"Our career"}
          headerText={"Let's rewrite the African connectivity story together."}
          text={
            "Join Nigeria's leading telecom and digital infrastructure provider team and help connect Africa"
          }
          text2={
            "Pan African Towers connects people across the globe, fostering business growth and bridging digital divides. The work we do here has a meaningful impact on millions of lives."
          }
          Img={joinOurTeam}
        />
      </div>

      <ImageAndTextGrid
        title={"Careers"}
        headerText={
          "Pan African Towers Limited is a Telecommunication Infrastructure and Wireless Service Facilitator"
        }
        text={
          "Pan-African Towers is a multiple award-winning telecommunications infrastructure company and wireless service facilitator in Nigeria aimed at catering to the telecommunication needs ranging from broadband, mobile telephony to other local value-added services in Africa."
        }
        img={career}
      />

      <section className="containers mb-[2rem]">
        <div className=" my-[2rem]">
          <div className="text-textColor" style={{ fontFamily: "semibold1" }}>
            Specialized roles
          </div>
          <div className="py-1 text-[1.4rem]" style={{ fontFamily: "bold1" }}>
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
          link2={'https://panafricantowers.zohorecruit.com/forms/ddc1e0e00187c6b7505062c10f82e6a8b31fe2fc49278df307bd0dfd95604009'}
          linkName={'Join our team'}
          img={joinOurTeam}
        />
      </div>
    </div>
  );
}

export default Career;
