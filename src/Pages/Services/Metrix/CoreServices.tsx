import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/coreServices.png";
import ImageAndTextGrid from "../../Reuseable/Templates/ImageAndTextGrid";

import colocation from "../../../assets/coreService/colocation.png";
import built from "../../../assets/coreService/built.png";
import manage from "../../../assets/coreService/manage.png";
import buy from "../../../assets/coreService/buy.png";
import das from "../../../assets/coreService/das.png";
import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";
import ContactTemp from "../../Reuseable/UI/ContactTemp";

function CoreServices() {
  const tamps = [
    {
      img: colocation,
      title: "Colocation",
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "Through our towers, we provide clients with space, cooling, physical security, and power to meet their business needs whether it is traditional telephony, broadband, backbone transport, or additional supplementary services.",
    },
    {
      img: built,
      title: "Built-to-suit",
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "To improve mobile coverage and broadband connectivity, Pan African Tower designs and deploys tower solutions that match the need and meets the specification of our clients.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: manage,
      title: "Managed services",
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "We provide managed services to towers owned by 3rd party including power, security, maintenance, and monitoring.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: buy,
      title: "Buy-lease-back",
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "We acquire towers in strategic locations to meet the growing demand for mobile and broadband services.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
    {
      img: das,
      title: "DAS solutions",
      headerText:
        "Grow Towers, Position for Data Demands and Bridge the Power Gap",
      text: "With the growing need to improve mobile and broadband connectivity in certain indoor and outdoor spaces, Pan African Towers provides distributed antenna solutions to meet this demand.",
      text2:
        "Our telecommunications strategy is designed to provide exceptional connectivity solutions that empower our customers and drive technological advancement. Our strategy focuses on innovation, reliability, customer satisfaction, and sustainability, ensuring we meet the growing demands of a digitally connected world.",
    },
  ];

  return (
    <div>
      <div>
        <HeaderNav
          title={"Value added services"}
          headerText={"We are at the heart of technology penetration."}
          text={
            "In the competitive world of telecommunications, delivering superior value to customers goes beyond providing basic voice and data services. At Pan African Towers, we are committed to enriching our customers' experience through an array of innovative Value-Added Services (VAS). These services are designed to meet diverse needs, enhance convenience, and bring more value to our customers' lives."
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
                      text={e?.text}
                      text2={e?.text2}
                      img={e?.img}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="">
                    <ImageAndTextGrid
                      title={e?.title}
                      headerText={e?.headerText}
                      text={e?.text}
                      text2={e?.text2}
                      img={e?.img}
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

export default CoreServices;
