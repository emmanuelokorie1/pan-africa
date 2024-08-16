import ContactTemp from "../Reuseable/UI/ContactTemp";
import HeaderNav from "../Reuseable/UI/HeaderNav";
import gram from "../../assets/egs/Gram.png";
import Timelines from "./Timelines";
import { useEffect } from "react";


function EGS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <HeaderNav
          title={"ESG"}
          headerText={"Environmental, Social and Goverance"}
          text={
            "We are committed to the integration of environmental and social considerations into all aspects of our business activities for the promotion of a sustainable company."
          }
          noImage={true}
        />
      </div>

      <div
        className="flex justify-center text-[2rem] pb-[2rem]"
        style={{ fontFamily: "semibold1" }}
      >
        ESG Governance Structure
      </div>
      <div className="flex justify-center">
        <div className=" w-[800px]">
          <img src={gram} alt="" className="w-[100%]" />
        </div>
      </div>

      <div>
        <Timelines />
      </div>

      <div className="py-[2rem]">
        <ContactTemp />
      </div>

     

      {/* <SeeMoreModal /> */}
    </div>
  );
}

export default EGS;