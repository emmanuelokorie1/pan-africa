import ContactTemp from "../Reuseable/UI/ContactTemp";
import HeaderNav from "../Reuseable/UI/HeaderNav";
import gram from "../../assets/egs/Gram.png";
import Timelines from "./Timelines";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllPages } from "../../lib/apiServices";


function EGS() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

  if (!isLoading && pageDetails) {
    const esgPage = pageDetails.find((page) => page.title === "ESG");
    if (esgPage) {
      heroData = esgPage.heroes[0];
    }
  }
  return (
    <div>
      <div>
        <HeaderNav
          title={heroData?.title}
          headerText={ heroData?.subtitle}
          text={  heroData?.description }
          noImage={true}
        />
      </div>

      {/* <div
        className="flex justify-center md:text-[2rem] text-[1.5rem] pb-[2rem]"
        style={{ fontFamily: "semibold1" }}
      >
        ESG Governance Structure
      </div> */}
      {/* <div className="flex justify-center px-[1rem]">
        <div className=" w-[800px]">
          <img src={gram} alt="" className="w-[100%]" />
        </div>
      </div> */}

      <div className="overflow-x-auto">
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