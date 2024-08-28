import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/career/careerr.png";
import ImageAndTextGrid from "../Reuseable/Templates/ImageAndTextGrid";

import career from "../../assets/career/careerTemp.png";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { useEffect } from "react";

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div>
        <HeaderNav
          title={"Our career"}
          headerText={"Let’s rewrite the African connectivity story together."}
          text={
            "Join Nigeria’s leading telecom and digital infrastructure provider team and help connect Africa"
          }
          text2={
            "Pan African Towers connects people across the globe, fostering business growth and bridging digital divides. The work we do here has a meaningful impact on millions of lives."
          }
          Img={Img}
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

      <div>
        <ContactTemp />
      </div>
    </div>
  );
}

export default Career;
