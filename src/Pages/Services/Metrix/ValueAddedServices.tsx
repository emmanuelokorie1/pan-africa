import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/coreServices.svg";
import ContactTemp from "../../Reuseable/UI/ContactTemp";

import broadband from "../../../assets/valueservice/broadband.svg";
import utility from "../../../assets/valueservice/utility.svg";
import content from "../../../assets/valueservice/content.svg";
import support from "../../../assets/valueservice/support.svg";

import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";
import ImageAndTextGrid from "../../Reuseable/Templates/ImageAndTextGrid";

function ValueAddedServices() {
  const tamps = [
    {
      img: broadband,
      title: "Broadband",
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
  return (
    <div>
      <div>
        <HeaderNav
          title={"Core services"}
          headerText={
            "Pan African Towers is leading this push with a new generation of mobile technology service innovations."
          }
          text={
            "Pan African Towers Limited, is Nigeria’s largest indigenous telecom tower infrastructure company and the 10th Largest in Africa. We are “The New Face of Connectivity in Africa.” Our Specialties include: Co-location, Infrastructure Sharing, Site Leasing, Built To Suit, Buy Lease Back, Green Energy, and DAS Solution"
          }
          Img={Img}
        />
      </div>

      <section>
        {tamps?.map((e, i) => {
          return (
            <div key={i}>
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
